import { t, locale, country, preset } from "./i18n.js";
import { categories, measures } from "./data.js";
const $ = (s) => document.querySelector(s);
const countryCodes = {
  kor: "KR",
  jpn: "JP",
  deu: "DE",
  ind: "IN",
  aus: "AU",
  bra: "BR",
  usa: "US",
};
for (const c of Object.values(categories)) {
  c.dimension = t(c.dimension);
  c.note = t(c.note);
  c.items = c.items.map((x) => [
    x[0],
    countryCodes[x[0]] ? country(countryCodes[x[0]], x[1]) : t(x[1]),
    x[2],
  ]);
}
let category = "area",
  svg = "";
const fmt = (n) => n.toLocaleString(locale, { maximumSignificantDigits: 8 });
const esc = (s) =>
  String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll('"', "&quot;");
function setup(c) {
  category = c;
  document
    .querySelectorAll("[data-category]")
    .forEach((b) =>
      b.setAttribute("aria-pressed", String(b.dataset.category === c)),
    );
  for (const id of ["first", "second"])
    $("#" + id).replaceChildren(
      ...categories[c].items.map(([value, name]) => {
        const o = document.createElement("option");
        o.value = value;
        o.textContent = name;
        return o;
      }),
    );
  $("#first").value = c === "space" ? "earth" : categories[c].items[0][0];
  $("#second").value = c === "space" ? "jupiter" : categories[c].items[1][0];
  $("#custom").value = "";
  $("#unit-help").textContent = t(
    "Unit: {unit}. Leave blank to use the selected object.",
    { unit: categories[c].unit },
  );
}
function draw() {
  try {
    const c = categories[category],
      a = c.items.find((i) => i[0] === $("#first").value),
      preset = c.items.find((i) => i[0] === $("#second").value),
      b =
        $("#custom").value !== ""
          ? ["custom", t("Custom reference"), Number($("#custom").value)]
          : preset;
    if ($("#custom").value !== "" && (b[2] > 1e9 || b[2] < 0.001))
      throw Error(t("Custom values must be between 0.001 and 1,000,000,000."));
    const m = measures(a[2], b[2], category),
      overlay = $("#layout").value === "overlay",
      size = 235;
    const shapes = [a, b]
      .map((item, i) => {
        const scale = i ? m.bScale : m.aScale,
          dim = size * scale,
          x = overlay ? 300 - dim / 2 : i ? 445 - dim / 2 : 155 - dim / 2,
          y = 290 - dim,
          color = i ? "#cc7047" : "#167466";
        return category === "space"
          ? `<circle cx="${x + dim / 2}" cy="${y + dim / 2}" r="${dim / 2}" fill="${color}" fill-opacity=".72" stroke="${color}"/>`
          : `<rect x="${category !== "area" && category !== "space" ? (overlay ? 260 + i * 20 : i ? 410 : 120) : x}" y="${y}" width="${category !== "area" && category !== "space" ? 60 : dim}" height="${dim}" fill="${color}" fill-opacity=".72" stroke="${color}"/>`;
      })
      .join("");
    const title = t("{a} and {b}: {dimension} comparison", {
      a: a[1],
      b: b[1],
      dimension: c.dimension,
    });
    svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 410" role="img" aria-label="${esc(title)}"><title>${esc(title)}</title><line x1="20" y1="291" x2="580" y2="291" stroke="#9bafa5"/>${shapes}<text x="155" y="325" text-anchor="middle" fill="#252821" font-family="sans-serif" font-size="15">${esc(a[1])}</text><text x="445" y="325" text-anchor="middle" fill="#252821" font-family="sans-serif" font-size="15">${esc(b[1])}</text><text x="155" y="350" text-anchor="middle" fill="#252821" font-family="sans-serif" font-size="14">${fmt(a[2])} ${c.unit}</text><text x="445" y="350" text-anchor="middle" fill="#252821" font-family="sans-serif" font-size="14">${fmt(b[2])} ${c.unit}</text><text x="300" y="390" text-anchor="middle" fill="#61645e" font-family="sans-serif" font-size="12">${esc(c.dimension)} · ${t("Simplified shapes")} · compare.iamdenny.com</text></svg>`;
    $("#stage").innerHTML = svg;
    $("#legend").innerHTML =
      `<span><b style="background:#167466"></b>${esc(a[1])} · ${fmt(a[2])} ${c.unit}</span><span><b style="background:#cc7047"></b>${esc(b[1])} · ${fmt(b[2])} ${c.unit}</span>`;
    $("#ratio").textContent =
      (m.ratio < 0.001 ? m.ratio.toExponential(2) : fmt(m.ratio)) + "×";
    $("#summary").textContent = t(
      "{a} has {ratio} times the {dimension} of {b}.",
      {
        a: a[1],
        b: b[1],
        ratio: m.ratio < 0.001 ? m.ratio.toExponential(2) : fmt(m.ratio),
        dimension: c.dimension,
      },
    );
    $("#method").textContent = c.note;
    $("#status").textContent = "";
    $("#download").disabled = false;
    return true;
  } catch (e) {
    $("#status").textContent = t(e.message);
    $("#download").disabled = true;
    return false;
  }
}
document.querySelectorAll("[data-category]").forEach((b) =>
  b.addEventListener("click", () => {
    setup(b.dataset.category);
    draw();
  }),
);
$("#compare-form").addEventListener("submit", (e) => {
  e.preventDefault();
  draw();
});
for (const id of ["first", "second", "layout"])
  $("#" + id).addEventListener("change", draw);
$("#swap").addEventListener("click", () => {
  if ($("#custom").value) {
    $("#status").textContent = t(
      "Clear the custom value to swap the preset objects.",
    );
    return;
  }
  const a = $("#first").value;
  $("#first").value = $("#second").value;
  $("#second").value = a;
  draw();
});
$("#share").addEventListener("click", async () => {
  if (!draw()) return;
  const url = new URL(location.href);
  url.hash = new URLSearchParams({
    category,
    first: $("#first").value,
    second: $("#second").value,
    custom: $("#custom").value,
    layout: $("#layout").value,
  }).toString();
  try {
    await navigator.clipboard.writeText(url.href);
    $("#status").textContent = t("Comparison link copied.");
  } catch {
    $("#status").textContent = t("Copy this link: ") + url.href;
  }
});
$("#download").addEventListener("click", () => {
  if (!draw()) return;
  const blob = new Blob([svg], { type: "image/svg+xml" }),
    url = URL.createObjectURL(blob),
    a = document.createElement("a");
  a.href = url;
  a.download = "denny-comparison.svg";
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
});
const params = new URLSearchParams(preset);
for (const [key, value] of new URLSearchParams(location.hash.slice(1)))
  params.set(key, value);
setup(
  Object.hasOwn(categories, params.get("category"))
    ? params.get("category")
    : "area",
);
for (const id of ["first", "second"])
  if (categories[category].items.some((x) => x[0] === params.get(id)))
    $("#" + id).value = params.get(id);
if (params.has("custom")) $("#custom").value = params.get("custom");
if (params.get("layout") === "overlay") $("#layout").value = "overlay";
draw();
