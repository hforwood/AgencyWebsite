"use client";

import { useEffect } from "react";

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
  useEffect(() => {
    const initCal = () => {
      if (!window.Cal) {
        return;
      }

      window.Cal("init", CAL_NAMESPACE, { origin: "https://app.cal.com" });

      window.Cal.ns?.[CAL_NAMESPACE]?.("inline", {
        elementOrSelector: "#my-cal-inline-agency-call",
        config: {
          layout: "month_view",
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
  }, []);

  return (
    <div
      id="my-cal-inline-agency-call"
      className="h-[580px] w-full overflow-auto rounded-lg border border-black/10 bg-white shadow-[0_24px_70px_rgba(40,7,82,0.16)] sm:h-[620px]"
    />
  );
}
