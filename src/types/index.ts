export interface Hero {
  abilities: [
    {
      abilityId: number;
      slot: number;
    }
  ];
  aliases: [string];
  displayName: string;
  id: number;
  language: {
    bio: string;
    displayName: string;
    gameVersionId: number;
    heroId: number;
    hype: string;
    languageId: number;
  };
  name: string;
  roles: [
    {
      level: number;
      roleId: number;
    }
  ];
  shortName: string;
  stat: {
    AttributePrimary: string;
    agilityBase: number;
    agilityGain: number;
    attackAcquisitionRange: number;
    attackAnimationPoint: number;
    attackRange: number;
    attackRate: number;
    attackType: string;
    cmEnabled: boolean;
    complexity: number;
    enabled: boolean;
    gameVersionId: number;
    heroPrimaryAttribute: number;
    heroUnlockOrder: number;
    hpBarOffset: number;
    hpRegen: number;
    intelligenceBase: number;
    intelligenceGain: number;
    moveSpeed: number;
    moveTurnRate: number;
    mpRegen: number;
    newPlayerEnabled: boolean;
    primaryAttributeEnum: number;
    startingArmor: number;
    startingDamageMax: number;
    startingDamageMin: number;
    startingMagicArmor: number;
    strengthBase: number;
    strengthGain: number;
    team: boolean;
    visionDaytimeRange: number;
    visionNighttimeRange: number;
  };
  talents: [
    {
      abilityId: number;
      gameVersionId: number;
      slot: number;
    }
  ];
}

export enum AttackType {
  Melee = "Melee",
  Ranged = "Ranged",
}

export enum PrimaryAttr {
  Str = "str",
  Agi = "agi",
  Int = "int",
  Uni = "all",
}

export enum RoleIds {
  Carry = 0,
  Escape = 1,
  Nuker = 2,
  Initiator = 3,
  Durable = 4,
  Disabler = 5,
  Jungler = 6,
  Support = 7,
  Pusher = 8,
}

export enum CheckData {
  null = 0,
  undefined = 1,
  readed = 2
}