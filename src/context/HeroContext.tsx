import { Hero } from "@/types";
import React, { createContext, useContext, useState, useEffect } from "react";

// contexto criado
export const HeroInfoContext = createContext<{ heroes: Hero[] | null }>({ heroes: null });

// usar o contexto criado
export const useHeroes = () => {
  return useContext(HeroInfoContext);
};

// react func do context
export function HeroInfoContextProvider(props: React.PropsWithChildren) {
  const [heroes, setHeroes] = useState<Hero[] | null>(null);

  useEffect(() => {
    fetch("https://api.stratz.com/api/v1/Hero", {
      headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}` },
    })
      .then((res) => res.json())
      .then((data: Hero[]) => {
        setHeroes(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const contextValue = { heroes };
  return <HeroInfoContext.Provider value={contextValue}>{props.children}</HeroInfoContext.Provider>;
}
