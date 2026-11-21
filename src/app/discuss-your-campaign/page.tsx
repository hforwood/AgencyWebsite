import type { Metadata } from "next";
import Image from "next/image";

import { AgencyEstimateProvider } from "@/components/agency-estimate-context";
import { AgencyPricingCalculator } from "@/components/agency-pricing-calculator";
import { CalInlineEmbed } from "@/components/cal-inline-embed";
import { CustomerLogoCloud } from "@/components/customer-logo-cloud";
import {
  AGENCY_MONTHLY_MINIMUM_USD,
  AGENCY_SETUP_FEE_USD,
  AGENCY_SPEND_RATE,
  formatMoney,
  formatRate,
} from "@/lib/agency-pricing";

import bookingBackground from "../../../public/booking-background.png";

export const metadata: Metadata = {
  title: "Discuss Your Campaign | Flooencer.",
  description:
    "Estimate Flooencer Agency pricing at $7,500 setup plus $7,500 or 30% of campaign spend, then book a B2B creator campaign call.",
  alternates: {
    canonical: "https://agency.flooencer.com/discuss-your-campaign",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flooencer Agency",
  description:
    "Managed B2B creator campaigns for SaaS, AI and technology brands.",
  url: "https://agency.flooencer.com/discuss-your-campaign",
  provider: {
    "@type": "Organization",
    name: "Flooencer",
    url: "https://agency.flooencer.com",
  },
  areaServed: "Worldwide",
  serviceType: "Managed B2B influencer marketing",
  offers: {
    "@type": "Offer",
    name: "Flooencer Agency managed campaign",
    description: `${formatMoney(AGENCY_MONTHLY_MINIMUM_USD)} or ${formatRate(AGENCY_SPEND_RATE)} of campaign spend, whichever is higher, plus a one-time ${formatMoney(AGENCY_SETUP_FEE_USD)} setup fee.`,
    priceCurrency: "USD",
    priceSpecification: [
      {
        "@type": "UnitPriceSpecification",
        name: "Agency minimum",
        price: String(AGENCY_MONTHLY_MINIMUM_USD),
        priceCurrency: "USD",
      },
      {
        "@type": "UnitPriceSpecification",
        name: "Initial setup fee",
        price: String(AGENCY_SETUP_FEE_USD),
        priceCurrency: "USD",
      },
    ],
    url: "https://agency.flooencer.com/discuss-your-campaign",
  },
};

export default function DiscussYourCampaignPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-flooencer-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
        <p className="mt-4 max-w-2xl text-center text-base font-medium leading-7 text-black/58 sm:text-lg">
          Set your campaign budget, see the agency cost, then book a time to
          plan your campaign.
        </p>

        <AgencyEstimateProvider>
          <div className="mt-8 w-full">
            <AgencyPricingCalculator />
          </div>

          <CustomerLogoCloud
            className="mt-7"
            headingClassName="text-[#2b2b31]"
            logoClassName="[&_img]:opacity-70"
          />

          <div className="mt-8 w-full max-w-[740px] text-center">
            <h2 className="font-display text-3xl font-black leading-none text-[#2b2b31] sm:text-4xl">
              Book a time to discuss your campaign
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm font-medium leading-6 text-black/58 sm:text-base">
              Choose a time that works. Your selected estimate is included with
              the booking so we can discuss your goals, B2B creators and
              campaign plan.
            </p>
            <div className="mt-6 text-left">
              <CalInlineEmbed />
            </div>
          </div>
        </AgencyEstimateProvider>
      </section>
    </main>
  );
}
