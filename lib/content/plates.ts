/**
 * Screen plates: flat captures of the real KitaMo web app (seller-web a0446f2,
 * the Oct 30 look) with a sample store, "Aling Nena's Sari-sari (sample)",
 * seeded with made-up data on a throwaway local stack
 * (_handoff/sr-scripts/plates/plates-run.sh, Fri Oct 30). The figures agree
 * across plates: T1 and P6 are the same days; T2, P1 and P2 are the same cart.
 */
export const plates = {
  T1: {
    src: "/plates/T1-kita.png",
    width: 1280,
    height: 800,
    kind: "tablet",
    alt: "KitaMo on a tablet, Profit screen for a sample sari-sari store: ₱728.36 profit today from ₱3,483.00 sales, after cost of goods and expenses, and a 4-week profit trend.",
  },
  T2: {
    src: "/plates/T2-benta.png",
    width: 1280,
    height: 800,
    kind: "tablet",
    alt: "KitaMo on a tablet, Sell screen: favourite products with stock left, beside the current sale of 25 items, total ₱182.00.",
  },
  P1: {
    src: "/plates/P1-benta.png",
    width: 1080,
    height: 2340,
    kind: "phone",
    alt: "KitaMo on a phone, Sell screen: favourite products with stock left, and a cart of 25 items for ₱182.00.",
  },
  P2: {
    src: "/plates/P2-checkout.png",
    width: 1080,
    height: 2340,
    kind: "phone",
    alt: "KitaMo checkout on a phone: ₱182.00 total, cash chosen, ₱200 received, change ₱18.00.",
  },
  P3: {
    src: "/plates/P3-paninda.png",
    width: 1080,
    height: 2340,
    kind: "phone",
    alt: "KitaMo products list on a phone, with an out-of-stock tag, a low-stock tag and one item marked as missing its cost.",
  },
  P4: {
    src: "/plates/P4-utang.png",
    width: 1080,
    height: 2340,
    kind: "phone",
    alt: "KitaMo credit screen on a phone: customers owe you ₱505.50 across 2 customers, ₱320.00 of it overdue.",
  },
  P5: {
    src: "/plates/P5-gastos.png",
    width: 1080,
    height: 2340,
    kind: "phone",
    alt: "KitaMo expenses screen on a phone: October bills of ₱4,949.00 for rent, electricity, water and Wi-Fi, still to pay.",
  },
  P6: {
    src: "/plates/P6-kita-week.png",
    width: 1080,
    height: 2340,
    kind: "phone",
    alt: "KitaMo profit screen on a phone for this week: ₱4,973.78 profit from ₱22,771.00 sales, after cost of goods and expenses.",
  },
  P7: {
    src: "/plates/P7-kita-hidden.png",
    width: 1080,
    height: 2340,
    kind: "phone",
    alt: "KitaMo profit screen on a phone in the Hidden money view: the number of today's sales is shown, peso amounts are hidden.",
  },
} as const;

export type PlateKey = keyof typeof plates;
