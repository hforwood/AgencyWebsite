"use client";

import { Slider } from "radix-ui";
import { useState } from "react";

import {
  AGENCY_CAMPAIGN_SPEND_MAX_USD,
  AGENCY_CAMPAIGN_SPEND_MIN_USD,
  AGENCY_CAMPAIGN_SPEND_STEP_USD,
  AGENCY_DEFAULT_CAMPAIGN_SPEND_USD,
  AGENCY_MINIMUM_COMMITMENT_MONTHS,
  AGENCY_MONTHLY_MINIMUM_USD,
  AGENCY_SETUP_FEE_USD,
  AGENCY_SPEND_RATE,
  estimateAgencyCosts,
  formatMoney,
  formatRate,
} from "@/lib/agency-pricing";

export function AgencyPricingCalculator() {
  const [campaignSpend, setCampaignSpend] = useState(
    AGENCY_DEFAULT_CAMPAIGN_SPEND_USD,
  );
  const estimate = estimateAgencyCosts(campaignSpend);

  return (
    <section
      aria-labelledby="agency-pricing-heading"
      className="w-full overflow-hidden rounded-2xl border border-[#e6e4ea] bg-white shadow-[0_24px_70px_rgba(101,19,209,0.10)]"
    >
      <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
        <div className="p-6 sm:p-8 lg:p-10">
          <h2
            className="font-display text-[34px] font-black leading-none text-[#0f0f0f] sm:text-[42px]"
            id="agency-pricing-heading"
          >
            Estimate your agency program
          </h2>
          <p className="mt-3 max-w-xl text-base font-medium leading-7 text-black/58">
            Set your monthly campaign spend to see the agency fee and minimum
            three-month program total.
          </p>

          <div className="mt-9 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-black/58">
                Monthly campaign spend
              </p>
              <p className="mt-1 flex flex-wrap items-baseline gap-2 font-display">
                <span className="text-[44px] font-black leading-none text-[#0f0f0f] tabular-nums sm:text-[52px]">
                  {formatMoney(campaignSpend)}
                </span>
                <span className="text-base font-medium text-black/58">
                  per month
                </span>
              </p>
            </div>
            <p className="rounded-full bg-[#f4efff] px-4 py-2 text-sm font-bold text-[#6513D1]">
              {formatMoney(AGENCY_CAMPAIGN_SPEND_MIN_USD)} minimum
            </p>
          </div>

          <div className="mt-8">
            <Slider.Root
              className="relative flex h-11 w-full touch-none select-none items-center"
              max={AGENCY_CAMPAIGN_SPEND_MAX_USD}
              min={AGENCY_CAMPAIGN_SPEND_MIN_USD}
              onValueChange={([next]) =>
                setCampaignSpend(next ?? AGENCY_CAMPAIGN_SPEND_MIN_USD)
              }
              step={AGENCY_CAMPAIGN_SPEND_STEP_USD}
              value={[campaignSpend]}
            >
              <Slider.Track className="relative h-2 grow overflow-hidden rounded-full bg-[#efefef]">
                <Slider.Range className="absolute h-full bg-[#7755FA]" />
              </Slider.Track>
              <Slider.Thumb
                aria-describedby="agency-pricing-formula"
                aria-label="Monthly campaign spend"
                aria-valuetext={`${formatMoney(campaignSpend)} monthly campaign spend`}
                className="block size-7 rounded-full border-[3px] border-[#7755FA] bg-white shadow-[0_5px_18px_rgba(101,19,209,0.22)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#7755FA]/30"
              />
            </Slider.Root>
            <div className="mt-1 flex justify-between text-xs font-bold text-black/58">
              <span>{formatMoney(AGENCY_CAMPAIGN_SPEND_MIN_USD)}</span>
              <span>{formatMoney(AGENCY_CAMPAIGN_SPEND_MAX_USD)}</span>
            </div>
          </div>

          <div className="mt-9 grid gap-5 border-t border-[#efefef] pt-7 sm:grid-cols-2">
            <div>
              <p className="text-sm font-bold text-[#0f0f0f]">
                Agency pricing
              </p>
              <p
                className="mt-2 text-sm font-medium leading-6 text-black/58"
                id="agency-pricing-formula"
              >
                {formatMoney(AGENCY_MONTHLY_MINIMUM_USD)} per month or{" "}
                {formatRate(AGENCY_SPEND_RATE)} of campaign spend, whichever is
                higher.
              </p>
            </div>
            <div>
              <p className="text-sm font-bold text-[#0f0f0f]">
                Minimum requirements
              </p>
              <p className="mt-2 text-sm font-medium leading-6 text-black/58">
                {formatMoney(AGENCY_CAMPAIGN_SPEND_MIN_USD)} monthly campaign
                spend and a {AGENCY_MINIMUM_COMMITMENT_MONTHS}-month program.
              </p>
            </div>
          </div>
        </div>

        <aside className="border-t border-[#e6e4ea] bg-[#faf8ff] p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.06em] text-[#6513D1]">
            Your estimate
          </p>
          <dl className="mt-6 space-y-5">
            <div className="flex items-start justify-between gap-6">
              <dt className="text-sm font-medium leading-6 text-black/58">
                Campaign spend
              </dt>
              <dd className="text-right text-base font-bold text-[#0f0f0f] tabular-nums">
                {formatMoney(estimate.campaignSpendMonthly)} / month
              </dd>
            </div>
            <div className="flex items-start justify-between gap-6">
              <dt className="text-sm font-medium leading-6 text-black/58">
                Agency fee
              </dt>
              <dd className="text-right text-base font-bold text-[#0f0f0f] tabular-nums">
                {formatMoney(estimate.agencyFeeMonthly)} / month
              </dd>
            </div>
            <div className="flex items-start justify-between gap-6">
              <dt className="text-sm font-medium leading-6 text-black/58">
                Initial setup
              </dt>
              <dd className="text-right text-base font-bold text-[#0f0f0f] tabular-nums">
                {formatMoney(estimate.setupFee)}
              </dd>
            </div>
          </dl>

          <div className="mt-7 border-t border-[#ded7ef] pt-7">
            <p className="text-sm font-bold text-black/58">
              Estimated {AGENCY_MINIMUM_COMMITMENT_MONTHS}-month program
            </p>
            <p className="mt-2 font-display text-[46px] font-black leading-none text-[#0f0f0f] tabular-nums sm:text-[54px]">
              {formatMoney(estimate.minimumProgramTotal)}
            </p>
            <p className="mt-3 text-sm font-medium leading-6 text-black/58">
              Includes campaign spend, agency fees and the one-time{" "}
              {formatMoney(AGENCY_SETUP_FEE_USD)} setup fee. Taxes are excluded.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
