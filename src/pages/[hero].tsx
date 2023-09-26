import { Header } from "@/components/Header";
import HeroRoles from "@/components/HeroRoles";
import {
  AgiIcon,
  ArmorIcon,
  AttackRangeIcon,
  AttackTimeIcon,
  DamageIcon,
  IntIcon,
  LoadingIcon,
  MagicArmorIcon,
  RotateIcon,
  SpeedIcon,
  StrIcon,
  VisionIcon,
} from "@/components/Icons";
import { useHeroes } from "@/context/HeroContext";
import { CheckData, PrimaryAttr } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function HeroPage() {
  const { heroes } = useHeroes();
  const { query } = useRouter();
  const hero = heroes && Object.values(heroes).find((value) => value.displayName === query.hero);
  const [checkData, setCheckData] = useState<number>(0);

  useEffect(() => {
    if (hero === null) {
      setCheckData(CheckData.null);
    } else if (hero === undefined) {
      setCheckData(CheckData.undefined);
    } else {
      setCheckData(CheckData.readed);
    }
  }, [hero]);

  if (checkData === CheckData.null) {
    return (
      <div
        className={twMerge(
          "font-inter text-white gap-2 text-3xl ",
          "min-h-screen flex items-center justify-center",
          "bg-gradient-to-tr from-black via-deg to-black"
        )}
      >
        <LoadingIcon
          className="w-16 h-16 text-gray-200 animate-spin dark:text-white fill-red-600"
          fill="none"
          stroke="none"
        />
        <h1>Loading hero...</h1>
      </div>
    );
  } else if (checkData === CheckData.undefined) {
    return (
      <div
        className={twMerge(
          "font-inter text-white",
          "min-h-screen flex flex-col items-center justify-center",
          "bg-gradient-to-tr from-black via-deg to-black"
        )}
      >
        <h1 className="text-9xl font-extrabold text-white tracking-widest select-none">404</h1>
        <div className="bg-str px-2 text-sm rounded rotate-12 absolute select-none">Page Not Found</div>
        <Link
          href="/"
          className={twMerge(
            "w-36 h-8 p-4 text-2xl",
            "cursor-pointer select-none",
            "flex items-center justify-center",
            "border border-solid rounded-tr-lg rounded-bl-lg rounded-tl-2xl rounded-br-2xl",
            "hover:shadow-md hover:scale-110 transition ease-in-out delay-50",
            "active:scale-95 bg-str border-str font-extrabold  text-white hover:shadow-white"
          )}
        >
          <h1 className="text-center">Go Home</h1>
        </Link>
      </div>
    );
  } else if (hero && checkData === CheckData.readed) {
    return (
      <div
        className={twMerge(
          "font-inter text-white gap-2",
          "min-h-screen flex flex-col items-center",
          "bg-gradient-to-tr from-black via-deg to-black"
        )}
      >
        <Header />
        <h1 className="font-bold">ABOUT {hero.displayName.toUpperCase()}</h1>
        <div className="flex flex-col lg:flex-row gap-10 p-5">
          <div className="flex flex-col text-justify gap-3">
            <div dangerouslySetInnerHTML={{ __html: hero.language.hype }} />
            <div dangerouslySetInnerHTML={{ __html: hero.language.bio }} />
          </div>
          <div className="flex flex-col gap-3 min-w-fit w-full text-center items-center">
            <h1> In-game Hero Image </h1>
            <Image
              className="border-2 min-w-fit border-black rounded-lg shadow-lg"
              alt={hero.displayName + " Image"}
              src={"https://cdn.stratz.com/images/dota2/heroes/" + hero.shortName + "_horz.png"}
              width={274}
              height={144}
              priority
            />
            <h1> In-game Hero Icon</h1>
            <Image
              className="w-10"
              alt={hero.displayName + " Icon"}
              src={"https://cdn.stratz.com/images/dota2/heroes/" + hero.shortName + "_icon.png"}
              width={274}
              height={144}
              priority
            />
          </div>
        </div>
        <div className="flex flex-col w-full gap-2">
          <HeroRoles roles={hero.roles} />
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
                        {(hero.stat.strengthGain + hero.stat.agilityGain + hero.stat.intelligenceGain).toFixed(1)} per
                        level
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
                    <p className="flex text-xs">
                      +{(hero.stat.mpRegen + 0.05 * hero.stat.intelligenceBase).toFixed(1)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
