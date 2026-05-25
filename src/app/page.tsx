import type { Metadata } from "next";
import Image from "next/image";

import { CalInlineEmbed } from "@/components/cal-inline-embed";
import { CustomerLogoCloud } from "@/components/customer-logo-cloud";

import bookingBackground from "../../public/booking-background.png";

export const metadata: Metadata = {
  title: "Discuss Your Campaign | Flooencer.",
  description:
    "Book an agency call with Flooencer to discuss your B2B influencer marketing campaign.",
};

export default function DiscussYourCampaignPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-flooencer-black">
      <Image
        src={bookingBackground}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-white/8" />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center px-5 py-12 sm:px-8 lg:px-10">
        <h1 className="text-center font-display text-4xl font-black leading-none tracking-normal text-[#2b2b31] sm:text-5xl">
          Work with Flooencer Agency
        </h1>

        <div className="mt-4 grid w-full max-w-[560px] gap-5 rounded-lg border border-black/10 bg-white/92 p-5 shadow-[0_18px_50px_rgba(40,7,82,0.18)] backdrop-blur sm:grid-cols-2 sm:p-6">
          <div>
            <h2 className="font-display text-3xl font-bold leading-none text-flooencer-black">
              Pricing
            </h2>
            <div className="mt-3 space-y-2 text-sm font-bold text-flooencer-black">
              <p>
                $5,000{" "}
                <span className="text-xs font-medium text-black/35">
                  Per Month
                </span>
              </p>
              <p>
                or 30%{" "}
                <span className="text-xs font-medium text-black/35">
                  Of Campaign Spend
                </span>
              </p>
            </div>
            <p className="mt-2 text-[11px] font-medium text-black/35">
              Whichever is higher
            </p>
            <p className="mt-6 text-sm font-bold text-flooencer-black">
              +$5,000{" "}
              <span className="text-xs font-medium text-black/35">
                For Initial Setup Month
              </span>
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold leading-none text-flooencer-black">
              Minimum Requirements
            </h2>
            <div className="mt-3 space-y-2 text-sm font-bold text-flooencer-black">
              <p>
                $5,000{" "}
                <span className="text-xs font-medium text-black/35">
                  Per Month Campaign Spend
                </span>
              </p>
              <p>
                3x Month{" "}
                <span className="text-xs font-medium text-black/35">
                  Long Campaign
                </span>
              </p>
            </div>
            <p className="mt-11 text-sm font-bold text-flooencer-black">
              Typical POC: $35,000
            </p>
          </div>
        </div>

        <CustomerLogoCloud
          className="mt-7"
          headingClassName="text-[#2b2b31]"
          logoClassName="[&_img]:opacity-70"
        />

        <div className="mt-4 w-full max-w-[740px]">
          <CalInlineEmbed />
        </div>
      </section>
    </main>
  );
}
