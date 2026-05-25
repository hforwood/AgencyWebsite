"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MeshGradient } from "@paper-design/shaders-react";
import { motion } from "framer-motion";
import Image from "next/image";

export interface CoreStat {
  value: string;
  label: string;
  description: string;
  image?: string;
  variant?: "shader";
}

interface CoreValueStatsProps {
  title?: string;
  description?: string;
  stats: CoreStat[];
  className?: string;
}

export default function CoreValueStats({
  title = "Scaling B2B Creator programs globally",
  description = "We run campaigns that drive real influence within Tech, AI & B2B SaaS",
  stats,
  className,
}: CoreValueStatsProps) {
  return (
    <section
      id="creator-program-stats"
      className={cn(
        "bg-flooencer-black px-6 py-20 text-center text-white sm:px-10 lg:px-16",
        className
      )}
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-4xl space-y-5">
          <h2 className="font-display text-5xl font-black leading-[0.92] tracking-normal sm:text-6xl">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
            {description}
          </p>
        </div>

        <div className="mt-12 grid gap-4 text-left md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, i) => {
            const hasImage = Boolean(item.image);
            const hasShader = item.variant === "shader";

            return (
              <motion.div
                key={`${item.value}-${item.label}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card
                  className={cn(
                    "relative h-full min-h-72 overflow-hidden rounded-lg border-white/10 bg-white text-flooencer-black shadow-none transition hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(119,85,250,0.2)]",
                    (hasImage || hasShader) &&
                      "border-white/20 bg-flooencer-deep text-white"
                  )}
                >
                  {hasShader ? (
                    <>
                      <MeshGradient
                        className="absolute inset-0 h-full w-full"
                        colors={[
                          "#0f0f0f",
                          "#280752",
                          "#6513D1",
                          "#7755FA",
                          "#CD9CEC",
                        ]}
                        speed={0.2}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,15,15,0.7)_0%,rgba(40,7,82,0.48)_55%,rgba(15,15,15,0.24)_100%)]" />
                    </>
                  ) : null}
                  {item.image ? (
                    <>
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        className="absolute inset-0 h-full w-full object-cover"
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-black/42" />
                    </>
                  ) : null}
                  <CardContent className="relative z-10 flex h-full min-h-72 flex-col justify-between p-6">
                    <div>
                      <h3 className="font-display text-6xl font-black leading-none tracking-normal">
                        {item.value}
                      </h3>
                      <p
                        className={cn(
                          "mt-4 font-display text-2xl font-bold leading-none tracking-normal",
                          hasImage || hasShader
                            ? "text-white"
                            : "text-flooencer-black"
                        )}
                      >
                        {item.label}
                      </p>
                    </div>
                    <p
                      className={cn(
                        "mt-8 text-base leading-7",
                        hasImage || hasShader ? "text-white/78" : "text-black/62"
                      )}
                    >
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
