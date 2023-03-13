export interface Hero {
  id: number;
  name: string;
  localized_name: string;
  primary_attr: PrimaryAttr;
  attack_type: AttackType;
  roles: string[];
  img: string;
  icon: string;
}

export enum AttackType {
  Melee = "Melee",
  Ranged = "Ranged"
}

export enum PrimaryAttr {
  Str = "str",
  Agi = "agi",
  Int = "int"
}
