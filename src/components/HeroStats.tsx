import { Hero, PrimaryAttr } from "@/types";
import {
  AgiIcon,
  ArmorIcon,
  AttackRangeIcon,
  AttackTimeIcon,
  DamageIcon,
  IntIcon,
  MagicArmorIcon,
  RotateIcon,
  SpeedIcon,
  StrIcon,
  VisionIcon,
} from "@/components/Icons";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface HeroStatsInterface {
  hero: Hero;
}

export default function HeroStats(props: HeroStatsInterface) {
  const hero = props.hero;
  return (
    <div className="flex flex-col items-center gap-1 p-3 bg-gradient-to-tr from-[#21292b] to-[#252627]">
      <h1 className="font-bold">STATS</h1>
      <div className="flex flex-col lg:flex-row gap-7">
        <div>
          <h1 className="text-slate-500">Attributes</h1>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1 text-slate-300">
              <StrIcon width={30} height={30} fill="#B62B24" />
              <p>
                {hero.stat.strengthBase} +{hero.stat.strengthGain.toFixed(1)} per level
              </p>
            </div>
            <div className="flex items-center gap-1 text-slate-300">
              <AgiIcon width={30} height={30} fill="#5BEF36" />
              <p>
                {hero.stat.agilityBase} +{hero.stat.agilityGain.toFixed(1)} per level
              </p>
            </div>
            <div className="flex items-center gap-1 text-slate-300">
              <IntIcon width={30} height={30} fill="#36ACEF" />
              <p>
                {hero.stat.intelligenceBase} +{hero.stat.intelligenceGain.toFixed(1)} per level
              </p>
            </div>
            {hero.stat.AttributePrimary === PrimaryAttr.Uni && (
              <div className="flex items-center gap-1 text-slate-300">
                <Image
                  className="m-0"
                  alt={"Universal Image"}
                  src={"https://cdn.stratz.com/images/dota2/primary_attributes/all.png"}
                  width={30}
                  height={30}
                />
                <p>
                  {hero.stat.strengthBase + hero.stat.agilityBase + hero.stat.intelligenceBase} +
                  {(hero.stat.strengthGain + hero.stat.agilityGain + hero.stat.intelligenceGain).toFixed(1)} per level
                </p>
              </div>
            )}
          </div>
        </div>

        <div>
          <h1 className="text-slate-500">Attack</h1>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 items-center">
              <DamageIcon width={30} height={30} fill="#CBD7E1" />
              {hero.stat.AttributePrimary === PrimaryAttr.Uni ? (
                <p>
                  {(
                    hero.stat.startingDamageMin +
                    (hero.stat.strengthBase + hero.stat.agilityBase + hero.stat.intelligenceBase) * 0.7
                  ).toFixed(0)}
                  {" - "}
                  {(
                    hero.stat.startingDamageMax +
                    (hero.stat.strengthBase + hero.stat.agilityBase + hero.stat.intelligenceBase) * 0.7
                  ).toFixed(0)}
                  {" damage"}
                </p>
              ) : (
                <p>
                  {hero.stat.startingDamageMin} - {hero.stat.startingDamageMax} damage
                </p>
              )}
            </div>
            <div className="flex gap-1 items-center">
              <AttackTimeIcon width={30} height={30} fill="#CBD7E1" />
              {hero.stat.attackRate.toFixed(1) + "s Attack Speed"}
            </div>
            <div className="flex gap-1 items-center">
              <AttackRangeIcon width={30} height={30} fill="#CBD7E1" />
              {hero.stat.attackRange + " Attack Range"}
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-slate-500">Defense</h1>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 items-center">
              <ArmorIcon width={30} height={30} fill="#CBD7E1" />
              {hero.stat.startingArmor.toFixed(1)}
            </div>
            <div className="flex gap-1 items-center">
              <MagicArmorIcon width={30} height={30} fill="#CBD7E1" />
              {hero.stat.startingMagicArmor + "%"}
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-slate-500">Mobility</h1>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1 items-center">
              <SpeedIcon width={30} height={30} fill="#CBD7E1" />
              {hero.stat.moveSpeed}
            </div>
            <div className="flex gap-1 items-center">
              <RotateIcon width={30} height={30} fill="#CBD7E1" />
              {hero.stat.moveTurnRate.toFixed(1)}
            </div>
            <div className="flex gap-1 items-center">
              <VisionIcon width={30} height={30} fill="#CBD7E1" />
              {hero.stat.visionDaytimeRange} / {hero.stat.visionNighttimeRange}
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-slate-500">Health and Mana</h1>
          <div className="flex flex-col justify-between gap-2 w-full">
            <div
              className={twMerge(
                "flex gap-4 justify-evenly lg:justify-end items-center",
                "border border-none rounded-md",
                "bg-gradient-to-r from-green-800 via-green-800"
              )}
            >
              <p>{120 + 22 * hero.stat.strengthBase}</p>
              <p className="flex text-xs">+{(hero.stat.hpRegen + 0.1 * hero.stat.strengthBase).toFixed(1)}</p>
            </div>
            <div
              className={twMerge(
                "flex gap-4 justify-evenly lg:justify-end items-center",
                "border border-none rounded-md",
                "bg-gradient-to-r from-blue-800 via-blue-800"
              )}
            >
              <p>{75 + 12 * hero.stat.intelligenceBase}</p>
              <p className="flex text-xs">+{(hero.stat.mpRegen + 0.05 * hero.stat.intelligenceBase).toFixed(1)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
