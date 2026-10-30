import { sharedCopy } from "@/lib/content/shared-copy";

/**
 * About copy, approved in docs/content/mr-1-marketing-content-contract.md.
 * Oct 30 update: the hero, why and statuses from the website-kitamo-online
 * brief, checked against the live web app (seller-web a0446f2).
 */
export const aboutCopy = {
  metadata: {
    title: "About",
    description:
      "Why KitaMo exists and where it stands: the web app is free while in testing, and an offline Android version is Currently Testing.",
  },
  hero: {
    heading: "About KitaMo.",
    // CLM-011, CLM-016 to CLM-020.
    introduction:
      "KitaMo is a web app for Filipino micro-sellers. You sell at the counter, keep stock and utang, log bills and spoilage, and see what you really earned each day.",
  },
  why: {
    eyebrow: "Why",
    heading: sharedCopy.tagline,
    body: "We built KitaMo for owners who keep a paper lista. It keeps the same list and does the adding and subtracting, so the day's tubo is ready when you close.",
    // Non-breaking spaces bind each operator to the next word, so a line
    // never ends on "−".
    formula: "Tubo =\u00a0Benta −\u00a0Puhunan −\u00a0Bayarin −\u00a0Sira",
  },
  standing: {
    heading: "Where it stands.",
    items: [
      {
        // CLM-011 (Available Today), CLM-012.
        name: "The KitaMo app, at app.kitamo.online",
        status: "available",
        body: "Free while in testing. Any future charge is announced first and needs your agreement.",
      },
      {
        name: "Operations, Insights and Marketing",
        status: "available",
        body: "Off until you turn them on.",
      },
      {
        name: "Lis, the assistant",
        status: "testing",
        body: "Only businesses KitaMo invites, a few at a time.",
      },
      {
        name: "Accounting",
        status: "planned",
        body: "Coming.",
      },
      {
        // CLM-002, CLM-003, CLM-006.
        name: "Android app, offline",
        status: "testing",
        body: "Not yet available.",
      },
    ],
  },
  help: {
    heading: "Need help?",
    body: "Questions about your account or the app go to Support.",
    link: {
      href: "https://app.kitamo.online/support",
      label: "app.kitamo.online/support",
    },
  },
  closing: {
    heading: "Try it at your counter.",
  },
} as const;
