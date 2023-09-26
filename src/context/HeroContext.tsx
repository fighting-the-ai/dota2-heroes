import { Hero } from "@/types";
import React, { createContext, useContext, useState, useEffect } from "react";

const headers = {
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJodHRwczovL3N0ZWFtY29tbXVuaXR5LmNvbS9vcGVuaWQvaWQvNzY1NjExOTgwOTg3NDg2NDEiLCJ1bmlxdWVfbmFtZSI6Imp2cGhvZW5peCIsIlN1YmplY3QiOiI4ZDNkMzA5Ni0zMmZmLTQ0N2UtOWVhMS03MjI0M2MwODEyMDYiLCJTdGVhbUlkIjoiMTM4NDgyOTEzIiwibmJmIjoxNjc1NDY0MzExLCJleHAiOjE3MDcwMDAzMTEsImlhdCI6MTY3NTQ2NDMxMSwiaXNzIjoiaHR0cHM6Ly9hcGkuc3RyYXR6LmNvbSJ9.ro69LiunoiGaWFgDk-_Wzggqi_RavJS9mwyvkQCzOtA",
};

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
    fetch("https://api.stratz.com/api/v1/Hero", { headers })
      .then((res) => res.json())
      .then((data: Hero[]) => {
        setHeroes(data)
      })
      .catch((error) => console.error(error));
  }, []);
  
  const contextValue = { heroes };
  return <HeroInfoContext.Provider value={contextValue}>{props.children}</HeroInfoContext.Provider>;
}
