import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import AboutPage, { metadata as aboutMetadata } from "@/app/about/page";
import ForSellersPage, {
  metadata as forSellersMetadata,
} from "@/app/for-sellers/page";
import HowItWorksPage, {
  metadata as howItWorksMetadata,
} from "@/app/how-it-works/page";
import HomePage, { metadata as homeMetadata } from "@/app/page";
import { aboutCopy } from "@/lib/content/about-copy";
import { forSellersCopy } from "@/lib/content/for-sellers-copy";
import { howItWorksCopy } from "@/lib/content/how-it-works-copy";
import { productStatuses } from "@/lib/content/product-status";
import {
  associationRequestLinks,
  createAccountLink,
  webAppSignInLink,
} from "@/lib/content/site-navigation";
import {
  allowedHrefs,
  hrefsIn,
  linksTo,
  publicRoutes,
} from "@/tests/helpers/markup";

const pages = [
  ["home", HomePage, homeMetadata, "/"],
  ["for sellers", ForSellersPage, forSellersMetadata, "/for-sellers"],
  ["how it works", HowItWorksPage, howItWorksMetadata, "/how-it-works"],
  ["about", AboutPage, aboutMetadata, "/about"],
] as const;

const renderPage = (Page: (typeof pages)[number][1]) =>
  renderToStaticMarkup(<Page />);

describe("MR-1 shared public site", () => {
  it.each(pages)("renders %s with one H1 and shared landmarks", (_, Page) => {
    const markup = renderPage(Page);

    expect(markup.match(/<h1(?:\s|>)/g)).toHaveLength(1);
    expect(markup).toContain("<header");
    expect(markup).toContain('id="main-content"');
    expect(markup).toContain("<footer");
  });

  it.each(pages)("links every public route from %s", (_, Page) => {
    const markup = renderPage(Page);

    for (const route of publicRoutes) {
      expect(markup).toContain(`href="${route}"`);
    }
  });

  it.each(pages)("links only to approved destinations from %s", (_, Page) => {
    for (const href of hrefsIn(renderPage(Page))) {
      expect(allowedHrefs.has(href)).toBe(true);
    }
  });

  it("uses a native disclosure for the mobile menu", () => {
    const markup = renderPage(HomePage);

    expect(markup).toContain("<details");
    expect(markup).toContain("<summary");
    expect(markup).toContain("Menu");
  });

  it.each(pages)(
    "offers Create free account as the primary action on %s",
    (_, Page) => {
      const links = linksTo(renderPage(Page), createAccountLink.href);

      expect(links.length).toBeGreaterThanOrEqual(3);
      for (const link of links) {
        expect(link.label).toBe("Create free account");
        expect(link.attributes).toContain("bg-action");
      }
    },
  );

  it.each(pages)(
    "keeps Sign in secondary in the header, menu and footer of %s",
    (_, Page) => {
      const links = linksTo(renderPage(Page), webAppSignInLink.href);

      // Desktop header, mobile menu and footer; the homepage hero adds one.
      expect(links.length).toBeGreaterThanOrEqual(3);
      for (const link of links) {
        expect(link.label).toBe("Sign in");
        expect(link.attributes).not.toContain("bg-action");
      }
    },
  );

  it.each(pages)("gives %s its own canonical and share URL", (...page) => {
    const [, , metadata, route] = page;

    expect(metadata.alternates?.canonical).toBe(route);
    expect(metadata.openGraph?.url).toBe(route);
  });
});

describe("MR-1 How it works", () => {
  it("walks the five steps and lists what KitaMo doesn't do", () => {
    const markup = renderPage(HowItWorksPage);

    for (const step of howItWorksCopy.steps) {
      expect(markup).toContain(step.heading);
    }
    for (const limit of howItWorksCopy.limits.items) {
      expect(markup).toContain(limit.replaceAll("'", "&#x27;"));
    }
  });
});

describe("MR-1 For sellers", () => {
  it("names each intended context without recipe or adoption claims", () => {
    const markup = renderPage(ForSellersPage).toLowerCase();

    for (const seller of forSellersCopy.sellers) {
      expect(markup).toContain(seller.name.toLowerCase());
    }
    // Recipe costing is only in the Android pilot, not the web app.
    expect(markup).not.toContain("recipe");
    expect(markup).not.toContain("trusted by");
    expect(markup).not.toContain("active customers");
  });
});

