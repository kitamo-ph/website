import { sharedCopy } from "@/lib/content/shared-copy";
import { associationRequestLinks } from "@/lib/content/site-navigation";

/**
 * About copy, approved in docs/content/mr-1-marketing-content-contract.md.
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
      "KitaMo is a web app for Filipino micro-sellers: sari-sari stores, karinderias, food stalls, market stalls and home businesses. You sell at the counter, track stock, log bills and spoilage, keep utang both ways, and see what you really earned each day.",
  },
  why: {
    eyebrow: "Why",
    heading: sharedCopy.tagline,
    body: "Most owners keep a paper lista and have never used accounting software. KitaMo keeps the same list and does the adding and subtracting, so the day's tubo is ready when you close.",
    // Non-breaking spaces bind each operator to the next word, so a line
    // never ends on "−".
    formula: "Tubo =\u00a0Benta −\u00a0Puhunan −\u00a0Bayarin −\u00a0Sira",
  },
  standing: {
    heading: "Where it stands.",
    items: [
      {
        // CLM-011 (Available Today), CLM-012.
        name: "Web app",
        status: "available",
        body: "Free while in testing. Open it in your browser at app.kitamo.online. Any future charge is announced first and needs your agreement.",
      },
      {
        // CLM-002, CLM-003, CLM-006.
        name: "Android app, offline",
        status: "testing",
        body: "Not yet available.",
      },
    ],
  },
  // CLM-027 (Planned; pending owner approval). The barangay, LGU or HOA level
  // is built with its switch off: not available, and no date is promised.
  // English and Filipino; the owner approves the final wording before deploy.
  associations: {
    heading: "Are you a barangay, LGU or HOA?",
    headingFil: "Barangay, LGU o HOA ba kayo?",
    status: "planned",
    blocks: [
      {
        lang: "en",
        body: "Sellers who use your code can show when their stall is open and, if they choose, how busy it is. They choose what to share, and no sales amounts are shown.",
        action: associationRequestLinks.en,
      },
      {
        lang: "fil",
        body: "Puwedeng ipakita ng mga nagtitindang gumagamit ng code ninyo kung bukas ang puwesto nila at, kung gusto nila, kung gaano ito kaabala. Sila ang pumipili kung ano ang ibabahagi, at walang ipinapakitang halaga ng benta.",
        action: associationRequestLinks.fil,
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
