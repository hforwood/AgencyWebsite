import { LogoCloud } from "@/components/ui/logo-cloud-3";
import { cn } from "@/lib/utils";

const customerLogos = [
  { src: "/customer-logos/hostinger-logo-purple.png", alt: "Hostinger" },
  { src: "/customer-logos/storyblok.svg", alt: "Storyblok" },
  { src: "/customer-logos/aws.svg", alt: "AWS" },
  { src: "/customer-logos/spiky.svg", alt: "Spiky" },
  { src: "/customer-logos/appsflyer.png", alt: "AppsFlyer" },
  { src: "/customer-logos/cognism-logo-2026.svg", alt: "Cognism" },
  { src: "/customer-logos/fiverr.png", alt: "Fiverr" },
  { src: "/customer-logos/kular.png", alt: "Kular" },
  {
    src: "/customer-logos/momentum.svg",
    alt: "Momentum",
    width: 343,
    height: 72,
  },
  { src: "/customer-logos/replicate-labs.svg", alt: "Replicate Labs" },
  {
    src: "/customer-logos/snowflake.svg",
    alt: "Snowflake",
    width: 305,
    height: 72,
  },
  {
    src: "/customer-logos/surfe.svg",
    alt: "Surfe",
    width: 115,
    height: 72,
  },
  { src: "/customer-logos/teramind.png", alt: "Teramind" },
  {
    src: "/customer-logos/aircall.webp",
    alt: "Aircall",
    className: "h-11 max-w-56 md:h-12 md:max-w-64",
  },
  { src: "/customer-logos/chattermill.png", alt: "Chattermill" },
  { src: "/customer-logos/1mindai.png", alt: "1Mind" },
];

type CustomerLogoCloudProps = {
  className?: string;
  duration?: number;
  gap?: number;
  headingClassName?: string;
  logoClassName?: string;
};

export function CustomerLogoCloud({
  className,
  duration,
  gap,
  headingClassName,
  logoClassName,
}: CustomerLogoCloudProps) {
  return (
    <section className={cn("w-full overflow-hidden", className)}>
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-10 lg:px-16">
        <h2
          className={cn(
            "text-center font-display text-3xl font-black leading-none tracking-normal sm:text-4xl",
            headingClassName
          )}
        >
          Trusted by Marketers, Used by Leaders
        </h2>
      </div>
      <LogoCloud
        className={cn("mt-6", logoClassName)}
        duration={duration}
        gap={gap}
        logos={customerLogos}
      />
    </section>
  );
}
