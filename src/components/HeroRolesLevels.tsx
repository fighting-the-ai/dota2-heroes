import React from "react";
import { RoleIcon } from "./Icons";

interface HeroRolesLevelsProps {
  level: number;
}

export default function HeroRolesLevels(props: React.PropsWithChildren<HeroRolesLevelsProps>) {
  return (
    <div className="flex gap-2">
      <div className="ml-auto">
        <h1>{props.children}</h1>
      </div>
      <div className="flex gap-1 items-center">
        <RoleIcon width={30} height={10} fill={props.level >= 1 ? "#CBD7E1" : ""} />
        <RoleIcon width={30} height={10} fill={props.level >= 2 ? "#CBD7E1" : ""} />
        <RoleIcon width={30} height={10} fill={props.level >= 3 ? "#CBD7E1" : ""}/>
      </div>
    </div>
  );
}