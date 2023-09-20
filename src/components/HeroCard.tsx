import Image from "next/image";
import { Hero, PrimaryAttr } from "@/types";
import { twMerge } from "tailwind-merge";
import { HeroHover } from "./HeroHover";
import { useState } from "react";

interface HeroCardProps {
  hero: Hero;
}

export const HeroCard = (props: HeroCardProps) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const { hero } = props;

  return (
    <div
      key={hero.id}
      onMouseOver={() => setIsMouseOver(true)}
      onMouseOut={() => setIsMouseOver(false)}
    >
      {isMouseOver && <HeroHover heroInfos={hero} />}
      <Image
        alt={hero.localized_name + " Icon"}
        src={"https://api.opendota.com" + hero.img}
        width={256}
        height={144}
        className={twMerge(
          "w-40 h-28 border-2 object-cover rounded-lg",
          hero.primary_attr === PrimaryAttr.Str && "border-str",
          hero.primary_attr === PrimaryAttr.Agi && "border-agi",
          hero.primary_attr === PrimaryAttr.Int && "border-int",
          hero.primary_attr === PrimaryAttr.Uni && "border-l-str border-y-agi border-r-int"
        )}
        priority
      />
      <ul>
        <li>{hero.localized_name}</li>
      </ul>
    </div>
  );
};
