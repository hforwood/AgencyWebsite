"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useRef, type RefObject } from "react";

import {
  FlooencerIcon,
  type FlooencerIconName,
} from "@/components/flooencer-icon";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/lib/utils";

import linkedinColourIcon from "../../Icon Updated/icon/linkedin-colour.svg";
import flooencerMark from "../../Logos/Logo Purple.svg";

const personaPills = [
  {
    label: "B2B Influencer",
    className: "bg-[#f4efff] text-[#7755FA]",
  },
  {
    label: "Employee",
    className: "bg-[#e9f3ff] text-[#0A66C2]",
  },
  {
    label: "Organic",
    className: "bg-[#eaf8dd] text-[#4a9328]",
  },
  {
    label: "Customer",
    className: "bg-[#fff1d7] text-[#d87900]",
  },
  {
    label: "Competitor",
    className: "bg-[#ffe2e5] text-[#e94343]",
  },
];

const mediaNodes: Array<{
  icon: FlooencerIconName;
  label: string;
  position: string;
}> = [
  {
    icon: "picture",
    label: "Image",
    position: "top-[8%]",
  },
  {
    icon: "paper-plane",
    label: "Post",
    position: "top-[26%]",
  },
  {
    icon: "video",
    label: "Video",
    position: "top-[44%]",
  },
  {
    icon: "layout-tabs",
    label: "Carousel",
    position: "top-[62%]",
  },
  {
    icon: "square-article",
    label: "Article + Newsletter",
    position: "top-[80%]",
  },
];

const inboundRolePills = [
  {
    label: "Founder",
    left: ["23%", "36%", "49%"],
    top: ["15%", "22%", "43%"],
    delay: 0.2,
  },
  {
    label: "Marketing Director",
    left: ["23%", "35%", "49%"],
    top: ["33%", "35%", "47%"],
    delay: 0.55,
  },
  {
    label: "RevOps Lead",
    left: ["23%", "36%", "49%"],
    top: ["51%", "51%", "50%"],
    delay: 0.9,
  },
  {
    label: "VP Sales",
    left: ["23%", "35%", "49%"],
    top: ["69%", "64%", "54%"],
    delay: 1.25,
  },
  {
    label: "Demand Gen Lead",
    left: ["23%", "37%", "49%"],
    top: ["87%", "77%", "58%"],
    delay: 1.6,
  },
];

const rejectedRolePills = [
  { label: "SDR", delay: 0 },
  { label: "Analyst", delay: 4.4 },
  { label: "Intern", delay: 8.8 },
  { label: "Consultant", delay: 13.2 },
];

const approvedRolePills = [
  { label: "CMO", delay: 0.3 },
  { label: "CRO", delay: 5.5 },
  { label: "CEO", delay: 10.7 },
  { label: "Head of Revenue", delay: 15.9 },
];

function InboundRolePill({
  delay,
  label,
  left,
  top,
}: {
  delay: number;
  label: string;
  left: string[];
  top: string[];
}) {
  return (
    <motion.span
      animate={{
        left,
        opacity: [0, 1, 1, 0],
        top,
      }}
      className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e7ebf2] px-3 py-1.5 text-xs font-bold leading-none text-[#667085] shadow-sm"
      initial={{
        left: left[0],
        opacity: 0,
        top: top[0],
      }}
      transition={{
        delay,
        duration: 4.8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 0.4,
      }}
    >
      {label}
    </motion.span>
  );
}

function RejectedRolePill({ delay, label }: { delay: number; label: string }) {
  return (
    <motion.span
      animate={{
        opacity: [0, 1, 1, 0],
        top: ["61%", "64%", "66%", "68%"],
      }}
      className="pointer-events-none absolute left-[54%] top-[60%] z-20 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-[#ffd8d8] px-3 py-1.5 text-xs font-bold leading-none text-[#ef4444] shadow-sm"
      initial={{ opacity: 0, top: "61%" }}
      transition={{
        delay,
        duration: 3.6,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 14.4,
      }}
    >
      <FlooencerIcon name="xmark" className="size-6" />
      {label}
    </motion.span>
  );
}

function ApprovedRolePill({ delay, label }: { delay: number; label: string }) {
  return (
    <motion.span
      animate={{
        left: ["59%", "68%", "77%"],
        opacity: [0, 1, 1, 0],
      }}
      className="pointer-events-none absolute top-1/2 z-20 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full bg-[#d7f7cc] px-3 py-1.5 text-xs font-bold leading-none text-[#4a9328] shadow-sm"
      initial={{ left: "59%", opacity: 0 }}
      transition={{
        delay,
        duration: 4.2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 17,
      }}
    >
      <FlooencerIcon name="check" className="size-6" />
      {label}
    </motion.span>
  );
}

