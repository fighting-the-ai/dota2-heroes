import { useHeroes } from "@/context/HeroContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { SearchIcon } from "./Icons";

interface HeaderSelectProps {
  indexResult?: boolean;
  onChange?: (name: string) => void;
}

export default function HeaderSelect(props: HeaderSelectProps) {
  const { heroes } = useHeroes();
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [searchItem, setSearchItem] = useState<string>("");
  const divRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // DISABLE DETECTIONS
  const escFunction = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setShowOptions(false);
      inputRef.current?.blur();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [showOptions]);

  // DATABASE FILTER
  const searchHeroes =
    heroes &&
    Object.values(heroes)
      .filter((hero) => {
        return hero.abilities;
      })
      .filter((hero) => {
        return (
          !searchItem ||
          hero.displayName.toLocaleLowerCase().indexOf(searchItem.toLocaleLowerCase()) >= 0 ||
          hero.shortName.toLocaleLowerCase().indexOf(searchItem.toLocaleLowerCase()) >= 0
        );
      });

  const searchIconColor = () => {
    if (props.indexResult || searchHeroes?.length === 0) {
      return "#EC4899";
    } else if (showOptions) {
      return "#0EA5E9";
    } else {
      return "#D3D3D3";
    }
  };

  return (
    <div
      onClick={() => {
        if (!showOptions) {
          setShowOptions((prevShowOptions) => !prevShowOptions);
        }
      }}
      ref={divRef}
    >
      <SearchIcon className="absolute top-1 left-1" fill="none" stroke={searchIconColor()} />
      <input
        ref={inputRef}
        value={searchItem != "" ? searchItem : ""}
        type="text"
        onChange={(e) => {
          setSearchItem(e.target.value);
          props.onChange?.(e.target.value);
        }}
        placeholder="Search a specific hero..."
        className={twMerge(
          "h-10 pl-10 w-full sm:text-sm text-left ",
          "bg-hgray placeholder:italic text-slate-200 placeholder:text-slate-200",
          "border border-white rounded-tr-lg rounded-bl-lg rounded-tl-2xl rounded-br-2xl",
          "focus:placeholder:text-white focus:text-sky-500",
          "focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:outline-none",
          props.indexResult || searchHeroes?.length === 0
            ? "focus:border-pink-500 focus:ring-pink-500 focus:text-pink-600"
            : ""
        )}
      />

      {props.onChange ? null : (
        <div
          className={twMerge(
            "hidden flex-col absolute w-full max-h-[260px] overflow-y-scroll overflow-overlay",
            "border border-white rounded-tr-lg rounded-bl-lg rounded-tl-2xl rounded-br-2xl",
            "bg-hgray",
            showOptions && "flex"
          )}
        >
          {searchHeroes?.map((hero) => (
            <Link
              key={`${hero.shortName}`}
              href={`/${hero.displayName}`}
              onClick={() => {
                setSearchItem("");
                setShowOptions(false);
              }}
              className="flex text-lg items-center text-white m-2 gap-1"
            >
              <Image
                className="w-10"
                alt={hero.displayName + " Icon"}
                src={"https://cdn.stratz.com/images/dota2/heroes/" + hero.shortName + "_icon.png"}
                width={274}
                height={144}
                priority
              />
              <p>{hero.displayName}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
