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
    value: "$2M+",
    label: "Campaign spend",
    description:
      "Managed across B2B creator campaigns for SaaS, AI, and technology companies.",
  },
  {
    value: "100+",
    label: "Brands worked with",
    description:
      "From early growth teams to global software companies running creator-led demand.",
  },
  {
    value: "2,000+",
    label: "Sponsored creators",
    description:
      "B2B creators activated across LinkedIn, YouTube, newsletters, podcasts, and niche communities.",
  },
  {
    value: "10,000+",
    label: "Pieces of content",
    description:
      "Creator-led posts, videos, newsletters, and campaign assets launched across B2B audiences.",
    variant: "shader",
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

const navGroups = [
  {
    label: "For Brands",
    items: [
      {
        label: "B2B Influencer Marketplace",
        href: "https://www.flooencer.com",
        description: "Find and manage B2B creator partners.",
      },
      {
        label: "Flooencer Agency",
        href: "https://agency.flooencer.com",
        description: "Use our team to run creator campaigns end to end.",
      },
    ],
  },
  {
    label: "For Creators",
    items: [
      {
        label: "B2B Creator Platform",
        href: "https://businessinfluencer.flooencer.com",
        description: "Join campaigns from SaaS, AI, and technology brands.",
      },
    ],
  },
  {
    label: "Company",
    items: [
      {
        label: "About Us",
        href: "https://www.flooencer.com/about-us/team-members",
        description: "Meet the team building Flooencer.",
      },
      {
        label: "Contact Us",
        href: "https://www.flooencer.com/contact",
        description: "Get in touch with the Flooencer team.",
      },
    ],
  },
];

function AgencyNavDropdown({ group }: { group: (typeof navGroups)[number] }) {
  return (
    <div className="group relative">
      <button
        className="flex h-11 items-center gap-1.5 rounded-lg px-2 transition hover:text-white"
        type="button"
      >
        {group.label}
        <FlooencerIcon
          name="chevron-down"
          className="size-5 transition group-hover:rotate-180"
        />
      </button>
      <div className="invisible absolute left-1/2 top-full min-w-72 -translate-x-1/2 translate-y-2 rounded-lg border border-white/12 bg-[#12091f]/95 p-2 opacity-0 shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {group.items.map((item) => (
          <a
            className="block rounded-lg px-4 py-3 transition hover:bg-white/10"
            href={item.href}
            key={item.label}
          >
            <span className="block text-sm font-bold text-white">
              {item.label}
            </span>
            <span className="mt-1 block text-sm font-medium leading-5 text-white/54">
              {item.description}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

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

        <div className="flex items-center gap-3 sm:gap-6">
          <nav className="hidden items-center gap-6 text-sm font-bold text-white/66 lg:flex">
            {navGroups.slice(0, 2).map((group) => (
              <AgencyNavDropdown group={group} key={group.label} />
            ))}
            <a
              className="transition hover:text-white"
              href="https://www.flooencer.com/resources/blog"
            >
              Blog
            </a>
            <AgencyNavDropdown group={navGroups[2]} />
          </nav>

          <Button
            asChild
            className="h-11 rounded-lg bg-white px-4 text-sm font-bold text-flooencer-deep shadow-[0_18px_50px_rgba(205,156,236,0.24)] hover:bg-flooencer-lavender sm:px-5"
          >
            <Link href={discussHref}>Discuss your campaign</Link>
          </Button>
        </div>
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
    </main>
  );
}
