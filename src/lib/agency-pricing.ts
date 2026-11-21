export type AgencySpendMode = "monthly" | "one_off";

export const AGENCY_SETUP_FEE_USD = 7500;
export const AGENCY_MONTHLY_MINIMUM_USD = 7500;
export const AGENCY_SPEND_RATE = 0.3;

export const AGENCY_CAMPAIGN_SPEND_MIN_USD = 0;
export const AGENCY_CAMPAIGN_SPEND_MAX_USD = 100_000;
export const AGENCY_CAMPAIGN_SPEND_STEP_USD = 1000;
export const AGENCY_DEFAULT_CAMPAIGN_SPEND_USD: Record<
  AgencySpendMode,
  number
> = {
  monthly: 4000,
  one_off: 10_000,
};

export function agencyFeeForSpend(campaignSpend: number): number {
  return Math.max(
    AGENCY_MONTHLY_MINIMUM_USD,
    Math.round(campaignSpend * AGENCY_SPEND_RATE),
  );
}

export interface AgencyCostEstimate {
  agencyFee: number;
  campaignSpend: number;
  initialAgencyCost: number;
  setupFee: number;
}

export function estimateAgencyCosts(campaignSpend: number): AgencyCostEstimate {
  const agencyFee = agencyFeeForSpend(campaignSpend);

  return {
    agencyFee,
    campaignSpend,
    initialAgencyCost: agencyFee + AGENCY_SETUP_FEE_USD,
    setupFee: AGENCY_SETUP_FEE_USD,
  };
}

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function formatMoney(amount: number): string {
  return usd.format(amount);
}

export function formatRate(rate: number): string {
  return `${Math.round(rate * 100)}%`;
}

export function buildAgencyBookingNotes(
  mode: AgencySpendMode,
  estimate: AgencyCostEstimate,
): string {
  const isMonthly = mode === "monthly";
  const spendSuffix = isMonthly ? " per month" : " one-off";
  const feeSuffix = isMonthly ? " per month" : " for the campaign";
  const estimateLabel = isMonthly
    ? "First-month agency cost"
    : "Agency cost";

  return [
    "Flooencer Agency calculator estimate",
    `Spend type: ${isMonthly ? "Monthly" : "One-off"}`,
    `Campaign spend: ${formatMoney(estimate.campaignSpend)}${spendSuffix}`,
    `Agency fee: ${formatMoney(estimate.agencyFee)}${feeSuffix}`,
    `Initial setup: ${formatMoney(estimate.setupFee)}`,
    `${estimateLabel}: ${formatMoney(estimate.initialAgencyCost)}`,
    "Campaign spend is paid separately.",
  ].join("\n");
}
