import Image from "next/image";
import { Hero } from "@/types";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

interface HeroProps {
  heroesInfos: Hero[] | null;
  attackType: string | null;
  primaryAttr: string | null;
}

export const HeroCard = (props: HeroProps) => {
  return (
    // <div className="align-center justify-center grid grid-cols-2 md:grid-cols-10 lg:gap-1 text-white">
    <div className="text-white mx-28 flex flex-wrap gap-7">
      {props.heroesInfos
        ?.filter((value) => {
          return (
            // filtro:
            // Se o 1º for null(true), ele pula pra segunda condição.
            // Se possuir um valor(false), ele filtra baseado na condição imposta.
            // A mesma regra repete-se para as duas linhas.
            (!props.attackType || value.attack_type === props.attackType) &&
            (!props.primaryAttr || value.primary_attr === props.primaryAttr)
          );
        })
        .map((value) => {
          return (
            <div key={value.id}>
              <Image
                alt={value.localized_name + " Icon"}
                src={"https://api.opendota.com" + value.img}
                width={256}
                height={144}
                className={twMerge(
                  "w-40 h-28 cursor-pointer border-2 object-cover rounded-lg",
                  value.primary_attr === "str" && "border-str",
                  value.primary_attr === "agi" && "border-agi",
                  value.primary_attr === "int" && "border-int"
                  )}
                priority
              />
              <ul>
                <li>{value.localized_name}</li>
              </ul>
            </div>
          );
        })}
    </div>
  );
};
