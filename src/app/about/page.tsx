import type { Metadata } from "next";
import {
  Breadcrumbs,
  Footer,
  GlobeMark,
  HeaderBar,
  HeaderCta,
  PageShell,
  SectionTitle,
} from "@/components/shell";
import Link from "next/link";
import { PHASE, platformUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Anneru Solutions · Global Energy Hackathon",
  description:
    "Anneru Solutions Incorporated is a consultancy with expertise in infrastructure management, energy management, power quality, and professional development — and the team behind the IEEE PowerAfrica Conference.",
};

const EXPERTISE = [
  {
    k: "Infrastructure Management",
    d: "Planning, operating, and optimizing the systems that keep critical infrastructure running.",
  },
  {
    k: "Energy Management",
    d: "Strategies to use energy more efficiently, reliably, and sustainably.",
  },
  {
    k: "Power Quality",
    d: "Diagnosing and resolving the power-quality issues behind equipment failures and losses.",
  },
  {
    k: "Professional Development",
    d: "Courses, events, and conference programming that grow the next generation of energy talent.",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeaderBar rightSlot={<HeaderCta />} />
      <PageShell maxWidth="max-w-3xl">
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: "About Anneru" }]}
        />

        <div className="mb-8 flex items-center gap-4 animate-fade-up">
          <GlobeMark size={56} className="h-14 w-14" alt="Anneru Solutions" />
          <SectionTitle
            eyebrow="The Host"
            title="About Anneru Solutions"
          />
        </div>

        <div className="card space-y-5">
          <p className="text-lg leading-relaxed text-bone/90">
            Anneru Solutions Incorporated is a consultancy with expertise in{" "}
            <span className="text-crimson">infrastructure management</span>,{" "}
            <span className="text-crimson">energy management</span>,{" "}
            <span className="text-crimson">power quality</span>, and{" "}
            <span className="text-crimson">professional development</span>{" "}
            through courses, events, and conference programming.
          </p>
          <p className="text-lg leading-relaxed text-bone/90">
            The leadership of Anneru Solutions Incorporated is responsible for
            the success of the{" "}
            <span className="font-semibold text-bone">
              PowerAfrica Conference
            </span>{" "}
            of the Institute of Electrical and Electronics Engineers (IEEE).
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {EXPERTISE.map((e) => (
            <div key={e.k} className="card">
              <div className="font-cond text-sm font-bold uppercase tracking-wide text-crimson">
                {e.k}
              </div>
              <p className="mt-2 text-sm text-dust">{e.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="https://www.anneru.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-crimson"
          >
            Visit anneru.com →
          </a>
          {PHASE === "results" ? (
            <Link href="/winners" className="btn">
              Meet the Winners
            </Link>
          ) : (
            <a href={platformUrl("/register")} className="btn">
              Register for the Hackathon
            </a>
          )}
        </div>
      </PageShell>
      <Footer />
    </>
  );
}
