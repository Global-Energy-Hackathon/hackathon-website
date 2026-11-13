import Image from "next/image";
import {
  Footer,
  HeaderBar,
  HeaderCta,
  PageShell,
  Wordmark,
} from "@/components/shell";
import { TRACKS } from "@/lib/hackathon";
import { PHASE, platformUrl } from "@/lib/site";

const PILLARS = [
  {
    k: "Access",
    img: "/pillar-1.png",
    d: "Bring reliable power to the communities and regions still living without it.",
    example:
      "Design a low-cost, scalable connection model that brings grid electricity or a community energy alternative to unelectrified Nigerian households, using financing and payment structures affordable to families earning less than ₦50,000 per month.",
  },
  {
    k: "Affordability",
    img: "/pillar-2.png",
    d: "Drive down the cost of clean energy so it's within reach for everyone.",
    example:
      "Design an innovative financing and energy delivery model that reduces the energy burden of low-income households in Minnesota's disadvantaged communities — where families spend more than 10% of their income on heating, cooling, and electricity — to below the national affordability threshold, without disrupting existing utility relationships or requiring significant upfront investment from the household.",
  },
  {
    k: "Availability",
    img: "/pillar-3.png",
    d: "Build resilient systems that keep energy flowing — anytime, anywhere.",
    example:
      "Design a scalable, low-maintenance energy system that guarantees uninterrupted 24-hour power for Nigerian hospitals experiencing 8–20 hours of daily grid outages, ensuring critical medical equipment, refrigeration, lighting, and life-support systems never fail due to electricity unavailability.",
  },
];

// Example problem statements per challenge track, keyed by the shared TRACKS
// strings in src/lib/hackathon.ts (which the forms also use — don't rename).
const TRACK_EXAMPLES: Record<string, string> = {
  "New Technologies & Hardware Innovations":
    "Develop a new solar inverter model. What gaps exist in the current models?",
  "Digital Solutions, Apps & AI/ML Tools":
    "Develop an app that teaches laypersons about power generation, transmission and distribution. How is new content created daily? How does the platform generate income? Should a private or public entity own it?",
  "Business Models & Financing Approaches":
    "Create the optimal payment structure among Nigerian generating companies (GenCos), distribution companies (DisCos) and the Transmission Company of Nigeria (TCN).",
  "Clean Energy & Sustainability Solutions":
    "Develop a scalable model that Airbnb can deploy globally to encourage guests to use Airbnb hosts' energy resources sustainably.",
  "Policy, Systems & Community-Based Solutions":
    "What policies must a country implement to develop local energy meter production and reduce meter importation?",
};

const STATS = [
  { v: "$10,000+*", l: "In cash & prizes" },
  { v: "3 Days", l: "Oct 30 – Nov 1, 2026" },
  { v: "100%", l: "Virtual & global" },
  { v: "Free", l: "To enter" },
];

const STEPS = [
  { t: "Register", d: "Sign up free and tell us how you'll compete — solo or as a team." },
  { t: "Build", d: "Select your mentor, then hack over the event weekend, October 30 – November 1, 2026." },
  { t: "Submit", d: "Send your project, demo video, and details before the deadline." },
  { t: "Judging", d: "Expert judges score every entry across six categories." },
  { t: "Win", d: "Top teams share over $10,000 in cash and prizes." },
];

const FAQ = [
  {
    q: "Who can participate?",
    a: "Anyone, anywhere — students, professionals, founders, and first-time hackers. It's 100% virtual and completely free to join.",
  },
  {
    q: "Do I need a team?",
    a: "No. Compete solo or form a team of up to five people. You can register now and finalize your team later.",
  },
  {
    q: "What should I build?",
    a: "Any solution that accelerates energy access, affordability, or availability — hardware, software, AI/ML, a business model, or a policy idea.",
  },
  {
    q: "How much does it cost?",
    a: "Nothing. Registration and participation are completely free.",
  },
  {
    q: "What are the prizes?",
    a: "Over $10,000 in cash and prizes — a mix of cash awards and in-kind prizes from our partners — awarded to the top projects by our panel of judges. Prize pool is subject to change.",
  },
];

function SectionHead({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-8 text-center">
      <div className="mb-2 font-cond text-[0.7rem] uppercase tracking-[0.3em] text-crimson">
        {eyebrow}
      </div>
      <h2 className="hex-title text-3xl md:text-4xl">{title}</h2>
      {sub && <p className="mx-auto mt-3 max-w-2xl text-dust">{sub}</p>}
      <div className="mx-auto mt-4 h-[2px] w-24 rounded bg-gradient-to-r from-crimson via-bone/80 to-crimson opacity-70" />
    </div>
  );
}

