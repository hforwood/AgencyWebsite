import { FlooencerIcon, type FlooencerIconName } from "@/components/flooencer-icon";
import { cn } from "@/lib/utils";
import React from "react";

type FeatureType = {
  title: string;
  icon: FlooencerIconName;
  description: string;
};

type FeatureCardProps = React.ComponentProps<"div"> & {
  feature: FeatureType;
  index?: number;
};

const advocacyFeatures: FeatureType[] = [
  {
    title: "Discover",
    icon: "magnifier",
    description: "B2B Influencers across relevant social platforms.",
  },
  {
    title: "Outreach",
    icon: "envelope",
    description: "Contact creators easily who aren't even part of Flooencer.",
  },
  {
    title: "Chat",
    icon: "comments",
    description: "Speak with creators to strike a deal.",
  },
  {
    title: "Wallet",
    icon: "credit-card",
    description: "Manage all payments and finance in one place.",
  },
  {
    title: "IRM",
    icon: "databases",
    description: "Your system of record and task management for partnerships.",
  },
  {
    title: "Briefs",
    icon: "file-text",
    description:
      "Share beautiful dynamic briefs to ensure everyone's on task.",
  },
  {
    title: "Offers",
    icon: "tag-dollar",
    description:
      "Send detailed offers with dates, amounts and contractual terms.",
  },
  {
    title: "Draft Management",
    icon: "pencil-to-square",
    description:
      "Collaborate and collect drafts from creators and give feedback.",
  },
  {
    title: "Draft Collection",
    icon: "bell",
    description:
      "Reminders and chasers are automatically sent to creators.",
  },
  {
    title: "Schedule",
    icon: "clock",
    description:
      "Know who is posting, when drafts are due and who needs to submit analytics.",
  },
  {
    title: "Calendar",
    icon: "calendar",
    description: "A global view of all your posts and timings.",
  },
  {
    title: "Link Tracking + Shortening",
    icon: "link",
    description:
      "No more massive UTMs or comparing GA to campaigns.",
  },
  {
    title: "Analytics",
    icon: "chart-bar",
    description:
      "Track performance across all your content and collect data.",
  },
];

export function FeatureCard({
  feature,
  index = 0,
  className,
  ...props
}: FeatureCardProps) {
  const p = genPattern(index);

  return (
    <div
      className={cn(
        "relative min-h-[220px] overflow-hidden rounded-[18px] border border-[#e6e4ea] bg-white p-6 shadow-[0_14px_42px_rgba(119,85,250,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#7755FA]/35 hover:shadow-[0_24px_64px_rgba(119,85,250,0.14)]",
        className,
      )}
      {...props}
    >
      <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7755FA]/[0.035] to-[#7755FA]/[0.01] opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
          <GridPattern
            width={20}
            height={20}
            x="-12"
            y="4"
            squares={p}
            className="absolute inset-0 h-full w-full fill-[#7755FA]/[0.035] stroke-[#280752]/10 mix-blend-overlay"
          />
        </div>
      </div>
      <div className="relative z-10 flex size-14 items-center justify-center rounded-2xl bg-[#f4efff] text-[#7755FA] ring-1 ring-[#7755FA]/15">
        <FlooencerIcon name={feature.icon} className="size-8" />
      </div>
      <h3 className="relative z-10 mt-10 font-display text-[24px] font-bold leading-none tracking-normal text-[#343238]">
        {feature.title}
      </h3>
      <p className="relative z-10 mt-3 text-[15px] font-medium leading-6 text-black/58">
        {feature.description}
      </p>
    </div>
  );
}

function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: React.ComponentProps<"svg"> & {
  height: number;
  squares?: number[][];
  width: number;
  x: string;
  y: string;
}) {
  const patternId = React.useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([squareX, squareY], squareIndex) => (
            <rect
              strokeWidth="0"
              key={`${squareX}-${squareY}-${squareIndex}`}
              width={width + 1}
              height={height + 1}
              x={squareX * width}
              y={squareY * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

function genPattern(seed: number, length = 5): number[][] {
  return Array.from({ length }, (_, index) => [
    7 + ((seed + index * 2) % 4),
    1 + ((seed * 3 + index * 2) % 6),
  ]);
}

export function AllAdvocacyFeatureCards() {
  return (
    <section className="w-full bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto w-full max-w-[1360px]">
        <div className="mx-auto max-w-[880px] text-center">
          <h2 className="font-display text-[44px] font-bold leading-none tracking-normal text-[#343238] sm:text-5xl lg:text-[60px]">
            All advocacy, under one roof.
          </h2>
          <p className="mx-auto mt-5 max-w-[760px] text-lg font-medium leading-8 text-black/58 sm:text-xl">
            Everything you need to find, manage, collaborate and scale B2B
            Influencer, customer and employee marketing.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {advocacyFeatures.map((feature, index) => (
            <FeatureCard
              feature={feature}
              index={index}
              key={feature.title}
              className={cn(
                index === 12 &&
                  "sm:col-span-2 lg:col-start-2 xl:col-span-2 xl:col-start-2",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
