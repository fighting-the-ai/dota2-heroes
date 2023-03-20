import { Hero } from "@/types";

interface HeroProps {
  heroesInfos: Hero[];
}

export default function HeroPage(props: HeroProps) {
  return (
    <li>
      {props.heroesInfos?.map((value) => {
        return <li key={value.id}>{value.localized_name}</li>;
      })}
    </li>
  );
}