export default function Home() {
  // The main button follows the event phase, set in src/lib/site.ts.
  const hero = {
    submissions: {
      primary: { label: "Register Now", href: platformUrl("/register") },
      note: "Registration open · Free to enter",
    },
    judging: {
      primary: { label: "Judge Sign In", href: platformUrl("/judge") },
      note: "Registration & submissions are closed — judging in progress",
    },
    results: {
      primary: { label: "View the Winners", href: "/winners" },
      note: "The hackathon is complete — congratulations to our winners",
    },
  }[PHASE];

  return (
    <>
      <HeaderBar rightSlot={<HeaderCta />} />

      {/* ---------- HERO (full-bleed image background) ---------- */}
      <section className="theme-dark relative overflow-hidden border-b border-line">
        <Image
          src="/hero-bkg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink" />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 py-16 text-center md:py-24">
          <div className="mb-3 animate-fade-up font-cond text-base font-bold uppercase tracking-[0.2em] text-white drop-shadow-[0_1px_8px_rgba(8,17,36,.9)] md:text-xl">
            Innovative &amp; Affordable Solutions (IAS)
          </div>
          <h1 className="animate-fade-up drop-shadow-[0_0_30px_rgba(8,17,36,.9)]">
            <Wordmark className="text-5xl md:text-7xl" />
          </h1>
          <p className="mt-5 animate-fade-up font-serif text-2xl leading-tight text-bone drop-shadow-[0_1px_8px_rgba(8,17,36,.9)] md:text-3xl">
            Be the <span className="text-crimson">Spark</span>. Power the World.
          </p>
          <p className="mt-3 w-full animate-fade-up text-lg text-bone/90 drop-shadow-[0_1px_8px_rgba(8,17,36,.9)]">
            Accelerating energy access, affordability &amp; availability through
            collaborative innovation.
          </p>

          <div className="mt-7 animate-fade-up">
            <div className="font-display text-3xl leading-none tracking-wide text-bone drop-shadow-[0_0_25px_rgba(8,17,36,.9)] md:text-5xl">
              October 30 <span className="text-crimson">–</span> November 1
              <span className="text-dust">, 2026</span>
            </div>
            <div className="mt-3 flex items-center justify-center gap-3 text-[0.7rem] uppercase tracking-[0.3em] text-dust">
              <span className="h-px w-8 bg-line" />
              100% Virtual · Global
              <span className="h-px w-8 bg-line" />
            </div>
          </div>

          <p className="mt-4 max-w-xl animate-fade-up text-sm text-dust">
            Hosted by Anneru Solutions · Over $10,000 in cash &amp; prizes*
          </p>

          <a
            href={hero.primary.href}
            className="btn-crimson mt-8 h-14 px-10 text-base animate-fade-up"
          >
            {hero.primary.label} →
          </a>
          <div className="mt-4 animate-fade-up font-cond text-[0.7rem] uppercase tracking-[0.3em] text-dust">
            {hero.note}
          </div>
        </div>
      </section>

      <PageShell maxWidth="max-w-5xl">
        {/* ---------- WHAT IS AN ENERGY HACKATHON ---------- */}
        <section className="py-12">
          <SectionHead
            eyebrow="The Challenge"
            title="What Is an Energy Hackathon?"
          />
          <div className="mx-auto max-w-3xl space-y-4">
            <p className="text-lg leading-relaxed text-bone/90">
              The IAS Global Energy Hackathon is an intensive, time-bound
              competition — 48 hours — where teams of students, engineers,
              entrepreneurs, and community innovators rapidly design and
              prototype practical solutions to real-world energy problems.
              Unlike a traditional conference or research project, participants
              must build and defend a working concept under deadline pressure,
              not just discuss ideas. Pitching comes at the next phase: the
              2027 summit. Participants are encouraged to use AI ethically to
              refine their problem statement.
            </p>
            <p className="text-sm leading-relaxed text-dust">
              The hackathon specifically focuses on innovative, affordable, and
              scalable solutions to energy access, reliability, safety, and
              affordability challenges — particularly in underserved and
              resource-limited communities across Africa, North America, and
              beyond. Participants choose a residential track (household and
              community power) or a non-residential track (industrial,
              commercial, healthcare, and government institutions), then
              develop solutions that can realistically be implemented within
              6–18 months and adapted across different global contexts.
            </p>
            <p className="text-sm leading-relaxed text-dust">
              The result is compressed innovation: problems that utilities and
              governments have debated for years get fresh, actionable
              approaches from people close enough to the problem to care — and
              hungry enough to compete.
            </p>
            <p className="text-center text-xs uppercase tracking-[0.2em] text-crimson">
              Mentor profiles will be shared once registration opens.
            </p>
          </div>
        </section>

        {/* ---------- PILLARS ---------- */}
        <section className="py-12">
          <SectionHead
            eyebrow="The Mission"
            title="Energy Access, Affordability & Availability"
            sub="The three pillars of every great entry. Pick one, or take on all three."
          />
          <div className="grid items-start gap-4 md:grid-cols-3">
            {PILLARS.map((p) => (
              <details
                key={p.k}
                className="card group overflow-hidden p-0 transition hover:border-crimson/60 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="cursor-pointer list-none">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={p.img}
                      alt={`${p.k} — illustration`}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-2xl text-bone">{p.k}</h3>
                    <p className="mt-2 text-sm text-dust">{p.d}</p>
                    <div className="mt-3 font-cond text-[0.7rem] font-semibold uppercase tracking-wider text-crimson">
                      <span className="group-open:hidden">
                        Example problem statement +
                      </span>
                      <span className="hidden group-open:inline">
                        Example problem statement −
                      </span>
                    </div>
                  </div>
                </summary>
                <div className="border-t border-line px-5 py-4">
                  <p className="text-sm leading-relaxed text-bone/90">
                    {p.example}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ---------- TRACKS ---------- */}
        <section className="py-12">
          <SectionHead
            eyebrow="Build Anything"
            title="Challenge Tracks"
            sub="Hardware, software, AI, business, or policy for residential or non-residential customers — there's a lane for every kind of builder."
          />
          <div className="grid items-start gap-4 md:grid-cols-2">
            {TRACKS.map((t) => (
              <details
                key={t}
                className="group rounded-xl border border-line bg-ink-3 transition hover:border-crimson/60 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer list-none items-center gap-3 p-4">
                  <span className="font-display text-2xl text-crimson">⬡</span>
                  <span className="flex-1 font-cond text-sm font-semibold uppercase tracking-wide text-bone">
                    {t}
                  </span>
                  <span className="text-crimson transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                {TRACK_EXAMPLES[t] && (
                  <div className="border-t border-line px-4 py-3">
                    <div className="mb-1 font-cond text-[0.65rem] font-semibold uppercase tracking-wider text-crimson">
                      Example problem statement
                    </div>
                    <p className="text-sm leading-relaxed text-dust">
                      {TRACK_EXAMPLES[t]}
                    </p>
                  </div>
                )}
              </details>
            ))}
          </div>
        </section>

        {/* ---------- STATS ---------- */}
        <section className="py-12">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.l} className="card text-center">
                <div className="font-display text-4xl text-crimson md:text-5xl">
                  {s.v}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-dust">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-dust">
            * Total value of cash and in-kind prizes. Prize pool subject to
            change.
          </p>
        </section>

        {/* ---------- HOW IT WORKS ---------- */}
        <section className="py-12">
          <SectionHead eyebrow="How It Works" title="From Idea to Impact" />
          <ol className="grid gap-4 md:grid-cols-5">
            {STEPS.map((s, i) => (
              <li key={s.t} className="card">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-crimson-dark to-crimson font-display text-lg text-white shadow-crimson">
                  {i + 1}
                </div>
                <h3 className="mt-3 font-cond text-base font-bold uppercase tracking-wide text-bone">
                  {s.t}
                </h3>
                <p className="mt-1 text-xs text-dust">{s.d}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className="py-12">
          <SectionHead eyebrow="Questions" title="Frequently Asked" />
          <div className="mx-auto max-w-3xl space-y-3">
            {FAQ.map((f) => (
              <details
                key={f.q}
                className="card group [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-3 font-cond text-base font-semibold text-bone">
                  {f.q}
                  <span className="text-crimson transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-dust">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ---------- FINAL CTA (image background) ---------- */}
        <section className="theme-dark relative my-8 overflow-hidden rounded-2xl border border-crimson/40">
          <Image
            src="/human-shot.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/92 via-ink/80 to-crimson/30" />
          <div className="relative p-8 text-center md:p-14">
            <h2 className="hex-title text-3xl md:text-4xl">
              Be the Spark. Power the World.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-bone/90">
              {PHASE === "results"
                ? "Three days, builders from around the world, and a set of energy solutions worth celebrating. Meet the teams who took home the top prizes."
                : "Join builders from around the world for three days of energy innovation. It's free, it's virtual, and it starts with one click."}
            </p>
            <a
              href={hero.primary.href}
              className="btn-crimson mt-7 h-14 px-10 text-base"
            >
              {hero.primary.label} →
            </a>
          </div>
        </section>
      </PageShell>

      <Footer />
    </>
  );
}
