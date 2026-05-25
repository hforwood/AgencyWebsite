import { cn } from "@/lib/utils";
import {
  FlooencerIcon,
  type FlooencerIconName,
} from "@/components/flooencer-icon";
import type { ComponentPropsWithoutRef } from "react";

type HowItWorksProps = ComponentPropsWithoutRef<"section">;

interface StepCardProps {
  body: string[];
  icon: FlooencerIconName;
  title: string;
}

const stepsData = [
  {
    milestone: "Today",
    icon: "person-magnifier",
    title: "Your Brand & Your Perfect Partners",
    body: [
      "Kick things off by connecting your LinkedIn page and brand profile.",
      "We instantly map your ICP, analyse your buyer personas, and match you with creators who already influence the people you care about. Your campaign workspace is set and ready to go.",
    ],
  },
  {
    milestone: "This Week",
    icon: "hand-ok",
    title: "Sign & Collaborate with Creators",
    body: [
      "Review your shortlist, meet your creators, and finalise partnerships.",
      "Approve proposals, align on messaging and deliverables, and lock in your campaign plan, all in one seamless workflow designed to avoid inbox chaos and spreadsheet misery.",
    ],
  },
  {
    milestone: "This Month",
    icon: "rocket",
    title: "Launch Your Campaign",
    body: [
      "Your creators go live with high-trust content designed to spark demand.",
      "Posts roll out across LinkedIn, tailored to your ICP. Real-time engagement signals start flowing into your dashboard so you can track reach, persona match, and early traction instantly.",
    ],
  },
  {
    milestone: "Celebrate",
    icon: "chart-line",
    title: "Sit Back And See The Results",
    body: [
      "Your campaign starts driving real awareness, conversations, and pipeline.",
      "Monitor performance, see which personas engage, and optimise your next creator partnerships. We stay close to ensure everything runs smoothly and scales effortlessly.",
    ],
  },
] satisfies Array<
  StepCardProps & {
    milestone: string;
  }
>;

function StepCard({ body, icon, title }: StepCardProps) {
  return (
    <article
      className={cn(
        "relative flex min-h-[290px] flex-col rounded-[18px] border border-[#e6e4ea] bg-white px-6 py-6 text-left",
        "shadow-[0_18px_45px_rgba(119,85,250,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(119,85,250,0.16)] sm:px-7 sm:py-7",
      )}
    >
      <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-[#f4efff] text-[#7755FA] ring-1 ring-[#7755FA]/15">
        <FlooencerIcon name={icon} className="size-8" />
      </div>
      <h3 className="max-w-[260px] font-display text-[25px] font-bold leading-[0.95] tracking-normal text-black sm:text-[28px]">
        {title}
      </h3>
      <div className="mt-7 space-y-5 text-base font-medium leading-[1.42] text-black/56">
        {body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}

export function HowItWorks({ className, ...props }: HowItWorksProps) {
  return (
    <section
      className={cn("w-full bg-white px-5 pb-20 pt-10 sm:px-8 lg:px-12", className)}
      id="how-it-works"
      {...props}
    >
      <div className="mx-auto w-full max-w-[1360px]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[42px] font-bold leading-none tracking-normal text-[#343238] sm:text-5xl lg:text-[56px]">
            Getting Started with Flooencer
          </h2>
          <p className="mt-4 text-lg font-medium leading-7 text-black/54 sm:text-xl">
            Activate your next B2B Creator partnership in these simple steps
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-[1120px]">
          <div className="absolute inset-x-[8%] bottom-[7px] hidden h-[5px] rounded-full bg-[#7755FA] sm:block" />
          <div className="grid gap-4 sm:grid-cols-4">
            {stepsData.map((step) => (
              <div
                className="relative flex justify-center sm:pb-5"
                key={step.milestone}
              >
                <span className="inline-flex min-w-24 items-center justify-center rounded-lg border border-[#7755FA] bg-white px-5 py-2 text-xs font-bold text-[#7755FA]">
                  {step.milestone}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stepsData.map((step) => (
            <StepCard
              body={step.body}
              icon={step.icon}
              key={step.title}
              title={step.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
