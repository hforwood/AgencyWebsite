export const AGENCY_SETUP_FEE_USD = 5000;
export const AGENCY_MONTHLY_MINIMUM_USD = 5000;
export const AGENCY_SPEND_RATE = 0.3;
export const AGENCY_MINIMUM_COMMITMENT_MONTHS = 3;

export const AGENCY_CAMPAIGN_SPEND_MIN_USD = 5000;
export const AGENCY_CAMPAIGN_SPEND_MAX_USD = 100_000;
export const AGENCY_CAMPAIGN_SPEND_STEP_USD = 1000;
export const AGENCY_DEFAULT_CAMPAIGN_SPEND_USD = 5000;

export function agencyMonthlyFee(monthlyCampaignSpend: number): number {
  return Math.max(
    AGENCY_MONTHLY_MINIMUM_USD,
    Math.round(monthlyCampaignSpend * AGENCY_SPEND_RATE),
  );
}

export interface AgencyCostEstimate {
  agencyFeeMonthly: number;
  campaignSpendMonthly: number;
  minimumProgramTotal: number;
  setupFee: number;
}

export function estimateAgencyCosts(
  monthlyCampaignSpend: number,
): AgencyCostEstimate {
  const agencyFeeMonthly = agencyMonthlyFee(monthlyCampaignSpend);
  const monthlyProgramCost = monthlyCampaignSpend + agencyFeeMonthly;

  return {
    agencyFeeMonthly,
    campaignSpendMonthly: monthlyCampaignSpend,
    minimumProgramTotal:
      monthlyProgramCost * AGENCY_MINIMUM_COMMITMENT_MONTHS +
      AGENCY_SETUP_FEE_USD,
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
