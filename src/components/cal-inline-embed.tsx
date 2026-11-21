"use client";

import { useEffect } from "react";

import { useAgencyEstimate } from "@/components/agency-estimate-context";

declare global {
  interface Window {
    Cal?: CalFunction & {
      loaded?: boolean;
      ns?: Record<string, CalFunction>;
      q?: unknown[][];
    };
  }
}

type CalFunction = {
  (...args: unknown[]): void;
  q?: unknown[][];
};

const CAL_NAMESPACE = "agency-call";
const CAL_SCRIPT_SRC = "https://app.cal.com/embed/embed.js";

export function CalInlineEmbed() {
  const { bookingCampaignSpend, bookingNotes, spendMode } =
    useAgencyEstimate();

  useEffect(() => {
    const initCal = () => {
      if (!window.Cal) {
        return;
      }

      window.Cal("init", CAL_NAMESPACE, { origin: "https://app.cal.com" });

      document
        .querySelector("#my-cal-inline-agency-call")
        ?.replaceChildren();

      window.Cal.ns?.[CAL_NAMESPACE]?.("inline", {
        elementOrSelector: "#my-cal-inline-agency-call",
        // CampaignSpend is the event's required booking question. Notes is
        // hidden on the event and is included in the host's booking email.
        config: {
          CampaignSpend: String(bookingCampaignSpend),
          layout: "month_view",
          notes: bookingNotes,
          utm_campaign: "agency_call",
          utm_content: spendMode,
          utm_medium: "website",
          utm_source: "agency_pricing_calculator",
          useSlotsViewOnSmallScreen: "true",
        },
        calLink: "hector-forwood-sd052r/agency-call",
      });

      window.Cal.ns?.[CAL_NAMESPACE]?.("ui", {
        cssVarsPerTheme: {
          light: {
            "cal-brand": "#7755FA",
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    };

    if (!window.Cal) {
      window.Cal = function calShim(...args: unknown[]) {
        const cal = window.Cal;

        if (!cal) {
          return;
        }

        cal.q = cal.q || [];

        if (!cal.loaded) {
          cal.ns = {};
          const script = document.createElement("script");
          script.src = CAL_SCRIPT_SRC;
          script.async = true;
          document.head.appendChild(script);
          cal.loaded = true;
        }

        if (args[0] === "init") {
          const namespace = args[1];
          if (typeof namespace === "string") {
            const api: CalFunction = (...apiArgs: unknown[]) => {
              api.q = api.q || [];
              api.q.push(apiArgs);
            };

            cal.ns = cal.ns || {};
            cal.ns[namespace] = cal.ns[namespace] || api;
            cal.ns[namespace]?.(...args);
            cal.q.push(["initNamespace", namespace]);
            return;
          }
        }

        cal.q.push(args);
      };
    }

    initCal();
  }, [bookingCampaignSpend, bookingNotes, spendMode]);

  return (
    <div
      id="my-cal-inline-agency-call"
      className="h-[580px] w-full overflow-auto rounded-lg border border-black/10 bg-white shadow-[0_24px_70px_rgba(40,7,82,0.16)] sm:h-[620px]"
    />
  );
}
