import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { MenuIcon, PatchIcon, SearchIcon, UserIcon } from "./Icons";

interface HeaderInfos {
  onChange: (name: string) => void;
}

export const Header = (props: HeaderInfos) => {
  return (
    <div
      className={twMerge(
        "px-12 h-16 w-full bg-hgray select-none",
        "flex justify-between items-center space-x-10",
        "rounded-bl-2xl rounded-br-2xl"
      )}
    >
      <div className="flex justify-center items-center text-lg text-white cursor-pointer">
        <Image
          alt="DotaLogo"
          src="https://i.imgur.com/omV05Wh.png"
          width={80}
          height={80}
          priority
        />
        <h1 className="text-center">Dota 2 </h1>
      </div>

      <label className="relative w-full max-w-lg">
        <div className="absolute top-1 left-1">
          <SearchIcon />
        </div>
        <input
          type="text"
          onChange={(e) => {
            props.onChange(e.target.value);
          }}
          placeholder="Buscar herói específico..."
          className={twMerge(
            "h-10 pl-10 w-full",
            "text-slate-200 text-left font-lg bg-hgray",
            "placeholder:text-white placeholder:italic",
            "border border-white rounded-tr-lg rounded-bl-lg rounded-tl-2xl rounded-br-2xl",
            "focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm",
            "bg"
          )}
        />
      </label>

      <div className="flex gap-3">
        <PatchIcon className="cursor-pointer"/>
        <UserIcon className="cursor-pointer"/>
        <MenuIcon className="cursor-pointer"/>
      </div>
    </div>
  );
};
