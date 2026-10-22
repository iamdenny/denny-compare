// World Bank AG.SRF.TOTL.K2, 2024, retrieved 2026-10-22. Canada excluded pending source discrepancy review.
export const categories = {
  area: {
    label: "Country area",
    unit: "km²",
    dimension: "surface area",
    note: "Equal-area squares, not geographic outlines. Square area is proportional to country surface area, including inland water. World Bank 2024 observations.",
    source: "https://data.worldbank.org/indicator/AG.SRF.TOTL.K2",
    items: [
      ["kor", "South Korea", 100460],
      ["jpn", "Japan", 377974.71],
      ["deu", "Germany", 357680],
      ["ind", "India", 3287263],
      ["aus", "Australia", 7741220],
      ["bra", "Brazil", 8510420],
      ["usa", "United States", 9831510],
    ],
  },
  space: {
    label: "Planet diameter",
    unit: "km",
    dimension: "equatorial diameter",
    note: "Circles compare equatorial diameters from the NASA Planetary Fact Sheet. Distances, rings, surface details and volumes are not represented. Values are rounded reference measurements.",
    source: "https://nssdc.gsfc.nasa.gov/planetary/factsheet/",
    items: [
      ["mercury", "Mercury", 4879],
      ["venus", "Venus", 12104],
      ["earth", "Earth", 12756],
      ["mars", "Mars", 6792],
      ["jupiter", "Jupiter", 142984],
      ["saturn", "Saturn", 120536],
      ["uranus", "Uranus", 51118],
      ["neptune", "Neptune", 49528],
    ],
  },
  height: {
    label: "Landmark height",
    unit: "m",
    dimension: "height",
    note: "Bars compare published heights, not building silhouettes or volumes. Eiffel Tower height includes its antenna; Burj Khalifa uses architectural height. A custom height is your own reference value.",
    source: "https://www.toureiffel.paris/en/the-monument/key-figures",
    items: [
      ["eiffel", "Eiffel Tower", 330],
      ["burj", "Burj Khalifa", 828],
      ["person", "Example person", 1.75],
    ],
  },
};
export function measures(a, b, category) {
  if (!Number.isFinite(a) || !Number.isFinite(b) || a <= 0 || b <= 0)
    throw Error("Choose positive, finite measurements.");
  const max = Math.max(a, b),
    power = category === "area" ? 0.5 : 1;
  return {
    ratio: a / b,
    aScale: (a / max) ** power,
    bScale: (b / max) ** power,
  };
}
