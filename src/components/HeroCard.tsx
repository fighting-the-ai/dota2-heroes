import Image from "next/image";
import { Hero } from "@/types";
import { twMerge } from "tailwind-merge";

interface HeroCardProps {
  hero: Hero;
}

export const HeroCard = (props: HeroCardProps) => {
  const { hero } = props
  return (
    <div key={hero.id}>
      <Image
        alt={hero.localized_name + " Icon"}
        src={"https://api.opendota.com" + hero.img}
        width={256}
        height={144}
        className={twMerge(
          "w-40 h-28 cursor-pointer border-2 object-cover rounded-lg",
          hero.primary_attr === "str" && "border-str",
          hero.primary_attr === "agi" && "border-agi",
          hero.primary_attr === "int" && "border-int"
        )}
        priority
      />
      <ul>
        <li>{hero.localized_name}</li>
      </ul>
    </div>
  );
};
