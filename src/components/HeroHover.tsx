import { Hero, PrimaryAttr } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { AgiIcon, IntIcon, StrIcon } from "./Icons";

interface HeroInfoProps {
  heroInfos: Hero;
}

export const HeroHover = (props: HeroInfoProps) => {
  const { heroInfos } = props;
  const armor = (heroInfos.base_agi * 0.165 + heroInfos.base_armor).toFixed(1);
  const manaRegen = Math.trunc(heroInfos.base_int * 0.05 * Math.pow(10, 1)) / Math.pow(10, 1);

  const attrBonus = (props: number) => {
    return <span>+{props} Damage (Primary Attribute Bonus)</span>;
  };

  const damageCalc = () => {
    if (heroInfos.primary_attr === PrimaryAttr.Str) {
      return (
        <p>
          {heroInfos.base_attack_min + heroInfos.base_str} - {heroInfos.base_attack_max + heroInfos.base_str}
        </p>
      );
    } else if (heroInfos.primary_attr === PrimaryAttr.Agi) {
      return (
        <p>
          {heroInfos.base_attack_min + heroInfos.base_agi} - {heroInfos.base_attack_max + heroInfos.base_agi}
        </p>
      );
    } else if (heroInfos.primary_attr === PrimaryAttr.Int) {
      return (
        <p>
          {heroInfos.base_attack_min + heroInfos.base_int} - {heroInfos.base_attack_max + heroInfos.base_int}
        </p>
      );
    }
  };

  return (
    <Link
      href={`/${heroInfos.localized_name}`}
      className="relative"
    >
      <div
        className={twMerge(
          "max-h-max w-fit text-xs cursor-pointer",
          "absolute -left-20 -top-20",
          "border-2 rounded-lg bg-hgray",
          heroInfos.primary_attr === PrimaryAttr.Str && "border-str",
          heroInfos.primary_attr === PrimaryAttr.Agi && "border-agi",
          heroInfos.primary_attr === PrimaryAttr.Int && "border-int"
        )}
      >
        <div className="p-1">
          <Image
            alt={heroInfos.localized_name + " Icon"}
            src={"https://api.opendota.com" + heroInfos.img}
            width={274}
            height={144}
            className="w-full border-2 border-black rounded-lg shadow-lg"
            priority
          />
        </div>

        {/* ATTACK AND DEFENSE */}
        <div className="flex justify-around text-center m-1 gap-2">
          <div className="w-fit p-2 whitespace-nowrap bg-gradient-to-b from-transparent via-deg to-[#ABA5A5]">
            <h1 className="font-bold">ATTACK</h1>
            <div className="flex gap-1">
              <div className="text-left">
                <p>Damage:</p>
                <p>Attack Speed:</p>
                <p>Attack Range:</p>
              </div>
              <div className="flex flex-col">
                {damageCalc()}
                <p>
                  {heroInfos.base_attack_time + heroInfos.base_agi} ({heroInfos.attack_rate + "s"})
                </p>
                <p>{heroInfos.attack_range}</p>
              </div>
            </div>
          </div>

          <div className="w-36 p-2 whitespace-nowrap bg-gradient-to-b from-transparent via-deg to-[#ABA5A5]">
            <h1 className="font-bold">DEFENSE</h1>
            <div className="flex gap-1">
              <div className="text-left">
                <p>Armor:</p>
                <p>Magical Resist:</p>
                <p>Move Speed:</p>
              </div>
              <div className="flex flex-col">
                <p>{armor}</p>
                <p>{heroInfos.base_mr}%</p>
                <p>{heroInfos.move_speed}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ATTRIBUTES STATUS */}
        <div className="flex-row space-y-2">
          <div
            className={twMerge(
              "flex align-middle items-center gap-1 p-1",
              heroInfos.primary_attr === "str" && "bg-gradient-to-r from-black via-red-800"
            )}
          >
            <StrIcon width={30} height={30} fill="#B62B24" />
            <div className="flex flex-col text-slate-300">
              <span>
                <span className="text-white font-bold">{heroInfos.base_str}</span> (Gains {heroInfos.str_gain} per
                level)
              </span>
              {heroInfos.primary_attr === PrimaryAttr.Str && attrBonus(heroInfos.base_str)}
              <span>
                = {heroInfos.base_str * 20} HP and {heroInfos.base_str / 10} HP Regen
              </span>
            </div>
          </div>

          <div
            className={twMerge(
              "p-1 flex align-middle items-center gap-1",
              heroInfos.primary_attr === "agi" && "bg-gradient-to-r from-black via-green-800"
            )}
          >
            <AgiIcon width={30} height={30} fill="#5BEF36" />
            <div className="flex flex-col text-slate-300">
              <span>
                <span className="text-white font-bold">{heroInfos.base_agi}</span> (Gains {heroInfos.agi_gain} per
                level)
              </span>
              {heroInfos.primary_attr === PrimaryAttr.Agi && attrBonus(heroInfos.base_agi)}
              <span>
                = {(heroInfos.base_agi * 0.165).toFixed(1)} Armor and {heroInfos.base_agi} Attack Speed
              </span>
            </div>
          </div>

          <div
            className={twMerge(
              "p-1 flex align-middle items-center gap-1",
              "rounded-bl-md rounded-br-md",
              heroInfos.primary_attr === "int" && "bg-gradient-to-r from-black via-blue-800"
            )}
          >
            <IntIcon width={30} height={30} fill="#36ACEF" />
            <div className="flex flex-col text-slate-300">
              <span>
                <span className="text-white font-bold">{heroInfos.base_int}</span> (Gains {heroInfos.int_gain} per
                level)
              </span>
              {heroInfos.primary_attr === PrimaryAttr.Int && attrBonus(heroInfos.base_int)}
              <span>
                = {heroInfos.base_int * 12} Mana and {manaRegen} Mana Regen
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