describe("MR-1 About", () => {
  it("states each product with a controlled status", () => {
    const markup = renderPage(AboutPage);

    expect(markup).toContain('data-product-status="available"');
    expect(markup).toContain("Available Today");
    expect(markup).toContain('data-product-status="testing"');
    expect(markup).toContain("Currently Testing");
    expect(markup).toContain("Any future charge is announced first");
  });
});

describe("CLM-027 About: the barangay, LGU or HOA request (Planned)", () => {
  const { associations } = aboutCopy;
  const section = () => {
    const markup = renderPage(AboutPage);
    const start = markup.indexOf(
      '<section aria-labelledby="associations-heading"',
    );

    expect(start).toBeGreaterThan(-1);
    return markup.slice(start, markup.indexOf("</section>", start));
  };
  const visibleText = (markup: string) => markup.replace(/<[^>]*>/g, " ");
  // The arrow is aria-hidden, so it is not part of the accessible name.
  const accessibleName = (label: string) => label.replace("→", "").trim();

  it("shows Planned as visible text with a screen-reader prefix", () => {
    const markup = section();

    expect(markup).toContain('data-product-status="planned"');
    expect(markup).toContain("Product status: ");
    expect(markup).toContain(productStatuses.planned.label);
    expect(markup).not.toContain(productStatuses.available.label);
    expect(markup).not.toContain(productStatuses.testing.label);
  });

  it("carries the English copy and the Filipino copy marked lang=fil", () => {
    const markup = section();
    const [english, filipino] = associations.blocks;
    const filipinoStart = markup.lastIndexOf('lang="fil"');

    expect(markup).toContain(associations.heading);
    expect(markup).toContain(`lang="fil">${associations.headingFil}</span>`);
    expect(markup.slice(0, filipinoStart)).toContain(english.body);
    expect(markup.slice(filipinoStart)).toContain(filipino.body);
    expect(markup.slice(filipinoStart)).not.toContain(english.body);
    // The honest lines: the seller chooses, and no sales amount is shown.
    expect(english.body).toContain("They choose what to share");
    expect(english.body).toContain("no sales amounts are shown");
    expect(filipino.body).toContain("walang ipinapakitang halaga ng benta");
  });

  it("offers Request it and Humiling as plain emails with a subject", () => {
    const markup = section();
    const cases = [
      [
        associationRequestLinks.en,
        "Request it by email",
        "KitaMo for our barangay, LGU or HOA",
      ],
      [
        associationRequestLinks.fil,
        "Humiling sa pamamagitan ng email",
        "KitaMo para sa aming barangay, LGU o HOA",
      ],
    ] as const;

    for (const [link, name, subject] of cases) {
      const links = linksTo(markup, link.href);
      const url = new URL(link.href);

      expect(links).toHaveLength(1);
      expect(accessibleName(links[0].label)).toBe(name);
      expect(links[0].attributes).not.toContain("target=");
      expect(url.protocol).toBe("mailto:");
      expect(url.pathname).toBe("kitamo.online@gmail.com");
      // Only the subject is prefilled: no body, copy or tracking parameter.
      expect([...url.searchParams.keys()]).toEqual(["subject"]);
      expect(url.searchParams.get("subject")).toBe(subject);
    }
  });

  it("collects nothing and promises no date, price or availability", () => {
    const markup = section();
    const text = visibleText(markup).toLowerCase();

    for (const tag of ["<form", "<input", "<button", "<script", "<iframe"]) {
      expect(markup).not.toContain(tag);
    }
    expect(text).not.toMatch(/\d|₱/);
    for (const phrase of ["join", "available", "soon", "sign up"]) {
      expect(text).not.toContain(phrase);
    }
  });

  it("is the only place the site links to an email", () => {
    for (const [, Page] of pages) {
      const mailtos = hrefsIn(renderPage(Page)).filter((href) =>
        href.startsWith("mailto:"),
      );

      expect(mailtos).toEqual(
        Page === AboutPage
          ? [associationRequestLinks.en.href, associationRequestLinks.fil.href]
          : [],
      );
    }
  });
});

describe("MR-1 prohibited public language", () => {
  it.each(pages)("keeps prohibited phrases off %s", (_, Page) => {
    const markup = renderPage(Page).toLowerCase();

    for (const phrase of [
      "download now",
      "available now",
      "join thousands",
      "trusted by",
      "ai-powered",
      "start free",
      "get started",
      "sign up",
      "cloud sync",
      "subscribe",
      "guaranteed",
      "seamless",
      "all-in-one",
    ]) {
      expect(markup).not.toContain(phrase);
    }
  });
});
