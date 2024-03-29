import { useState } from "react";
import Head from "next/head";
import { AttackType, PrimaryAttr } from "@/types";
import { twMerge } from "tailwind-merge";
import { AgiIcon, IntIcon, StrIcon, MeleeIcon, RangedIcon, ErrorIcon, LoadingIcon } from "@/components/Icons";
import { Button } from "@/components/Button";
import { HeroCard } from "@/components/HeroCard";
import { Header } from "@/components/Header";
import { useHeroes } from "@/context/HeroContext";
import Image from "next/image";

export default function Home() {
  const [primaryAttr, setPrimaryAttr] = useState<PrimaryAttr | null>(null);
  const [attackType, setAttackType] = useState<AttackType | null>(null);
  const [heroName, setHeroName] = useState<string>("");

  function handleAttackType(newAttackType: AttackType) {
    setAttackType((attackType) => (attackType === newAttackType ? null : newAttackType));
  }

  function handleAttr(newAttr: PrimaryAttr) {
    setPrimaryAttr((primaryAttr) => (primaryAttr === newAttr ? null : newAttr));
  }

  const { heroes } = useHeroes();

  const searchHeroes =
    heroes &&
    Object.values(heroes)
      .filter((hero) => {
        return hero.abilities;
      })
      .filter((hero) => {
        return (
          // filtro:
          // Se o 1º for true, ele pula pra segunda condição.
          // Se possuir um valor(false), ele filtra baseado na condição imposta e passa o valor.
          // A mesma regra repete-se para as duas linhas.
          (!attackType || hero.stat.attackType === attackType) &&
          (!primaryAttr || hero.stat.AttributePrimary === primaryAttr) &&
          (!heroName ||
            hero.displayName.toLocaleLowerCase().indexOf(heroName.toLocaleLowerCase()) >= 0 ||
            hero.shortName.toLocaleLowerCase().indexOf(heroName.toLocaleLowerCase()) >= 0)
        );
      });

  return (
    <>
      <Head>
        <title>Dota 2 App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={twMerge(
          "font-inter",
          "flex flex-col justify-center items-center w-full",
          "bg-gradient-to-tr from-black via-deg to-black"
        )}
      >
        <Header
          indexResult={searchHeroes?.length === 0 ? true : false}
          onChange={(value) => {
            setHeroName(value);
          }}
        />
        {/* MAIN PAGE */}
        <div className="min-h-screen">
          {/* ATTRIBUTE FILTERS */}
          <div className="flex flex-col justify-center items-center m-10 gap-4">
            <div className="flex gap-6">
              <Button
                className={twMerge(
                  "border-str font-extrabold  text-str hover:shadow-str",
                  primaryAttr === PrimaryAttr.Str && "bg-str text-black hover:shadow-red-500"
                )}
                onClick={() => {
                  handleAttr(PrimaryAttr.Str);
                }}
                icon={PrimaryAttr.Str}
              >
                <StrIcon width={18} height={18} fill={primaryAttr === PrimaryAttr.Str ? "black" : "#B62B24"} />
                STRENGTH
              </Button>
              <Button
                className={twMerge(
                  "border-agi font-extrabold  text-agi hover:shadow-agi",
                  primaryAttr === PrimaryAttr.Agi && "bg-agi text-black hover:shadow-green-500"
                )}
                onClick={() => {
                  handleAttr(PrimaryAttr.Agi);
                }}
                icon={PrimaryAttr.Agi}
              >
                <AgiIcon width={18} height={18} fill={primaryAttr === PrimaryAttr.Agi ? "black" : "#5BEF36"} />
                AGILITY
              </Button>
              <Button
                className={twMerge(
                  "border-int font-extrabold  text-int hover:shadow-int",
                  primaryAttr === PrimaryAttr.Int && "bg-int text-black hover:shadow-blue-300"
                )}
                onClick={() => {
                  handleAttr(PrimaryAttr.Int);
                }}
                icon={PrimaryAttr.Int}
              >
                <IntIcon width={18} height={18} fill={primaryAttr === PrimaryAttr.Int ? "black" : "#36ACEF"} />
                INTELLIGENCE
              </Button>
              <Button
                className={twMerge(
                  "border-uni font-extrabold  text-uni hover:shadow-uni",
                  primaryAttr === PrimaryAttr.Uni && "bg-uni text-black hover:shadow-yellow-300"
                )}
                onClick={() => {
                  handleAttr(PrimaryAttr.Uni);
                }}
                icon={PrimaryAttr.Uni}
              >
                <Image
                  className="m-0"
                  alt={"Universal Image"}
                  src={"https://cdn.stratz.com/images/dota2/primary_attributes/all.png"}
                  width={18}
                  height={18}
                />
                UNIVERSAL
              </Button>
            </div>

            {/* ATTACK TYPE FILTER */}
            <div className="flex gap-5 m-1">
              <Button
                className={twMerge(
                  "border-white text-white hover:shadow-white",
                  attackType === AttackType.Melee && "bg-white text-black hover:shadow-gray-300"
                )}
                onClick={() => {
                  handleAttackType(AttackType.Melee);
                }}
                icon={AttackType.Melee}
              >
                <MeleeIcon width={18} height={18} fill={attackType === AttackType.Melee ? "black" : "white"} />
                MELEE
              </Button>

              <Button
                className={twMerge(
                  "border-white text-white hover:shadow-white",
                  attackType === AttackType.Ranged && "bg-white text-black hover:shadow-gray-300"
                )}
                onClick={() => {
                  handleAttackType(AttackType.Ranged);
                }}
                icon={AttackType.Ranged}
              >
                <RangedIcon width={18} height={18} fill={attackType === AttackType.Ranged ? "black" : "white"} />
                RANGED
              </Button>
            </div>
          </div>

          {/* RESULTS */}
          <div className="text-white mx-28 flex justify-center flex-wrap gap-7 mb-44">
            {searchHeroes?.length === 0 && (
              <div className="flex justify-center items-center">
                <ErrorIcon className="fill-uni" width={50} height={50} />
                <h1 className="text-5xl font-extrabold text-uni tracking-widest select-none">ERROR ERROR ERROR</h1>
                <ErrorIcon className="fill-uni" width={50} height={50} />
                <div className="bg-str px-60 font-bold text-lg rounded rotate-3 absolute select-none">
                  The Hero Was Not Found
                </div>
              </div>
            )}
            {searchHeroes === null ? (
              <div className="flex justify-center items-center gap-2 text-3xl">
                <LoadingIcon className="w-16 h-16 text-gray-200 animate-spin dark:text-white fill-red-600" />
                <h1>Loading heroes...</h1>
              </div>
            ) : (
              searchHeroes?.map((hero) => {
                return <HeroCard key={hero.id} hero={hero} />;
              })
            )}
          </div>
        </div>
      </main>
    </>
  );
}
