import { RoleIds } from "@/types";
import HeroRolesLevels from "./HeroRolesLevels";

interface HeroRoleProps {
  roles: [
    {
      level: number;
      roleId: number;
    }
  ];
}

export default function HeroRoles(props: HeroRoleProps) {
  const findLevel = (id: number) => {
    const role = props.roles && Object.values(props.roles).find((value) => value.roleId === id);
    if (role?.level !== undefined) {
      return role?.level;
    } else {
      return 0;
    }
  };

  return (
    <div className="flex flex-col items-center gap-1 p-3 bg-gradient-to-tr from-[#21292b] to-[#252627]">
      <h1 className="font-bold">ROLES</h1>
      <div className="flex gap-4">
        <div>
          <HeroRolesLevels level={findLevel(RoleIds.Carry)}>Carry</HeroRolesLevels>
          <HeroRolesLevels level={findLevel(RoleIds.Support)}>Support</HeroRolesLevels>
          <HeroRolesLevels level={findLevel(RoleIds.Nuker)}>Nuker</HeroRolesLevels>
          <HeroRolesLevels level={findLevel(RoleIds.Disabler)}>Disabler</HeroRolesLevels>
        </div>
        <div>
          <HeroRolesLevels level={findLevel(RoleIds.Durable)}>Durable</HeroRolesLevels>
          <HeroRolesLevels level={findLevel(RoleIds.Escape)}>Escape</HeroRolesLevels>
          <HeroRolesLevels level={findLevel(RoleIds.Pusher)}>Pusher</HeroRolesLevels>
          <HeroRolesLevels level={findLevel(RoleIds.Initiator)}>Initiator</HeroRolesLevels>
        </div>
      </div>
    </div>
  );
}
