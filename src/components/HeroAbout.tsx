import { Hero } from "@/types";
import Image from "next/image";

interface HeroAboutInterface {
  hero: Hero;
}

export default function HeroAbout(props: HeroAboutInterface) {
  const hero = props.hero;
  return (
    <div className="text-center">
      <h1 className="font-bold">ABOUT {hero.displayName.toUpperCase()}</h1>
      <div className="flex flex-col lg:flex-row gap-10 p-5">
        <div className="flex flex-col text-justify gap-3">
          <div dangerouslySetInnerHTML={{ __html: hero.language.hype }} />
          <div dangerouslySetInnerHTML={{ __html: hero.language.bio }} />
        </div>
        <div className="flex flex-col gap-3 min-w-fit w-full text-center items-center">
          <h1> In-game Hero Model </h1>
          <Image
            className="min-w-fit max-h-[300px]"
            alt={hero.displayName + " Image"}
            src={"https://cdn.stratz.com/images/dota2/heroes/" + hero.shortName + "_model.png"}
            width={274}
            height={144}
            priority
          />
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
    </div>
  );
}
