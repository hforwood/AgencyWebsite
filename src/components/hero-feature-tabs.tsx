"use client";

import { useEffect, useRef, useState } from "react";
import type { AnimationItem } from "lottie-web";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const features = [
  {
    value: "b2b-influencers",
    label: "Discover B2B Influencers",
    animation: "/animations/b2b-influencers.json",
    aspectRatio: "1440 / 1440",
  },
  {
    value: "managing-partnerships",
    label: "Manage Partnerships",
    animation: "/animations/managing-partnerships.json",
    aspectRatio: "1440 / 1200",
  },
  {
    value: "workflows",
    label: "Workflows",
    animation: "/animations/workflows.json",
    aspectRatio: "1440 / 1140",
  },
  {
    value: "collaboration",
    label: "Collaborate",
    animation: "/animations/collaboration.json",
    aspectRatio: "1440 / 1300",
  },
  {
    value: "reporting",
    label: "Reporting",
    animation: "/animations/reporting.json",
    aspectRatio: "1440 / 1200",
  },
  {
    value: "social-data",
    label: "Social Data",
    animation: "/animations/social-data.json",
    aspectRatio: "1440 / 1100",
  },
];

function LottiePanel({
  aspectRatio,
  path,
}: {
  aspectRatio: string;
  path: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animation: AnimationItem | null = null;
    let cancelled = false;
    const controller = new AbortController();

    async function loadAnimation() {
      try {
        const [{ default: lottie }, response] = await Promise.all([
          import("lottie-web"),
          fetch(path, { signal: controller.signal }),
        ]);

        if (!response.ok) {
          throw new Error(`Unable to load animation: ${path}`);
        }

        const animationData = (await response.json()) as unknown;

        if (cancelled || !containerRef.current) {
          return;
        }

        containerRef.current.innerHTML = "";
        animation = lottie.loadAnimation({
          animationData,
          autoplay: true,
          container: containerRef.current,
          loop: true,
          renderer: "svg",
          rendererSettings: {
            preserveAspectRatio: "xMidYMin slice",
          },
        });
      } catch (error) {
        if (!cancelled && error instanceof Error && error.name !== "AbortError") {
          console.error(error.message);
        }
      }
    }

    void loadAnimation();

    return () => {
      cancelled = true;
      controller.abort();
      animation?.destroy();
    };
  }, [path]);

  return (
    <div
      ref={containerRef}
      className="mx-auto w-full overflow-hidden [&_svg]:h-full [&_svg]:w-full"
      style={{ aspectRatio }}
    />
  );
}

export function HeroFeatureTabs() {
  const [selected, setSelected] = useState(features[0].value);

  return (
    <Tabs className="w-full" onValueChange={setSelected} value={selected}>
      <TabsList className="mx-auto grid w-full max-w-[1360px] grid-cols-2 rounded-none border border-[#e6e4ea] bg-white p-0 text-flooencer-black md:grid-cols-3 lg:grid-cols-6">
        {features.map((feature) => (
          <TabsTrigger
            className={cn(
              "relative h-14 rounded-none border-r border-[#e6e4ea] px-3 text-center text-[12px] font-semibold text-[#343238] shadow-none last:border-r-0 hover:text-flooencer-purple sm:h-16 sm:text-[13px] lg:h-[68px] lg:text-sm",
              "data-[state=active]:bg-[#f7f5ff] data-[state=active]:text-[#7755FA] data-[state=active]:shadow-none",
              "after:absolute after:inset-x-0 after:bottom-0 after:h-[3px] after:bg-transparent data-[state=active]:after:bg-[#7755FA]",
            )}
            key={feature.value}
            value={feature.value}
          >
            {feature.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {features.map((feature) => (
        <TabsContent
          className="mt-5 border-0 outline-none focus-visible:outline-none sm:mt-6"
          key={feature.value}
          value={feature.value}
        >
          <div className="mx-auto w-full max-w-[1360px] overflow-hidden rounded-lg border border-[#e6e4ea] bg-white shadow-[0_2px_10px_rgba(15,15,15,0.08),0_20px_80px_rgba(15,15,15,0.08)] ring-4 ring-[#f5f6f8]">
            {selected === feature.value ? (
              <LottiePanel
                aspectRatio={feature.aspectRatio}
                path={feature.animation}
              />
            ) : null}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
