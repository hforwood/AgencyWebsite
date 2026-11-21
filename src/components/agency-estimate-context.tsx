"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  AGENCY_DEFAULT_CAMPAIGN_SPEND_USD,
  buildAgencyBookingNotes,
  estimateAgencyCosts,
  type AgencyCostEstimate,
  type AgencySpendMode,
} from "@/lib/agency-pricing";

type AgencyEstimateContextValue = {
  bookingCampaignSpend: number;
  bookingNotes: string;
  campaignSpend: number;
  commitCampaignSpend: (spend: number) => void;
  estimate: AgencyCostEstimate;
  selectSpendMode: (mode: AgencySpendMode) => void;
  setCampaignSpend: (spend: number) => void;
  spendMode: AgencySpendMode;
};

const AgencyEstimateContext =
  createContext<AgencyEstimateContextValue | null>(null);

export function AgencyEstimateProvider({ children }: { children: ReactNode }) {
  const [spendMode, setSpendMode] = useState<AgencySpendMode>("monthly");
  const [campaignSpend, setCampaignSpend] = useState(
    AGENCY_DEFAULT_CAMPAIGN_SPEND_USD.monthly,
  );
  const [bookingCampaignSpend, setBookingCampaignSpend] = useState(
    AGENCY_DEFAULT_CAMPAIGN_SPEND_USD.monthly,
  );

  const estimate = useMemo(
    () => estimateAgencyCosts(campaignSpend),
    [campaignSpend],
  );
  const bookingEstimate = useMemo(
    () => estimateAgencyCosts(bookingCampaignSpend),
    [bookingCampaignSpend],
  );
  const bookingNotes = useMemo(
    () => buildAgencyBookingNotes(spendMode, bookingEstimate),
    [bookingEstimate, spendMode],
  );

  const selectSpendMode = (mode: AgencySpendMode) => {
    const defaultSpend = AGENCY_DEFAULT_CAMPAIGN_SPEND_USD[mode];
    setSpendMode(mode);
    setCampaignSpend(defaultSpend);
    setBookingCampaignSpend(defaultSpend);
  };

  const commitCampaignSpend = (spend: number) => {
    setCampaignSpend(spend);
    setBookingCampaignSpend(spend);
  };

  return (
    <AgencyEstimateContext.Provider
      value={{
        bookingCampaignSpend,
        bookingNotes,
        campaignSpend,
        commitCampaignSpend,
        estimate,
        selectSpendMode,
        setCampaignSpend,
        spendMode,
      }}
    >
      {children}
    </AgencyEstimateContext.Provider>
  );
}

export function useAgencyEstimate() {
  const context = useContext(AgencyEstimateContext);

  if (!context) {
    throw new Error(
      "useAgencyEstimate must be used within AgencyEstimateProvider",
    );
  }

  return context;
}