function MobileAcceptedPill() {
  return (
    <motion.span
      animate={{
        opacity: [0, 1, 1, 0],
        top: ["56%", "67%", "78%"],
      }}
      className="pointer-events-none absolute left-1/2 z-20 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full bg-[#d7f7cc] px-3 py-1.5 text-xs font-bold leading-none text-[#4a9328] shadow-sm"
      initial={{ opacity: 0, top: "56%" }}
      transition={{
        duration: 4.4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1.2,
      }}
    >
      <FlooencerIcon name="check" className="size-6" />
      CMO
    </motion.span>
  );
}

function MobileRejectedPill() {
  return (
    <motion.span
      animate={{
        opacity: [0, 1, 1, 0],
        top: ["48%", "56%", "64%"],
      }}
      className="pointer-events-none absolute left-[63%] z-20 inline-flex -translate-y-1/2 items-center gap-1.5 rounded-full bg-[#ffd8d8] px-3 py-1.5 text-xs font-bold leading-none text-[#ef4444] shadow-sm"
      initial={{ opacity: 0, top: "48%" }}
      transition={{
        delay: 1.1,
        duration: 4.2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 1.4,
      }}
    >
      <FlooencerIcon name="xmark" className="size-6" />
      Intern
    </motion.span>
  );
}

