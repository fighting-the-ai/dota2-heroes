import Image from "next/image";
import { Hero, PrimaryAttr } from "@/types";
import { twMerge } from "tailwind-merge";
import { HeroHover } from "./HeroHover";
import { useState } from "react";

interface HeroCardProps {
  hero: Hero;
}

export const HeroCard = (props: HeroCardProps) => {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);
  const { hero } = props;

  return (
    <div
      key={hero.id}
      onMouseOver={() => setIsMouseOver(true)}
      onMouseOut={() => setIsMouseOver(false)}
    >
      {isMouseOver && <HeroHover heroHoverInfos={hero} />}
      <Image
        alt={hero.displayName + " Image"}
        src={"https://cdn.stratz.com/images/dota2/heroes/" + hero.shortName + "_vert.png"}
        width={142}
        height={188}
        className={twMerge(
          "w-inherit h-inherit border-2 object-cover rounded-lg",
          hero.stat.AttributePrimary === PrimaryAttr.Str && "border-str",
          hero.stat.AttributePrimary === PrimaryAttr.Agi && "border-agi",
          hero.stat.AttributePrimary === PrimaryAttr.Int && "border-int",
          hero.stat.AttributePrimary === PrimaryAttr.Uni && "border-uni"
        )}
        priority
      />
      <ul>
        <li>{hero.displayName}</li>
      </ul>
    </div>
  );
};
