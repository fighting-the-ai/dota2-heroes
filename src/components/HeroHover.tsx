import { Hero, PrimaryAttr } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { AgiIcon, IntIcon, StrIcon } from "./Icons";

interface HeroInfoProps {
  heroHoverInfos: Hero;
}

export const HeroHover = (props: HeroInfoProps) => {
  const { heroHoverInfos } = props;
  const uniAttrValue =
    heroHoverInfos.stat.strengthBase + heroHoverInfos.stat.agilityBase + heroHoverInfos.stat.intelligenceBase;
  const uniAttGain =
    heroHoverInfos.stat.strengthGain + heroHoverInfos.stat.agilityGain + heroHoverInfos.stat.intelligenceGain;

  const attrDamageBonus = (props: number) => {
    return <span>+{props.toFixed(0)} Damage (Primary Attribute Bonus)</span>;
  };

  const damageCalc = () => {
    return heroHoverInfos.stat.AttributePrimary === PrimaryAttr.Uni ? (
      <p>
        {(heroHoverInfos.stat.startingDamageMin + uniAttrValue * 0.7).toFixed(0)}
        {" - "}
        {(heroHoverInfos.stat.startingDamageMax + uniAttrValue * 0.7).toFixed(0)}
      </p>
    ) : (
      <p>
        {heroHoverInfos.stat.startingDamageMin} - {heroHoverInfos.stat.startingDamageMax}
      </p>
    );
  };

  return (
    <Link href={`/${heroHoverInfos.displayName}`} className="relative">
      <div
        className={twMerge(
          "max-h-max w-fit text-xs cursor-pointer",
          "absolute -left-20 -top-20",
          "border-2 rounded-lg bg-hgray",
          heroHoverInfos.stat.AttributePrimary === PrimaryAttr.Str && "border-str",
          heroHoverInfos.stat.AttributePrimary === PrimaryAttr.Agi && "border-agi",
          heroHoverInfos.stat.AttributePrimary === PrimaryAttr.Int && "border-int",
          heroHoverInfos.stat.AttributePrimary === PrimaryAttr.Uni && "border-uni"
        )}
      >
        <div className="p-1">
          <Image
            alt={heroHoverInfos.displayName + " Image"}
            src={"https://cdn.stratz.com/images/dota2/heroes/" + heroHoverInfos.shortName + "_horz.png"}
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
                <p>{heroHoverInfos.stat.attackRate.toFixed(1) + "s"}</p>
                <p>{heroHoverInfos.stat.attackRange}</p>
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
                <p>{heroHoverInfos.stat.startingArmor.toFixed(1)}</p>
                <p>{heroHoverInfos.stat.startingMagicArmor}%</p>
                <p>{heroHoverInfos.stat.moveSpeed}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ATTRIBUTES STATUS */}
        <div className="flex-row space-y-2">
          <div
            className={twMerge(
              "flex align-middle items-center gap-1 p-1",
              heroHoverInfos.stat.AttributePrimary === PrimaryAttr.Str && "bg-gradient-to-r from-black via-red-800"
            )}
          >
            <StrIcon width={30} height={30} fill="#B62B24" />
            <div className="flex flex-col text-slate-300">
              <span>
                <span className="text-white font-bold">{heroHoverInfos.stat.strengthBase}</span> (Gains{" "}
                {heroHoverInfos.stat.strengthGain.toFixed(1)} per level)
              </span>
              {heroHoverInfos.stat.AttributePrimary === PrimaryAttr.Str &&
                attrDamageBonus(heroHoverInfos.stat.strengthBase)}
              <span>
                = {120 + 22 * heroHoverInfos.stat.strengthBase} HP and{" "}
                {(0.1 * heroHoverInfos.stat.strengthBase).toFixed(1)} HP Regen
              </span>
            </div>
          </div>

          <div
            className={twMerge(
              "p-1 flex align-middle items-center gap-1",
              heroHoverInfos.stat.AttributePrimary === PrimaryAttr.Agi && "bg-gradient-to-r from-black via-green-800"
            )}
          >
            <AgiIcon width={30} height={30} fill="#5BEF36" />
            <div className="flex flex-col text-slate-300">
              <span>
                <span className="text-white font-bold">{heroHoverInfos.stat.agilityBase}</span> (Gains{" "}
                {heroHoverInfos.stat.agilityGain.toFixed(1)} per level)
              </span>
              {heroHoverInfos.stat.AttributePrimary === PrimaryAttr.Agi &&
                attrDamageBonus(heroHoverInfos.stat.agilityBase)}
              <span>
                = +{(heroHoverInfos.stat.agilityBase * 0.165).toFixed(1)} Armor and {heroHoverInfos.stat.agilityBase}{" "}
                Attack Speed
              </span>
            </div>
          </div>

          <div
            className={twMerge(
              "p-1 flex align-middle items-center gap-1",
              "rounded-bl-md rounded-br-md",
              heroHoverInfos.stat.AttributePrimary === PrimaryAttr.Int && "bg-gradient-to-r from-black via-blue-800"
            )}
          >
            <IntIcon width={30} height={30} fill="#36ACEF" />
            <div className="flex flex-col text-slate-300">
              <span>
                <span className="text-white font-bold">{heroHoverInfos.stat.intelligenceBase}</span> (Gains{" "}
                {heroHoverInfos.stat.intelligenceGain.toFixed(1)} per level)
              </span>
              {heroHoverInfos.stat.AttributePrimary === PrimaryAttr.Int &&
                attrDamageBonus(heroHoverInfos.stat.intelligenceBase)}
              <span>
                = {75 + 12 * heroHoverInfos.stat.intelligenceBase} Mana and{" "}
                {(heroHoverInfos.stat.mpRegen + 0.05 * heroHoverInfos.stat.intelligenceBase).toFixed(1)} Mana Regen
              </span>
            </div>
          </div>

          {heroHoverInfos.stat.AttributePrimary === PrimaryAttr.Uni && (
            <div
              className={twMerge(
                "p-1 flex align-middle items-center gap-1",
                "rounded-bl-md rounded-br-md",
                "bg-gradient-to-r from-black via-yellow-600"
              )}
            >
              <Image
                className="m-0"
                alt={"Universal Image"}
                src={"https://cdn.stratz.com/images/dota2/primary_attributes/all.png"}
                width={30}
                height={30}
              />
              <div className="flex flex-col text-slate-300">
                <span className="text-white font-bold">
                  {uniAttrValue.toFixed(0)} (Gains {uniAttGain.toFixed(1)} per level)
                </span>
                <span>{attrDamageBonus(uniAttrValue * 0.7)}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
