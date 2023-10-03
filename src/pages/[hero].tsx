import { Header } from "@/components/Header";
import HeroAbout from "@/components/HeroAbout";
import HeroRoles from "@/components/HeroRoles";
import HeroStats from "@/components/HeroStats";
import { LoadingIcon } from "@/components/Icons";
import { useHeroes } from "@/context/HeroContext";
import { CheckData } from "@/types";
import Head from "next/head";
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
      <>
        <Head>
          <title>Please wait</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div
          className={twMerge(
            "font-inter text-white gap-2 text-3xl ",
            "min-h-screen flex items-center justify-center",
            "bg-gradient-to-tr from-black via-deg to-black"
          )}
        >
          <LoadingIcon className="w-16 h-16 text-gray-200 animate-spin fill-red-600" />
          <h1>Loading hero...</h1>
        </div>
      </>
    );
  } else if (checkData === CheckData.undefined) {
    return (
      <>
        <Head>
          <title>ERROR</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div
          className={twMerge(
            "font-inter text-white",
            "min-h-screen flex flex-col items-center justify-center",
            "bg-gradient-to-tr from-black via-deg to-black"
          )}
        >
          <h1 className="text-9xl font-extrabold text-white tracking-widest select-none">404</h1>
          <div className="bg-str px-2 text-sm rounded rotate-12 absolute select-none">Hero Not Found</div>
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
      </>
    );
  } else if (hero && checkData === CheckData.readed) {
    return (
      <>
        <Head>
          <title>{hero.displayName}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div
          className={twMerge(
            "font-inter text-white gap-2",
            "min-h-screen flex flex-col items-center",
            "bg-gradient-to-tr from-black via-deg to-black"
          )}
        >
          <Header />
          <HeroAbout hero={hero} />
          <div className="flex flex-col w-full gap-2">
            <HeroRoles roles={hero.roles} />
            <HeroStats hero={hero} />
          </div>
        </div>
      </>
    );
  }
}
