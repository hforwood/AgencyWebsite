"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";

import { FlooencerIcon } from "@/components/flooencer-icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import flooencerLogo from "../../Logos/Full_Flooencer_Logo_Purple 1.svg";

const navGroups = [
  {
    label: "For Brands",
    items: [
      {
        label: "B2B Influencer Marketplace",
        href: "/",
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
        href: "/about-us/team-members",
        description: "Meet the team building Flooencer.",
      },
    ],
  },
];

const trialHref = "https://onboarding.flooencer.com";

function NavLink({
  href,
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  href: string;
}) {
  if (href.startsWith("/")) {
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}

function DesktopDropdown({ group }: { group: (typeof navGroups)[number] }) {
  return (
    <div className="group relative">
      <button
        className="flex h-12 items-center gap-1.5 rounded-lg px-2 transition hover:text-flooencer-purple"
        type="button"
      >
        {group.label}
        <FlooencerIcon
          name="chevron-down"
          className="size-5 transition group-hover:rotate-180"
        />
      </button>
      <div className="invisible absolute left-1/2 top-full min-w-72 -translate-x-1/2 translate-y-2 rounded-lg border border-black/10 bg-white p-2 opacity-0 shadow-[0_22px_70px_rgba(15,15,15,0.12)] transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        {group.items.map((item) => (
          <NavLink
            className="block rounded-lg px-4 py-3 transition hover:bg-[#f4efff]"
            href={item.href}
            key={item.label}
          >
            <span className="block text-sm font-bold text-flooencer-black">
              {item.label}
            </span>
            <span className="mt-1 block text-sm font-medium leading-5 text-black/50">
              {item.description}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

function MobileNavGroup({ group }: { group: (typeof navGroups)[number] }) {
  return (
    <div className="rounded-lg border border-black/10">
      <p className="border-b border-black/10 px-4 py-3 text-sm font-bold text-black/50">
        {group.label}
      </p>
      {group.items.map((item) => (
        <NavLink
          className="block px-4 py-3 text-base font-bold text-flooencer-black"
          href={item.href}
          key={item.label}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}

export function FlooencerSiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const productNavGroups = navGroups.slice(0, 2);
  const companyNavGroup = navGroups[2];

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex h-24 w-full max-w-[1580px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" aria-label="Flooencer home" className="shrink-0">
          <Image
            src={flooencerLogo}
            alt="Flooencer."
            width={180}
            height={42}
            priority
            className="h-auto w-[154px] sm:w-[180px]"
          />
        </Link>

        <nav
          aria-label="Main"
          className="hidden items-center gap-10 text-[17px] font-bold text-[#343238] lg:flex"
        >
          {productNavGroups.map((group) => (
            <DesktopDropdown group={group} key={group.label} />
          ))}
          <Link className="transition hover:text-flooencer-purple" href="/resources/blog">
            Blog
          </Link>
          <DesktopDropdown group={companyNavGroup} />
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            asChild
            className="h-16 rounded-[24px] bg-[#7755FA] px-12 text-xl font-bold text-white shadow-[0_18px_45px_rgba(119,85,250,0.28)] hover:bg-[#6513D1]"
          >
            <a href={trialHref}>Start Trial</a>
          </Button>
        </div>

        <button
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
          className="flex size-11 items-center justify-center rounded-lg border border-black/10 text-flooencer-black lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          type="button"
        >
          <FlooencerIcon
            name={mobileOpen ? "xmark" : "bars"}
            className="size-7"
          />
        </button>
      </div>

      <div
        className={cn(
          "grid border-t border-black/[0.06] bg-white transition-all lg:hidden",
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <nav className="mx-auto grid w-full max-w-[1580px] gap-3 px-5 py-5 sm:px-8">
            {productNavGroups.map((group) => (
              <MobileNavGroup group={group} key={group.label} />
            ))}
            <Link
              className="rounded-lg border border-black/10 px-4 py-3 text-base font-bold text-flooencer-black"
              href="/resources/blog"
            >
              Blog
            </Link>
            <MobileNavGroup group={companyNavGroup} />
            <Button
              asChild
              className="h-12 rounded-lg bg-[#7755FA] text-base font-bold text-white"
            >
              <a href={trialHref}>Start Trial</a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
