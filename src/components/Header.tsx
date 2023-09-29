import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { MenuIcon, SearchIcon, UserIcon } from "./Icons";

interface HeaderInfos {
  onChange?: (name: string) => void;
  result?: boolean;
}

export const Header = (props: HeaderInfos) => {
  const [searching, setSearching] = useState<boolean>(false);
  function searchIconColor() {
    if (props.result) {
      return "#EC4899";
    } else if (searching) {
      return "#0EA5E9";
    } else {
      return "#D3D3D3";
    }
  }
  return (
    <div
      className={twMerge(
        "px-12 h-16 w-full bg-hgray select-none",
        "flex justify-between items-center space-x-10",
        "rounded-bl-2xl rounded-br-2xl"
      )}
    >
      <Link href="/" className="flex justify-center items-center text-lg text-white cursor-pointer">
        <Image
          className="w-auto h-auto"
          alt="DotaLogo"
          src="https://i.imgur.com/omV05Wh.png"
          width={80}
          height={80}
          priority
        />
        <h1 className="text-center">Dota 2</h1>
      </Link>

      {props.onChange ? (
        <label className="relative w-full max-w-lg focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">
          <div className="absolute top-1 left-1">
            <SearchIcon className="cursor-pointer" fill="none" stroke={searchIconColor()} />
          </div>
          <input
            type="text"
            onChange={(e) => {
              props.onChange?.(e.target.value);
              if (e.target.value.length >= 1) {
                setSearching(true);
              } else {
                setSearching(false);
              }
            }}
            placeholder="Search a specific hero..."
            className={twMerge(
              "h-10 pl-10 w-full sm:text-sm text-left ",
              "bg-hgray placeholder:italic text-slate-200 placeholder:text-slate-200",
              "border border-white rounded-tr-lg rounded-bl-lg rounded-tl-2xl rounded-br-2xl",
              "focus:border-sky-500 focus:ring-sky-500 focus:ring-1 focus:outline-none",
              "focus:placeholder:text-white focus:text-sky-500",
              props.result && "focus:border-pink-500 focus:ring-pink-500 focus:text-pink-600"
            )}
          />
        </label>
      ) : null}

      <div className="flex gap-3">
        <UserIcon fill="none" stroke="#D3D3D3" className="cursor-pointer" />
        <MenuIcon stroke="#D3D3D3" className="cursor-pointer" />
      </div>
    </div>
  );
};
