import Image from "next/image";

import { FlooencerIcon } from "@/components/flooencer-icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface ProcessItem {
  icon: string;
  title: string;
  description: string;
}

interface ProcessCardProps extends ProcessItem {
  index: number;
}

interface ProcessSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
  items: ProcessItem[];
  className?: string;
}

function ProcessCard({ icon, title, description, index }: ProcessCardProps) {
  return (
    <article className="group relative min-h-48 overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] p-5 text-white transition duration-300 hover:-translate-y-1 hover:border-flooencer-purple/60 hover:bg-white/[0.085] hover:shadow-[0_24px_80px_rgba(119,85,250,0.18)]">
      <div className="absolute right-5 top-5 font-display text-5xl font-black leading-none text-white/[0.035]">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between gap-8">
        <div className="flex size-14 items-center justify-center rounded-lg border border-white/10 bg-white text-flooencer-deep shadow-[0_16px_40px_rgba(119,85,250,0.16)] transition group-hover:border-flooencer-purple/40 group-hover:bg-flooencer-lavender">
          <Image
            src={icon}
            alt=""
            width={56}
            height={38}
            className="h-9 w-14 max-w-none object-contain"
          />
        </div>

        <div>
          <h3 className="font-display text-2xl font-bold leading-none tracking-normal">
            {title}
          </h3>
          <p className="mt-3 text-base leading-7 text-white/62">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

export function ProcessSection({
  eyebrow,
  title,
  description,
  buttonText,
  href,
  items,
  className,
}: ProcessSectionProps) {
  return (
    <section
      id="process"
      className={cn(
        "relative overflow-hidden bg-flooencer-black px-6 py-20 text-white sm:px-10 lg:px-16",
        className
      )}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="absolute left-1/2 top-16 h-72 w-[min(720px,80vw)] -translate-x-1/2 rounded-full bg-flooencer-purple/18 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-[1200px] gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
        <div className="flex flex-col items-start">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-flooencer-purple">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-display text-5xl font-black leading-[0.92] tracking-normal sm:text-6xl">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/68">
            {description}
          </p>
          <Button
            asChild
            className="mt-8 h-12 rounded-lg bg-[linear-gradient(135deg,#6513D1_0%,#7755FA_100%)] px-6 text-base font-bold text-white shadow-[0_20px_60px_rgba(101,19,209,0.34)] hover:brightness-110"
          >
            <a href={href}>
              {buttonText}
              <FlooencerIcon
                data-icon="inline-end"
                name="arrow-right"
                className="size-6"
              />
            </a>
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item, index) => (
            <ProcessCard
              key={`${item.title}-${index}`}
              index={index}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
