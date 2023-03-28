export interface Hero {
  id: number;
  name: string;
  localized_name: string;
  primary_attr: PrimaryAttr;
  attack_type: AttackType;
  roles: string[];
  img: string;
  icon: string;
  base_str: number;
  base_agi: number;
  base_int: number;
  str_gain: number;
  agi_gain: number;
  int_gain: number;
  base_health_regen: number;
  base_mana_regen: number;
  move_speed: number;
  attack_range: number;
  attack_rate: number;
  base_attack_max: number;
  base_attack_min: number;
  base_attack_time: number;
  base_armor: number;
  base_mr: number;
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
