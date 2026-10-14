import {
  associationRequestLinks,
  createAccountLink,
  helpLinks,
  webAppSignInLink,
} from "@/lib/content/site-navigation";

export const publicRoutes = [
  "/",
  "/for-sellers",
  "/how-it-works",
  "/about",
] as const;

/**
 * Every destination the public site may link to: its own routes, the skip
 * link, the web-app pages approved in CLM-010, CLM-013 and CLM-025, and the
 * two request emails of CLM-027 (pending owner approval).
 */
export const allowedHrefs = new Set<string>([
  ...publicRoutes,
  "#main-content",
  webAppSignInLink.href,
  createAccountLink.href,
  ...helpLinks.map((link) => link.href),
  ...Object.values(associationRequestLinks).map((link) => link.href),
]);

export function hrefsIn(markup: string) {
  return Array.from(markup.matchAll(/<a\b[^>]*href="([^"]+)"/g), (match) =>
    match[1].replaceAll("&amp;", "&"),
  );
}

export function linksTo(markup: string, href: string) {
  return Array.from(markup.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g))
    .map(([, attributes, label]) => ({
      attributes,
      label: label.replace(/<[^>]*>/g, "").trim(),
    }))
    .filter(({ attributes }) =>
      attributes.replaceAll("&amp;", "&").includes(`href="${href}"`),
    );
}
