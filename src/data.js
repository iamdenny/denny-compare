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
Object.assign(categories, {
  "length": {
    "label": "Length units",
    "unit": "m",
    "dimension": "length",
    "items": [
      [
        "mm",
        "1 mm",
        0.001
      ],
      [
        "cm",
        "1 cm",
        0.01
      ],
      [
        "dm",
        "1 dm",
        0.1
      ],
      [
        "m",
        "1 m",
        1
      ],
      [
        "dam",
        "1 dam",
        10
      ],
      [
        "km",
        "1 km",
        1000
      ]
    ],
    "note": "Bars compare exact metric lengths in metres; they are not area comparisons.",
    "source": "https://www.bipm.org/en/publications/si-brochure",
    "sourceLabel": "BIPM · SI Brochure"
  },
  "mass": {
    "label": "Mass units",
    "unit": "g",
    "dimension": "mass",
    "items": [
      [
        "mg",
        "1 mg",
        0.001
      ],
      [
        "cg",
        "1 cg",
        0.01
      ],
      [
        "dg",
        "1 dg",
        0.1
      ],
      [
        "g",
        "1 g",
        1
      ],
      [
        "hg",
        "1 hg",
        100
      ],
      [
        "kg",
        "1 kg",
        1000
      ]
    ],
    "note": "Bars compare mass in grams, not the physical sizes of objects. Metric prefixes are exact powers of ten.",
    "source": "https://www.bipm.org/en/publications/si-brochure",
    "sourceLabel": "BIPM · SI Brochure"
  },
  "duration": {
    "label": "Time units",
    "unit": "s",
    "dimension": "duration",
    "items": [
      [
        "second",
        "1 second",
        1
      ],
      [
        "minute",
        "1 minute",
        60
      ],
      [
        "hour",
        "1 hour",
        3600
      ],
      [
        "day",
        "1 day",
        86400
      ],
      [
        "week",
        "1 week",
        604800
      ]
    ],
    "note": "Bars compare elapsed durations. A day means exactly 24 hours and a week means seven such days, not a calendar interval across clock changes.",
    "source": "https://www.bipm.org/en/publications/si-brochure",
    "sourceLabel": "BIPM · SI Brochure"
  },
  "volume": {
    "label": "Volume units",
    "unit": "L",
    "dimension": "volume",
    "items": [
      [
        "ml",
        "1 mL",
        0.001
      ],
      [
        "cl",
        "1 cL",
        0.01
      ],
      [
        "dl",
        "1 dL",
        0.1
      ],
      [
        "l",
        "1 L",
        1
      ],
      [
        "kl",
        "1 kL",
        1000
      ]
    ],
    "note": "Bars compare volume in litres, not container silhouettes. One litre equals one cubic decimetre.",
    "source": "https://www.bipm.org/en/publications/si-brochure",
    "sourceLabel": "BIPM · SI Brochure"
  }
});
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
