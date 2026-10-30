/**
 * How it works copy, approved in docs/content/mr-1-marketing-content-contract.md.
 * Oct 30 update: the steps and limits from the website-kitamo-online brief,
 * checked against the live web app (seller-web a0446f2). The brief's seven
 * steps fold into the page's five: open the day goes with selling, and close
 * the day goes with Kita.
 */
export const howItWorksCopy = {
  metadata: {
    title: "How it works",
    description:
      "One day at the counter with KitaMo: set up your business, add your paninda, open the day and sell, keep utang and gastos, then close the day and check the day's tubo.",
  },
  hero: {
    heading: "How it works.",
    introduction:
      "One day at the counter, from opening the drawer to seeing the day's tubo (profit).",
  },
  steps: [
    {
      heading: "Create an account and set up your business.",
      // CLM-013, CLM-015.
      body: "Add your store's name, your stalls, and your GCash, Maya or bank QR. Choose English or Filipino.",
    },
    {
      heading: "Add your products (paninda).",
      // CLM-017.
      body: "One at a time, or your whole list from a spreadsheet file (CSV): you see a preview first, and you can undo the latest import within 7 days. Sizes and colours go in one family, each with its own price and stock. Add bundle prices such as “Tali (10)”.",
    },
    {
      heading: "Open the day and sell.",
      // CLM-016.
      body: "Count the starting cash by bill and coin. It's your choice for each stall, and selling never waits for the drawer. Tap items. Add a discount with a reason. Take cash, GCash, Maya, a bank transfer with its reference number, or put it on the customer's account. Share or print the receipt.",
    },
    {
      heading: "Keep utang and gastos.",
      // CLM-019, CLM-018.
      body: "Record what customers pay, pay suppliers in parts, and add your bills. A monthly bill is spread over the days you're open.",
    },
    {
      heading: "Close the day and check Kita.",
      // CLM-020.
      body: "Count the drawer and see if it matches. Staff count without seeing the expected amount. Staff pay due that day in cash shows first and is recorded as given; staff still confirm it. You can turn this off. Kita shows your tubo for the day, week or month, before or after expenses, for one stall or all. If an item has no cost, Kita says “before item costs” and asks you to add it.",
    },
  ],
  limits: {
    heading: "What KitaMo doesn't do yet.",
    // CLM-023, CLM-016 negative, CLM-022. (CLM-024 retired 2026-10-20: staff
    // sign-in and stalls are live in the web app.)
    items: [
      "It needs internet; you can't sell without a connection.",
      "It records payments but doesn't move money. No card payments, and one payment method per sale.",
      "No barcode scanning.",
      "The receipt is not an official BIR receipt.",
      "It never sends texts or messages to your customers.",
    ],
  },
} as const;
