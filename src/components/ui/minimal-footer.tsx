import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { FlooencerIcon } from "@/components/flooencer-icon";

import flooencerLogoWhite from "../../../Logos/Full_Flooencer_Logo_White.svg";

const footerGroups = [
  {
    title: "Company",
    links: [
      { label: "Contact Us", href: "/contact" },
      {
        label: "About Us",
        href: "https://www.flooencer.com/about-us/team-members",
      },
    ],
  },
  {
    title: "Products",
    links: [
      {
        label: "B2B Influencer Marketplace",
        href: "https://www.flooencer.com",
      },
      { label: "Flooencer Agency", href: "https://agency.flooencer.com" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "https://www.flooencer.com/resources/blog" },
    ],
  },
  {
    title: "B2B Influencers",
    links: [
      {
        label: "Home",
        href: "https://www.flooencer.com/b2binfluencers",
      },
      {
        label: "Sign Up",
        href: "https://businessinfluencer.flooencer.com/sign-up",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        label: "Website Policy",
        href: "https://www.flooencer.com/legal/website-policy",
      },
      {
        label: "Terms of Service",
        href: "https://www.flooencer.com/legal/terms-of-service",
      },
      {
        label: "Privacy Policy",
        href: "https://www.flooencer.com/legal/privacy-policy",
      },
    ],
  },
];

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const className = "text-sm leading-6 text-white/62 transition hover:text-white";

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export function MinimalFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-flooencer-black px-6 py-12 text-white sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_3fr]">
          <div className="flex flex-col items-start gap-6">
            <Link href="/" aria-label="Flooencer home">
              <Image
                src={flooencerLogoWhite}
                alt="Flooencer."
                width={146}
                height={34}
                className="h-auto w-[132px] sm:w-[146px]"
                style={{ height: "auto" }}
              />
            </Link>
            <a
              href="https://www.linkedin.com/company/flooencer/"
              target="_blank"
              rel="noreferrer"
              aria-label="Flooencer on LinkedIn"
              className="flex size-12 items-center justify-center rounded-lg border border-white/12 bg-white/[0.055] text-white transition hover:border-flooencer-purple/70 hover:bg-flooencer-purple"
            >
              <FlooencerIcon name="linkedin" className="size-7" />
            </a>
          </div>

          <nav
            aria-label="Footer"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[0.8fr_1.65fr_0.75fr_1.05fr_0.95fr]"
          >
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="font-display text-lg font-bold leading-none tracking-normal text-white">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <FooterLink href={link.href}>
                        {link.label}
                      </FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-sm text-white/42">
            &copy; {year} Flooencer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
