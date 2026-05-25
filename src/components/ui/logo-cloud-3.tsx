import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  duration?: number;
  gap?: number;
  logos: Logo[];
  reverse?: boolean;
};

export function LogoCloud({
  className,
  duration = 34,
  gap = 56,
  logos,
  reverse = true,
  ...props
}: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]",
        className
      )}
    >
      <InfiniteSlider gap={gap} reverse={reverse} duration={duration}>
        {logos.map((logo) => (
          <Image
            alt={logo.alt}
            className={cn(
              "pointer-events-none h-8 w-auto max-w-40 flex-none select-none object-contain opacity-70 grayscale transition-opacity md:h-9 md:max-w-48 dark:brightness-0 dark:invert",
              logo.className
            )}
            height={logo.height || 72}
            key={`logo-${logo.alt}`}
            loading="eager"
            src={logo.src}
            width={logo.width || 180}
          />
        ))}
      </InfiniteSlider>
    </div>
  );
}
