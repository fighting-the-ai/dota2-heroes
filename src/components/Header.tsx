import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { MenuIcon, SearchIcon, UserIcon } from "./Icons";
import HeaderSelect from "./HeaderSelect";

interface HeaderInfos {
  indexResult?: boolean;
  onChange?: (name: string) => void;
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
      <Link href="/" className="flex justify-center items-center text-lg text-white cursor-pointer gap-2">
        <Image
          className="w-auto h-auto"
          alt="DotaLogo"
          src="/favicon.ico"
          width={50}
          height={50}
        />
        <h1 className="text-center">Dota 2</h1>
      </Link>

      <div className="relative w-full max-w-lg sm:text-sm">
        <HeaderSelect onChange={props.onChange} indexResult={props.indexResult} />
      </div>

      <div className="flex gap-3">
        <UserIcon fill="none" stroke="#D3D3D3" className="cursor-pointer" />
        <MenuIcon stroke="#D3D3D3" className="cursor-pointer" />
      </div>
    </div>
  );
};
