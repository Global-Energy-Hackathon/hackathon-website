import type { Metadata } from "next";
import Link from "next/link";
import {
  Breadcrumbs,
  Footer,
  HeaderBar,
  HeaderCta,
  PageShell,
  SectionTitle,
} from "@/components/shell";

export const metadata: Metadata = {
  title: "Winners · Global Energy Hackathon 2026",
  description:
    "Meet the winners of the 2026 IAS Global Energy Hackathon: SABIL (Grand Prize), GridRescue-AI (2nd Place) and Umeme Sense (3rd Place).",
};

type Winner = {
  place: string;
  prize: string;
  name: string;
  pitch: string;
  members: string[];
  coaches: string[];
};

// Announced at the closing ceremony. Ordered by placing.
const WINNERS: Winner[] = [
  {
    place: "Grand Prize",
    prize: "$5,000",
    name: "SABIL",
    pitch:
      "A home solar kit whose controller makes the lithium-ion battery last.",
    members: ["Youcef Toukal", "Younes Toukal"],
    coaches: ["Arila Barnes"],
  },
  {
    place: "2nd Place",
    prize: "$3,000",
    name: "GridRescue-AI",
    pitch:
      "Turns a map pin into an investment-ready, relocatable clean energy plan for hospitals on weak grids.",
    members: ["Pavan Manjunath"],
    coaches: ["Guru Sharan", "Ashritha Reddy Epur"],
  },
  {
    place: "3rd Place",
    prize: "$2,000",
    name: "Umeme Sense",
    pitch:
      "An integrated policy and digital solution designed to solve silent prepaid self-disconnections and tariff misclassifications.",
    members: [
      "Mercy Sheila Otuko",
      "Emmanuel Kiprotich Mololu",
      "Nickson Kiprotich",
      "Vanessa Karima Mugure",
    ],
    coaches: ["Paula Glover"],
  },
];

function People({ label, names }: { label: string; names: string[] }) {
  return (
    <div>
      <div className="mb-1.5 font-cond text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-crimson">
        {label}
      </div>
      <ul className="space-y-0.5 text-sm text-bone/90">
        {names.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

function WinnerCard({ w, featured }: { w: Winner; featured?: boolean }) {
  return (
    <article
      className={`card flex h-full flex-col animate-fade-up ${
        featured
          ? "border-crimson/60 shadow-crimson md:p-10"
          : "hover:border-crimson/60"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="font-cond text-xs font-bold uppercase tracking-[0.25em] text-crimson">
          ★ {w.place}
        </span>
        <span className="rounded-full border border-line px-3 py-1 font-cond text-[0.7rem] font-semibold uppercase tracking-wider text-dust">
          {w.prize} in cash &amp; prizes
        </span>
      </div>

      <h2
        className={`mt-4 font-display leading-none tracking-wide text-bone ${
          featured ? "text-6xl md:text-8xl" : "text-4xl md:text-5xl"
        }`}
      >
        {w.name}
      </h2>

      <p
        className={`mt-4 flex-1 leading-relaxed text-bone/90 ${
          featured ? "max-w-2xl text-lg md:text-xl" : "text-sm"
        }`}
      >
        {w.pitch}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5">
        <People label="Team" names={w.members} />
        <People
          label={w.coaches.length > 1 ? "Coaches" : "Coach"}
          names={w.coaches}
        />
      </div>
    </article>
  );
}

export default function WinnersPage() {
  const [grand, ...runnersUp] = WINNERS;

  return (
    <>
      <HeaderBar rightSlot={<HeaderCta />} />
      <PageShell maxWidth="max-w-5xl">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "Winners" }]}
        />

        <SectionTitle
          eyebrow="Hackathon Complete · 2026"
          title="Meet the Winners"
          subtitle="After three days of building and a round of expert judging, these teams took home the top prizes. Congratulations to them, and thank you to every participant, mentor, coach and judge."
        />

        <div className="mt-8">
          <WinnerCard w={grand} featured />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {runnersUp.map((w) => (
            <WinnerCard key={w.name} w={w} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-dust">
            Thank you for being the spark. See you at the 2027 summit.
          </p>
          <Link href="/" className="btn mt-5">
            ← Back to Home
          </Link>
        </div>
      </PageShell>
      <Footer />
    </>
  );
}
