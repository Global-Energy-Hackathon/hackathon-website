// Settings for the marketing site.
//
// Registration, mentor sign-up, judging and results live in the separate
// hackathon platform app. This site has none of that; its buttons link there.

// Where the platform lives. Every Register / Judge Sign In
// / View the Winners link points here.
export const PLATFORM_URL = "https://globalenergyhackathon.vercel.app";

export function platformUrl(path: string): string {
  return `${PLATFORM_URL}${path}`;
}

// The homepage's main button follows the event phase. The platform flips its
// phase from its admin panel, which this site can't see, so set it here to
// match:
//   "submissions" → Register Now
//   "judging"     → Judge Sign In
//   "results"     → View the Winners (the /winners page on this site)
export type Phase = "submissions" | "judging" | "results";
export const PHASE: Phase = "results";
