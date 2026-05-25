import type { CSSProperties, HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import arrowRight from "../../Icon Updated/icon/arrow-right.svg";
import bars from "../../Icon Updated/icon/bars.svg";
import bell from "../../Icon Updated/icon/bell.svg";
import calendar from "../../Icon Updated/icon/calendar.svg";
import chartBar from "../../Icon Updated/icon/chart-bar.svg";
import chartLine from "../../Icon Updated/icon/chart-line.svg";
import check from "../../Icon Updated/icon/check.svg";
import chevronDown from "../../Icon Updated/icon/chevron-down.svg";
import clock from "../../Icon Updated/icon/clock.svg";
import comments from "../../Icon Updated/icon/comments.svg";
import creditCard from "../../Icon Updated/icon/credit-card.svg";
import databases from "../../Icon Updated/icon/databases.svg";
import envelope from "../../Icon Updated/icon/envelope.svg";
import fileText from "../../Icon Updated/icon/file-text.svg";
import handOk from "../../Icon Updated/icon/hand-ok.svg";
import handPointRight from "../../Icon Updated/icon/hand-point-right.svg";
import layoutTabs from "../../Icon Updated/icon/layout-tabs.svg";
import linkedin from "../../Icon Updated/icon/linkedin.svg";
import link from "../../Icon Updated/icon/link.svg";
import listCheck from "../../Icon Updated/icon/list-check.svg";
import magnifier from "../../Icon Updated/icon/magnifier.svg";
import paperPlane from "../../Icon Updated/icon/paper-plane.svg";
import pencilToSquare from "../../Icon Updated/icon/pencil-to-square.svg";
import personMagnifier from "../../Icon Updated/icon/person-magnifier.svg";
import picture from "../../Icon Updated/icon/picture.svg";
import rocket from "../../Icon Updated/icon/rocket.svg";
import squareArticle from "../../Icon Updated/icon/square-article.svg";
import tagDollar from "../../Icon Updated/icon/tag-dollar.svg";
import video from "../../Icon Updated/icon/video.svg";
import xmark from "../../Icon Updated/icon/xmark.svg";

const icons = {
  "arrow-right": arrowRight,
  bars,
  bell,
  calendar,
  "chart-bar": chartBar,
  "chart-line": chartLine,
  check,
  "chevron-down": chevronDown,
  clock,
  comments,
  "credit-card": creditCard,
  databases,
  envelope,
  "file-text": fileText,
  "hand-ok": handOk,
  "hand-point-right": handPointRight,
  "layout-tabs": layoutTabs,
  linkedin,
  link,
  "list-check": listCheck,
  magnifier,
  "paper-plane": paperPlane,
  "pencil-to-square": pencilToSquare,
  "person-magnifier": personMagnifier,
  picture,
  rocket,
  "square-article": squareArticle,
  "tag-dollar": tagDollar,
  video,
  xmark,
};

export type FlooencerIconName = keyof typeof icons;

type IconAsset = string | { src: string };

interface FlooencerIconProps extends HTMLAttributes<HTMLSpanElement> {
  name: FlooencerIconName;
  title?: string;
}

function getIconUrl(asset: IconAsset) {
  return typeof asset === "string" ? asset : asset.src;
}

export function FlooencerIcon({
  className,
  name,
  style,
  title,
  ...props
}: FlooencerIconProps) {
  const iconUrl = getIconUrl(icons[name]);
  const maskStyle = {
    "--flooencer-icon-url": `url(${iconUrl})`,
    WebkitMask: "var(--flooencer-icon-url) center / contain no-repeat",
    mask: "var(--flooencer-icon-url) center / contain no-repeat",
    ...style,
  } as CSSProperties;

  return (
    <span
      aria-hidden={title ? undefined : true}
      aria-label={title}
      className={cn("inline-block size-6 shrink-0 bg-current", className)}
      role={title ? "img" : undefined}
      style={maskStyle}
      {...props}
    />
  );
}
