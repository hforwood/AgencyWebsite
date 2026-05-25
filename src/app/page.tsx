import Image from "next/image";
import Link from "next/link";

import { CustomerLogoCloud } from "@/components/customer-logo-cloud";
import { FlooencerIcon } from "@/components/flooencer-icon";
import { Button } from "@/components/ui/button";
import CoreValueStats, { type CoreStat } from "@/components/ui/core-value-stats";
import {
  ProcessSection,
  type ProcessItem,
} from "@/components/ui/how-we-do-it-process-overview";
import { ShaderBackground } from "@/components/ui/hero-shader";

import flooencerLogoWhite from "../../Logos/Full_Flooencer_Logo_White.svg";

const discussHref = "/discuss-your-campaign";

const stats = [
  {
    value: "$35k",
    label: "Typical POC",
    description:
      "A focused campaign structure with creator sourcing, management, briefs, reporting, and launch support.",
  },
  {
    value: "$5k",
    label: "Monthly minimum",
    description:
      "Built for B2B brands ready to run creator-led campaigns with enough budget to learn properly.",
  },
  {
    value: "30%",
    label: "Of campaign spend",
    description:
      "Agency management can scale with spend when campaign budgets move beyond the minimum monthly fee.",
  },
  {
    value: "3x",
    label: "Month campaigns",
    description:
      "Enough time to match creators, launch content, read signal, and optimise the next wave.",
  },
] satisfies CoreStat[];

const processItems = [
  {
    icon: "/process-icons/campaign-strategy.svg",
    title: "Campaign Strategy",
    description:
      "We define the audience, creator angle, offer, content themes, success metrics, and activation plan.",
  },
  {
    icon: "/process-icons/creator-sourcing.svg",
    title: "Creator Sourcing",
    description:
      "We shortlist creators who already influence the SaaS, AI, and technology buyers you care about.",
  },
  {
    icon: "/process-icons/campaign-brief.svg",
    title: "Briefs & Offers",
    description:
      "We handle campaign briefs, deliverables, timelines, approvals, and the commercial back-and-forth.",
  },
  {
    icon: "/process-icons/execute.svg",
    title: "Execution",
    description:
      "We manage creators through posting, draft feedback, go-live checks, and performance collection.",
  },
  {
    icon: "/process-icons/reporting.svg",
    title: "Reporting",
    description:
      "We turn content performance and engagement signals into campaign learnings your team can act on.",
  },
  {
    icon: "/process-icons/optimise.svg",
    title: "Optimisation",
    description:
      "We refine creators, messaging, formats, and next campaign decisions from what the market responds to.",
  },
] satisfies ProcessItem[];

const services = [
  "Creator sourcing and validation",
  "Campaign strategy and messaging",
  "Creator outreach and negotiation",
  "Briefs, approvals, and launch management",
  "Content collection and reporting",
  "Optimisation across campaign waves",
];

function AgencyHeader() {
  return (
    <header className="relative z-20 border-b border-white/10">
      <div className="mx-auto flex h-20 w-full max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" aria-label="Flooencer agency home" className="shrink-0">
          <Image
            src={flooencerLogoWhite}
            alt="Flooencer."
            width={168}
            height={40}
            priority
            className="h-auto w-[142px] sm:w-[168px]"
          />
        </Link>

        <a
          href="https://www.flooencer.com"
          className="rounded-lg border border-white/14 bg-white/8 px-4 py-2.5 text-sm font-bold text-white/78 transition hover:border-white/28 hover:bg-white/14 hover:text-white"
        >
          Flooencer Platform
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <ShaderBackground>
      <AgencyHeader />
      <section className="mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-[1320px] items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:py-20">
        <div className="max-w-4xl">
          <h1 className="max-w-5xl font-display text-[48px] font-black leading-[0.9] tracking-normal text-white sm:text-7xl lg:text-[88px]">
            B2B creator campaigns, run for you.
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/72 sm:text-xl">
            We source, brief, manage, and report on creator campaigns for SaaS,
            AI, and technology companies that want influence to turn into
            pipeline.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="h-14 rounded-lg bg-white px-7 text-base font-bold text-flooencer-deep shadow-[0_24px_80px_rgba(205,156,236,0.28)] hover:bg-flooencer-lavender"
            >
              <Link href={discussHref}>
                Discuss your campaign
                <FlooencerIcon
                  data-icon="inline-end"
                  name="arrow-right"
                  className="size-6"
                />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-14 rounded-lg border-white/20 bg-white/5 px-7 text-base font-bold text-white backdrop-blur hover:bg-white/12 hover:text-white"
            >
              <a href="#process">See how it works</a>
            </Button>
          </div>
        </div>
      </section>
    </ShaderBackground>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-flooencer-purple">
            What we run
          </p>
          <h2 className="mt-4 font-display text-5xl font-black leading-[0.92] tracking-normal text-flooencer-black sm:text-6xl">
            The managed service behind B2B creator growth.
          </h2>
          <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-black/60">
            Your team gets the strategy and execution of a creator marketing
            function without hiring, training, and managing one internally.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service}
              className="flex min-h-24 items-start gap-4 rounded-lg border border-black/10 bg-white p-5 shadow-[0_16px_46px_rgba(119,85,250,0.08)]"
            >
              <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-flooencer-purple text-white">
                <FlooencerIcon name="check" className="size-4" />
              </span>
              <p className="text-base font-bold leading-6 text-flooencer-black">
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-white px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-[1100px] gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-lg border border-black/10 bg-flooencer-black p-7 text-white shadow-[0_24px_80px_rgba(40,7,82,0.22)] sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-flooencer-lavender">
            Pricing
          </p>
          <h2 className="mt-4 font-display text-5xl font-black leading-[0.92] tracking-normal">
            Built for serious campaign tests.
          </h2>
          <div className="mt-8 space-y-4 text-lg font-bold">
            <p>$5,000 per month</p>
            <p>or 30% of campaign spend</p>
            <p className="text-sm font-medium text-white/50">
              Whichever is higher, plus a $5,000 initial setup month.
            </p>
          </div>
        </div>

        <div className="rounded-lg border border-black/10 bg-[#f8f6ff] p-7 text-flooencer-black shadow-[0_24px_80px_rgba(119,85,250,0.12)] sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-flooencer-purple">
            Requirements
          </p>
          <h2 className="mt-4 font-display text-5xl font-black leading-[0.92] tracking-normal">
            Minimum commitment.
          </h2>
          <div className="mt-8 space-y-4 text-lg font-bold">
            <p>$5,000 per month campaign spend</p>
            <p>3 month long campaign</p>
            <p>Typical POC: $35,000</p>
          </div>
          <Button
            asChild
            className="mt-8 h-12 rounded-lg bg-[linear-gradient(135deg,#6513D1_0%,#7755FA_100%)] px-6 text-base font-bold text-white shadow-[0_18px_60px_rgba(101,19,209,0.26)] hover:brightness-110"
          >
            <Link href={discussHref}>
              Discuss your campaign
              <FlooencerIcon
                data-icon="inline-end"
                name="arrow-right"
                className="size-6"
              />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-flooencer-black">
      <Hero />
      <CustomerLogoCloud className="bg-white py-14" />
      <Services />
      <CoreValueStats stats={stats} />
      <ProcessSection
        eyebrow="How we do it"
        title="From campaign strategy to creator posts."
        description="Flooencer Agency handles the operating work behind creator-led B2B growth, from initial positioning through to live content and campaign reporting."
        buttonText="Discuss your campaign"
        href={discussHref}
        items={processItems}
      />
      <Pricing />
    </main>
  );
}
