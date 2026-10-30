/**
 * For sellers copy, approved in docs/content/mr-1-marketing-content-contract.md.
 * Store types are intended contexts, not adoption claims (CLM-005 wording).
 * Oct 30 update: the five blocks from the website-kitamo-online brief, checked
 * against the live web app (seller-web a0446f2). Each block keeps three rows:
 * what works today, a simple way around, and what isn't in KitaMo yet.
 */
export const forSellersCopy = {
  metadata: {
    title: "For sellers",
    description:
      "How sari-sari stores, hardware and lumber stores, poultry and egg farms, ukay-ukay and clothes shops, food stalls and karinderias use KitaMo at the counter.",
  },
  hero: {
    heading: "For sellers.",
    introduction:
      "What each kind of seller uses in KitaMo today, a simple way around what's missing, and what isn't in KitaMo yet.",
  },
  sellers: [
    {
      id: "sari-sari",
      name: "Sari-sari store",
      uses: [
        {
          word: "Works today",
          text: "Tingi and bundles: single pieces, and “Tali (10)” at its own price, chosen by the cart. Bought by the case of 24, sold by the piece: receive 2 cases and stock goes up by 48. Rice or sugar by the cup from a sack, with the cup's cost worked out from the sack's price. Utang with your suki: due dates, overdue, part payments, and Enter your lista for the notebook. Quick stock on every product, and the Hidden money view at the counter.",
        },
        {
          word: "A simple way around",
          text: "Load: add each load amount as a product, with what it costs you.",
        },
        {
          word: "Not in KitaMo yet",
          text: "An e-load wallet or a load provider connection, a sack count that goes down as cups sell, barcode scanning, text reminders to suki.",
        },
      ],
    },
    {
      id: "hardware-lumber",
      name: "Hardware and lumber",
      uses: [
        {
          word: "Works today",
          text: "Your whole price list from a spreadsheet file (CSV), up to 500 items, with a preview, and Undo for the latest import within 7 days. Sizes as one family (PVC pipe ½″, ¾″, 1″), each with its own price and stock. A colour dot on each paint tile. Sell by the meter, kilo, sheet or sack, in parts such as 2.5 m. A box price for whole pieces (“Kahon (100)”), used when it's cheaper. Contractors on credit, with due dates and part payments. Supplier deliveries on Pay later.",
        },
        {
          word: "A simple way around",
          text: "Lumber and pipe by the length: keep stock in meters and set “Bought by the length of 6”, so 10 lengths received add 60 m. A bulk price: a bundle, “Sell for” a new price on the line, or a separate stall with its own prices.",
        },
        {
          word: "Not in KitaMo yet",
          text: "Quotations, price lists per customer, board-foot pricing, delivery addresses, barcode scanning, card payments, BIR invoices.",
        },
      ],
    },
    {
      id: "poultry-eggs",
      name: "Poultry and eggs",
      uses: [
        {
          word: "Works today",
          text: "Eggs by size in one family (Small to Jumbo), each with its own price and stock. A tray of 30 and a dozen as bundle prices. Today's collection (Ani ngayon): add the day's eggs by size straight into stock, from a phone. The farm gate and the market as two stalls, each with its own prices. Resellers on credit, with due dates. Farm hands on a daily wage, their cash pay given from the drawer at the close.",
        },
        {
          word: "A simple way around",
          text: "Cracked eggs: record them as spoilage, or sell them as their own product. Wholesale (pakyawan): a stall with its own prices, or “Sell for” on the line. Feed: record it as an expense.",
        },
        {
          word: "Not in KitaMo yet",
          text: "Flock or batch records, mortality and feed per flock, laying rates, vaccination records, wholesale price tiers.",
        },
      ],
    },
    {
      id: "ukay-ukay",
      name: "Ukay-ukay and clothes",
      uses: [
        {
          word: "Works today",
          text: "Price racks as one family, each rack with its own price and stock. Sort a bale: type what the bale cost, the pieces for each rack and the rejects. KitaMo splits the cost by each rack's price tag, so your profit still shows. Markdowns at the counter, with a reason. A shop and a weekend tiangge as two stalls; move stock between them. Messenger orders tagged; GCash with its reference number. New clothes by size, each size with its own stock.",
        },
        {
          word: "A simple way around",
          text: "Bales bought by the kilo: write the weight in the bale's note. Paying in parts (hulugan): sell on the customer's account and record each payment.",
        },
        {
          word: "Not in KitaMo yet",
          text: "Tracking each piece, a size and colour grid, consignment.",
        },
      ],
    },
    {
      id: "food-stall",
      name: "Food stall and karinderia",
      uses: [
        {
          word: "Works today",
          text: "Choices such as flavour, size and toppings, each with its own add-on price. Keep open for more orders: the flavour panel stays open and counts what you added. Made to order: no stock count; log what you made and what was left in Made today. A costing sheet for each product, from your recipes and ingredient prices. Where the order came from: walk-in, Messenger, phone or delivery.",
        },
        {
          word: "Not in KitaMo yet",
          text: "Ingredient stock that goes down as you sell, kitchen order tickets, selling without internet.",
        },
      ],
      photo: {
        src: "/marketing/S2-karinderia-4x5.jpg",
        width: 1611,
        height: 2000,
        alt: "A hand holding a phone that shows the KitaMo Sell screen, in front of a karinderia's trays of food.",
        caption:
          "A karinderia counter at closing time. Illustration. Screens show the KitaMo web app with sample data.",
      },
    },
  ],
} as const;
