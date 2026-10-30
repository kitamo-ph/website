import { sharedCopy } from "@/lib/content/shared-copy";

/**
 * Homepage copy, approved in docs/content/mr-1-marketing-content-contract.md.
 * Claim IDs refer to docs/governance/public-claims-register.md.
 * Oct 30 update: the copy from the website-home-v2 brief, checked against the
 * live web app (seller-web a0446f2). Its register entries are still to come.
 */
export const homepageCopy = {
  metadata: {
    title: "KitaMo · Your lista, with the math done.",
    description:
      "KitaMo is a web app for Filipino micro-sellers. Sell at the counter, track stock, log bills and utang, and see what you really earn each day. Free while in testing.",
  },
  hero: {
    heading: sharedCopy.tagline,
    // CLM-014, CLM-016, CLM-017, CLM-020.
    introduction:
      "Sell, keep stock and utang, and see what you really earn each day, on your phone or a tablet at the counter.",
  },
  // CLM-020: the profit formula and the missing-cost behaviour.
  formula: {
    label:
      "Tubo (profit) equals Benta (sales) minus Puhunan (cost of goods) minus Bayarin (expenses) minus Sira (spoilage).",
    terms: [
      { word: "Tubo", gloss: "profit", after: "=" },
      { word: "Benta", gloss: "sales" },
      { before: "−", word: "Puhunan", gloss: "cost of goods" },
      { before: "−", word: "Bayarin", gloss: "expenses" },
      { before: "−", word: "Sira", gloss: "spoilage" },
    ],
    line: "Every peso accounted for. If a cost is missing, KitaMo tells you instead of guessing.",
    receipt: {
      context: "An example day",
      store: "Aling Nena's Sari-sari",
      date: "Kita · Fri, Sep 25",
      rows: [
        { label: "Benta", amount: "₱4,850.00" },
        { label: "Puhunan", amount: "− ₱3,120.00" },
        { label: "Bayarin", amount: "− ₱350.00" },
        { label: "Sira", amount: "− ₱45.00" },
      ],
      totalLabel: "Tubo",
      total: "₱1,335.00",
    },
  },
  routine: {
    heading: "The daily routine.",
    items: [
      {
        plate: "P2",
        word: "Benta",
        english: "Sell",
        // CLM-016.
        text: "Tap items. The cart uses a bundle price by itself when it's cheaper. Take cash with Sakto and sukli, GCash, Maya, a bank transfer, or put it on the customer's account.",
      },
      {
        plate: "P3",
        word: "Paninda",
        english: "Products",
        // CLM-017.
        text: "Stock that goes down as you sell, low-stock alerts, sizes and colours, and spoilage.",
      },
      {
        plate: "P4",
        word: "Utang",
        english: "Credit",
        // CLM-018.
        text: "Customers who owe you, with due dates and part payments, and the suppliers you owe.",
      },
      {
        plate: "P5",
        word: "Gastos",
        english: "Expenses",
        // CLM-019.
        text: "Rent, power, water, wages and other costs. A monthly bill is spread over the days you're open.",
      },
      {
        plate: "P6",
        word: "Kita",
        english: "Profit",
        // CLM-020. The cash drawer (Kaha) folds in here: the grid has five plates.
        text: "Today, this week and this month, for one stall or all of them. Count the cash drawer (kaha) by bill and coin when you open and close, and see if it matches.",
      },
    ],
  },
  // Intended contexts only (CLM-005 wording, re-scoped to the web app).
  sellers: {
    heading: "For sellers like you.",
    link: "What each kind of seller uses",
    names: [
      "Sari-sari store",
      "Hardware and lumber",
      "Poultry and eggs",
      "Ukay-ukay and clothes",
      "Food stall and karinderia",
    ],
  },
  counter: {
    heading: "Made for the counter.",
    photoAlt:
      "A store owner behind a wooden sari-sari counter, pointing at a tablet on a stand that shows the KitaMo Sell screen.",
    caption: `KitaMo on a tablet at the counter. ${sharedCopy.illustrationCaption}`,
    // CLM-014, CLM-021, CLM-015.
    // Four lines, as the grid has four columns.
    items: [
      "Staff sign in with their own code, on a shared tablet or their own phone.",
      "Staff never see your costs, profit, expenses or balances. Every sale records who rang it up.",
      "Big buttons on an 8-inch tablet, and a Hidden money view so customers don't see your totals.",
      "Made for low-cost phones and tablets. Save data uses less data on a weak signal.",
    ],
  },
  steps: {
    heading: "Start in three steps.",
    items: [
      "Create an account.",
      "Add your paninda (products).",
      "Make your first sale.",
    ],
  },
  faq: {
    heading: "Straight answers.",
    items: [
      {
        // CLM-012.
        question: "Is it free?",
        answer:
          "Free while in testing. Any future charge is announced first and needs your agreement.",
      },
      {
        // CLM-014.
        question: "What do I need?",
        answer:
          "A phone, tablet or computer with a browser and internet. Open app.kitamo.online. There's nothing to install.",
      },
      {
        // CLM-023.
        question: "Does it work without internet?",
        answer:
          "No, it needs a connection. On a weak signal your cart stays on your device, so trying again never records a sale twice.",
      },
      {
        // CLM-016 negative.
        question: "Does KitaMo take payments?",
        answer:
          "No. It records how you were paid: cash, GCash, Maya, bank transfer or the customer's account. It can show your own GCash, Maya or bank QR at checkout. The money moves in your wallet app or bank as usual. Card payments aren't in KitaMo.",
      },
      {
        // CLM-022.
        question: "Is the receipt official?",
        answer:
          "No. It says “Not an official receipt.” It's a record for you and your customer, not a BIR receipt.",
      },
      {
        question: "Can my staff use it?",
        answer:
          "Yes. Each person gets a code, and you choose what they can do at each stall. They never see your costs or profit.",
      },
      {
        question: "I have more than one stall.",
        answer:
          "Add up to 10 stalls, each with its own stock, prices and drawer. See one stall or all of them.",
      },
      {
        question: "My utang is in a notebook.",
        answer:
          "Use Enter your lista to bring in what each customer already owes. Sales from a notebook can go in too, marked “Logged later”.",
      },
      {
        // The one place "AI" appears: a disclosure for Lis (the lead, Oct 30).
        question: "Does KitaMo use AI?",
        answer:
          "Only in Lis, the optional assistant. She is off until you say yes and sign, and for now only invited businesses can use her. The KitaMo app, Operations, Insights and Marketing work without AI.",
      },
      {
        question: "Who can see my records?",
        answer:
          "You. Your staff see only what they need to sell. A helper sees only what you allow when you turn it on, and Lis only if you say yes. KitaMo looks only with a written reason. Records are kept in a database in Singapore. The Privacy Policy lists every detail.",
      },
      {
        question: "Can I leave?",
        answer:
          "Yes. Get a copy of all your records, then delete your account in Account › Your data. You have 30 days to change your mind.",
      },
      {
        // CLM-015.
        question: "Which languages?",
        answer: "The app is in English and Filipino. Switch any time.",
      },
      {
        // CLM-002, CLM-003, CLM-006: the Android pilot, re-scoped to one answer.
        question: "Is there an Android app?",
        answer:
          "An offline Android version is Currently Testing and not yet available.",
      },
    ],
  },
} as const;
