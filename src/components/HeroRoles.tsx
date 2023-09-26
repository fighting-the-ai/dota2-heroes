import { RoleIds } from "@/types";
import HeroRolesLevels from "./HeroRolesLevels";
import { useEffect, useState } from "react";

interface HeroRoleProps {
  roles: [
    {
      level: number;
      roleId: number;
    }
  ];
}

export default function HeroRoles(props: HeroRoleProps) {
  const [carry, setCarry] = useState(0);
  const [sup, setSup] = useState(0);
  const [nuker, setNuker] = useState(0);
  const [disabler, setDisabler] = useState(0);
  const [tank, setTank] = useState(0);
  const [escape, setEscape] = useState(0);
  const [push, setPush] = useState(0);
  const [init, setInit] = useState(0);

  useEffect(() => {
    for (let index = 0; index < props.roles.length; index++) {
      const element = props.roles[index];
      if (element.roleId === RoleIds.Carry) {
        setCarry(element.level);
      }
      if (element.roleId === RoleIds.Support) {
        setSup(element.level);
      }
      if (element.roleId === RoleIds.Nuker) {
        setNuker(element.level);
      }
      if (element.roleId === RoleIds.Disabler) {
        setDisabler(element.level);
      }
      if (element.roleId === RoleIds.Durable) {
        setTank(element.level);
      }
      if (element.roleId === RoleIds.Escape) {
        setEscape(element.level);
      }
      if (element.roleId === RoleIds.Pusher) {
        setPush(element.level);
      }
      if (element.roleId === RoleIds.Initiator) {
        setInit(element.level);
      }
    }
  }, [props.roles]);

  return (
    <div className="flex flex-col items-center gap-1 p-3 bg-gradient-to-tr from-[#21292b] to-[#252627]">
      <h1 className="font-bold">ROLES</h1>
      <div className="flex gap-4">
        <div>
          <HeroRolesLevels level={carry}>Carry</HeroRolesLevels>
          <HeroRolesLevels level={sup}>Support</HeroRolesLevels>
          <HeroRolesLevels level={nuker}>Nuker</HeroRolesLevels>
          <HeroRolesLevels level={disabler}>Disabler</HeroRolesLevels>
        </div>
        <div>
          <HeroRolesLevels level={tank}>Durable</HeroRolesLevels>
          <HeroRolesLevels level={escape}>Escape</HeroRolesLevels>
          <HeroRolesLevels level={push}>Pusher</HeroRolesLevels>
          <HeroRolesLevels level={init}>Initiator</HeroRolesLevels>
        </div>
      </div>
    </div>
  );
}
