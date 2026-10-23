export const comparisonExpansion = {
  "frequency": {
    "label": "Frequency units",
    "dimension": "frequency",
    "unit": "Hz",
    "items": [
      [
        "mhz",
        "1 mHz",
        0.001
      ],
      [
        "hz",
        "1 Hz",
        1
      ],
      [
        "khz",
        "1 kHz",
        1000
      ],
      [
        "megahz",
        "1 MHz",
        1000000.0
      ],
      [
        "ghz",
        "1 GHz",
        1000000000.0
      ]
    ],
    "note": "Frequency counts cycles per second. The bar height shows a frequency ratio, not a wave shape; 1 Hz equals one cycle per second.",
    "source": "https://www.bipm.org/en/publications/si-brochure",
    "sourceLabel": "BIPM · SI Brochure"
  },
  "energy": {
    "label": "Energy units",
    "dimension": "energy",
    "unit": "J",
    "items": [
      [
        "j",
        "1 J",
        1
      ],
      [
        "kj",
        "1 kJ",
        1000
      ],
      [
        "wh",
        "1 Wh",
        3600
      ],
      [
        "mj",
        "1 MJ",
        1000000.0
      ],
      [
        "kwh",
        "1 kWh",
        3600000.0
      ]
    ],
    "note": "Energy is measured in joules. A watt-hour is 3600 joules because one watt is one joule per second and an hour has 3600 seconds. Energy and power are different quantities.",
    "source": "https://www.bipm.org/en/publications/si-brochure",
    "sourceLabel": "BIPM · SI Brochure"
  },
  "power": {
    "label": "Power units",
    "dimension": "power",
    "unit": "W",
    "items": [
      [
        "mw",
        "1 mW",
        0.001
      ],
      [
        "w",
        "1 W",
        1
      ],
      [
        "kw",
        "1 kW",
        1000
      ],
      [
        "megaw",
        "1 MW",
        1000000.0
      ],
      [
        "gw",
        "1 GW",
        1000000000.0
      ]
    ],
    "note": "Power is the rate of energy transfer. One watt means one joule per second. These ratios do not include operating time or electricity prices.",
    "source": "https://www.bipm.org/en/publications/si-brochure",
    "sourceLabel": "BIPM · SI Brochure"
  },
  "pressure": {
    "label": "Pressure units",
    "dimension": "pressure",
    "unit": "Pa",
    "items": [
      [
        "pa",
        "1 Pa",
        1
      ],
      [
        "hpa",
        "1 hPa",
        100
      ],
      [
        "kpa",
        "1 kPa",
        1000
      ],
      [
        "mpa",
        "1 MPa",
        1000000.0
      ],
      [
        "gpa",
        "1 GPa",
        1000000000.0
      ]
    ],
    "note": "One pascal is one newton per square metre. Prefixes change the scale only; this comparison does not convert between gauge and absolute pressure.",
    "source": "https://www.bipm.org/en/publications/si-brochure",
    "sourceLabel": "BIPM · SI Brochure"
  },
  "current": {
    "label": "Electric current units",
    "dimension": "electric current",
    "unit": "A",
    "items": [
      [
        "ua",
        "1 μA",
        1e-06
      ],
      [
        "ma",
        "1 mA",
        0.001
      ],
      [
        "a",
        "1 A",
        1
      ],
      [
        "ka",
        "1 kA",
        1000
      ],
      [
        "megaa",
        "1 MA",
        1000000.0
      ]
    ],
    "note": "These are unit-scale comparisons of electric current, not equipment ratings or safety guidance. Micro means one millionth; milli means one thousandth.",
    "source": "https://www.bipm.org/en/publications/si-brochure",
    "sourceLabel": "BIPM · SI Brochure"
  },
  "voltage": {
    "label": "Voltage units",
    "dimension": "voltage",
    "unit": "V",
    "items": [
      [
        "uv",
        "1 μV",
        1e-06
      ],
      [
        "mv",
        "1 mV",
        0.001
      ],
      [
        "v",
        "1 V",
        1
      ],
      [
        "kv",
        "1 kV",
        1000
      ],
      [
        "megav",
        "1 MV",
        1000000.0
      ]
    ],
    "note": "Voltage is electric potential difference. Prefix ratios do not describe current, stored energy, insulation requirements or safe contact limits.",
    "source": "https://www.bipm.org/en/publications/si-brochure",
    "sourceLabel": "BIPM · SI Brochure"
  },
  "resistance": {
    "label": "Resistance units",
    "dimension": "resistance",
    "unit": "Ω",
    "items": [
      [
        "mohm",
        "1 mΩ",
        0.001
      ],
      [
        "ohm",
        "1 Ω",
        1
      ],
      [
        "kohm",
        "1 kΩ",
        1000
      ],
      [
        "megaohm",
        "1 MΩ",
        1000000.0
      ],
      [
        "gohm",
        "1 GΩ",
        1000000000.0
      ]
    ],
    "note": "One ohm equals one volt per ampere. This compares unit magnitudes only, without resistor tolerance, temperature effects or circuit recommendations.",
    "source": "https://www.bipm.org/en/publications/si-brochure",
    "sourceLabel": "BIPM · SI Brochure"
  },
  "storage": {
    "label": "Data storage units",
    "dimension": "data size",
    "unit": "B",
    "items": [
      [
        "b",
        "1 B",
        1
      ],
      [
        "kb",
        "1 kB",
        1000
      ],
      [
        "kib",
        "1 KiB",
        1024
      ],
      [
        "mb",
        "1 MB",
        1000000
      ],
      [
        "mib",
        "1 MiB",
        1048576
      ]
    ],
    "note": "A byte contains eight bits. Decimal kB and MB use powers of 1000; binary KiB and MiB use powers of 1024. Storage size is not transfer speed.",
    "source": "https://physics.nist.gov/cuu/Units/binary.html",
    "sourceLabel": "NIST · Binary prefixes"
  },
  "land-area": {
    "label": "Area units",
    "dimension": "area",
    "unit": "m²",
    "items": [
      [
        "cm2",
        "1 cm²",
        0.0001
      ],
      [
        "m2",
        "1 m²",
        1
      ],
      [
        "are",
        "1 a",
        100
      ],
      [
        "ha",
        "1 ha",
        10000
      ],
      [
        "km2",
        "1 km²",
        1000000.0
      ]
    ],
    "note": "These bars encode area values with their heights, not square silhouettes. Squaring a length conversion also squares its factor: one square kilometre is one million square metres.",
    "source": "https://www.bipm.org/en/publications/si-brochure",
    "sourceLabel": "BIPM · SI Brochure"
  },
  "speed": {
    "label": "Speed units",
    "dimension": "speed",
    "unit": "m/s",
    "items": [
      [
        "cms",
        "1 cm/s",
        0.01
      ],
      [
        "ms",
        "1 m/s",
        1
      ],
      [
        "kmh",
        "1 km/h",
        0.2777777777777778
      ],
      [
        "kmmin",
        "1 km/min",
        16.666666666666668
      ],
      [
        "kms",
        "1 km/s",
        1000
      ]
    ],
    "note": "Speed is distance divided by elapsed time. One kilometre per hour is 1000/3600 metres per second. Displayed decimals are rounded; calculations use the underlying ratios.",
    "source": "https://www.bipm.org/en/publications/si-brochure",
    "sourceLabel": "BIPM · SI Brochure"
  }
};