function MediaNode({
  icon,
  label,
  nodeRef,
  className,
}: {
  className?: string;
  icon: FlooencerIconName;
  label: string;
  nodeRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      className={cn(
        "absolute z-10 flex min-h-14 w-[146px] items-center gap-2 rounded-2xl border border-[#e6e4ea] bg-white p-2 shadow-[0_16px_40px_rgba(15,15,15,0.08)] sm:w-[178px]",
        className,
      )}
      ref={nodeRef}
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-[#0A66C2]/10">
        <Image
          alt=""
          aria-hidden="true"
          className="h-auto w-7"
          src={linkedinColourIcon}
        />
      </span>
      <span className="inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-full bg-[#f4efff] px-2 py-1 text-center text-[10px] font-bold leading-tight text-[#7755FA] sm:text-xs">
        <FlooencerIcon name={icon} className="size-6 shrink-0" />
        <span>{label}</span>
      </span>
    </div>
  );
}

export function SocialDataCaptureSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const postRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const articleNewsletterRef = useRef<HTMLDivElement>(null);
  const flooencerRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const mobileLinkedinRef = useRef<HTMLDivElement>(null);
  const mobileFlooencerRef = useRef<HTMLDivElement>(null);
  const mobileBrandRef = useRef<HTMLDivElement>(null);
  const sourceRefs = [
    imageRef,
    postRef,
    videoRef,
    carouselRef,
    articleNewsletterRef,
  ];

  return (
    <section className="w-full bg-white px-5 pb-8 pt-8 sm:px-8 lg:px-12 lg:pb-10 lg:pt-10">
      <div className="mx-auto w-full max-w-[1360px]">
        <div className="mx-auto max-w-[780px] text-center">
          <h2 className="font-display text-[44px] font-bold leading-none tracking-normal text-[#343238] sm:text-5xl lg:text-[60px]">
            Your social data, captured.
          </h2>
          <p className="mx-auto mt-5 max-w-[680px] text-lg font-medium leading-8 text-black/58 sm:text-xl">
            Flooencer captures your social interactions, filters to just your
            ICP and provides you with Social Qualified Leads.
          </p>
          <div className="mx-auto mt-6 flex max-w-[680px] flex-wrap justify-center gap-2.5">
            {personaPills.map((pill) => (
              <span
                className={cn(
                  "inline-flex w-fit items-center rounded-full px-3 py-1.5 text-sm font-bold leading-none",
                  pill.className,
                )}
                key={pill.label}
              >
                {pill.label}
              </span>
            ))}
          </div>
        </div>

        <div
          className="relative mx-auto mt-10 hidden min-h-[560px] w-full max-w-[980px] overflow-hidden rounded-[22px] border border-[#e6e4ea] bg-white shadow-[0_2px_10px_rgba(15,15,15,0.08),0_24px_80px_rgba(119,85,250,0.13)] ring-4 ring-[#f5f6f8] sm:block"
          ref={containerRef}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0eef5_1px,transparent_1px),linear-gradient(to_bottom,#f0eef5_1px,transparent_1px)] bg-[size:44px_44px] opacity-35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_50%,rgba(119,85,250,0.13),transparent_38%)]" />

          {mediaNodes.map((node, index) => (
            <MediaNode
              className={cn("left-4 sm:left-8", node.position)}
              icon={node.icon}
              key={node.label}
              label={node.label}
              nodeRef={sourceRefs[index]}
            />
          ))}

          {inboundRolePills.map((pill) => (
            <InboundRolePill
              delay={pill.delay}
              key={pill.label}
              label={pill.label}
              left={pill.left}
              top={pill.top}
            />
          ))}

          <div
            className="absolute left-[54%] top-1/2 z-10 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[24px] border border-[#7755FA]/20 bg-white shadow-[0_18px_60px_rgba(119,85,250,0.22)] sm:size-28 sm:rounded-[28px]"
            ref={flooencerRef}
          >
            <Image
              alt="Flooencer"
              className="h-auto w-12 sm:w-16"
              src={flooencerMark}
            />
          </div>

          <div
            className="absolute right-3 top-1/2 z-10 flex min-h-20 w-[104px] -translate-y-1/2 items-center justify-center rounded-2xl border border-[#e6e4ea] bg-white px-3 text-center font-display text-[18px] font-bold leading-none text-[#343238] shadow-[0_16px_40px_rgba(15,15,15,0.08)] sm:right-8 sm:w-[148px] sm:px-4 sm:text-[26px]"
            ref={brandRef}
          >
            Your Brand
          </div>

          {rejectedRolePills.map((pill) => (
            <RejectedRolePill
              delay={pill.delay}
              key={pill.label}
              label={pill.label}
            />
          ))}

          {approvedRolePills.map((pill) => (
            <ApprovedRolePill
              delay={pill.delay}
              key={pill.label}
              label={pill.label}
            />
          ))}

          {mediaNodes.map((node, index) => (
            <AnimatedBeam
              containerRef={containerRef}
              curvature={index === 2 ? 0 : index < 2 ? 48 : -48}
              delay={index * 0.35}
              duration={4.8}
              fromRef={sourceRefs[index]}
              gradientStartColor="#C9B8FF"
              gradientStopColor="#7755FA"
              key={`${node.label}-beam`}
              pathColor="#7755FA"
              pathOpacity={0.12}
              pathWidth={2.5}
              toRef={flooencerRef}
            />
          ))}
          <AnimatedBeam
            containerRef={containerRef}
            curvature={0}
            delay={0.6}
            duration={4.8}
            fromRef={flooencerRef}
            gradientStartColor="#7755FA"
            gradientStopColor="#2C0456"
            pathColor="#7755FA"
            pathOpacity={0.16}
            pathWidth={3}
            toRef={brandRef}
          />
        </div>

        <div
          className="relative mx-auto mt-8 min-h-[520px] w-full overflow-hidden rounded-[22px] border border-[#e6e4ea] bg-white shadow-[0_2px_10px_rgba(15,15,15,0.08),0_24px_80px_rgba(119,85,250,0.13)] ring-4 ring-[#f5f6f8] sm:hidden"
          ref={mobileContainerRef}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0eef5_1px,transparent_1px),linear-gradient(to_bottom,#f0eef5_1px,transparent_1px)] bg-[size:44px_44px] opacity-35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(119,85,250,0.16),transparent_44%)]" />

          <div
            className="absolute left-1/2 top-10 z-10 flex size-16 -translate-x-1/2 items-center justify-center rounded-2xl bg-white shadow-[0_16px_40px_rgba(10,102,194,0.18)] ring-1 ring-[#0A66C2]/10"
            ref={mobileLinkedinRef}
          >
            <Image
              alt="LinkedIn"
              className="h-auto w-11"
              src={linkedinColourIcon}
            />
          </div>

          <div
            className="absolute left-1/2 top-1/2 z-10 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[24px] border border-[#7755FA]/20 bg-white shadow-[0_18px_60px_rgba(119,85,250,0.22)]"
            ref={mobileFlooencerRef}
          >
            <Image
              alt="Flooencer"
              className="h-auto w-12"
              src={flooencerMark}
            />
          </div>

          <div
            className="absolute bottom-10 left-1/2 z-10 flex min-h-20 w-[128px] -translate-x-1/2 items-center justify-center rounded-2xl border border-[#e6e4ea] bg-white px-4 text-center font-display text-[20px] font-bold leading-none text-[#343238] shadow-[0_16px_40px_rgba(15,15,15,0.08)]"
            ref={mobileBrandRef}
          >
            Your Brand
          </div>

          <MobileAcceptedPill />
          <MobileRejectedPill />

          <AnimatedBeam
            containerRef={mobileContainerRef}
            duration={4.2}
            fromRef={mobileLinkedinRef}
            gradientDirection="vertical"
            gradientStartColor="#C9B8FF"
            gradientStopColor="#7755FA"
            pathColor="#7755FA"
            pathOpacity={0.14}
            pathWidth={2.5}
            toRef={mobileFlooencerRef}
          />
          <AnimatedBeam
            containerRef={mobileContainerRef}
            delay={0.6}
            duration={4.2}
            fromRef={mobileFlooencerRef}
            gradientDirection="vertical"
            gradientStartColor="#7755FA"
            gradientStopColor="#2C0456"
            pathColor="#7755FA"
            pathOpacity={0.16}
            pathWidth={3}
            toRef={mobileBrandRef}
          />
        </div>
      </div>
    </section>
  );
}
