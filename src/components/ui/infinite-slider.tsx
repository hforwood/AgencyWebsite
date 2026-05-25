"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type InfiniteSliderProps = {
  children: ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [isReady, setIsReady] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const isHorizontal = direction === "horizontal";
  const gapValue = `${gap}px`;
  const sliderStyle = {
    "--slider-duration": `${duration}s`,
    "--slider-hover-duration": `${durationOnHover ?? duration}s`,
  } as CSSProperties;
  const groupStyle = {
    gap: gapValue,
    ...(isHorizontal ? { paddingRight: gapValue } : { paddingBottom: gapValue }),
  };

  useEffect(() => {
    const marquee = marqueeRef.current;

    if (!marquee) {
      return;
    }

    let isCancelled = false;
    const images = Array.from(marquee.querySelectorAll("img"));

    const imagePromises = images.map((image) => {
      if (image.complete && image.naturalWidth > 0) {
        return Promise.resolve();
      }

      if (typeof image.decode === "function") {
        return image.decode().catch(() => undefined);
      }

      return new Promise<void>((resolve) => {
        image.addEventListener("load", () => resolve(), { once: true });
        image.addEventListener("error", () => resolve(), { once: true });
      });
    });

    Promise.all(imagePromises).then(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!isCancelled) {
            setIsReady(true);
          }
        });
      });
    });

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div className={cn("overflow-hidden", className)} style={sliderStyle}>
      <div
        ref={marqueeRef}
        className={cn(
          "logo-marquee flex w-max opacity-0 transition-opacity duration-200 will-change-transform",
          isReady && "opacity-100",
          !isHorizontal && "h-max w-full flex-col"
        )}
        data-direction={direction}
        data-ready={isReady ? "true" : undefined}
        data-reverse={reverse ? "true" : undefined}
      >
        <div
          className={cn("flex flex-none", !isHorizontal && "flex-col")}
          style={groupStyle}
        >
          {children}
        </div>
        <div
          aria-hidden="true"
          className={cn("flex flex-none", !isHorizontal && "flex-col")}
          style={groupStyle}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
