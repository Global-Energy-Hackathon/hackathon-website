# Global Energy Hackathon — marketing site

The public homepage and About Anneru page, taken out of the hackathon
platform app (`~/globalenergyhackathon`) as their own project. There is no
registration, judging, results, admin or database here. Buttons that need the
platform (Register, Become a Mentor, Judge Sign In, View the Winners) link to it.

Not deployed, and has no git remote.

- **Next.js 16** (App Router) + **React 19** + **TypeScript** + **Tailwind 3**,
  the same versions the platform runs
- Fully static: both pages are built ahead of time, with no environment variables

## Pages

| Route | Page |
| --- | --- |
| `/` | Homepage: hero, what an energy hackathon is, the three pillars, challenge tracks, stats, how it works, FAQ, closing call to action |
| `/about` | About Anneru Solutions |

## Settings

Everything that ties this site to the platform is in `src/lib/site.ts`:

- `PLATFORM_URL`: where the platform lives. Every platform button links here.
- `PHASE`: which main button the homepage shows. The platform switches its
  phase in its admin panel, which this site can't see, so set it here to match:
  `"submissions"` → Register Now, `"judging"` → Judge Sign In,
  `"results"` → View the Winners.

The challenge tracks in `src/lib/hackathon.ts` are copied from the platform,
whose forms use the same list. Keep the two in step.

## Commands

```bash
npm install
npm run build      # production build
npm run typecheck
npm run dev        # local preview at http://localhost:3000
```
