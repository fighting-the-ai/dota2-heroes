import { twMerge } from "tailwind-merge";

interface ButtonProps {
  className: string,
  onClick: () => void,
  icon: string,
}

export const Button = (props: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={twMerge(
        "w-36 h-8 gap-1",
        "cursor-pointer select-none",
        "flex items-center justify-center",
        "border border-solid rounded-tr-lg rounded-bl-lg rounded-tl-2xl rounded-br-2xl",
        "hover:shadow-md hover:scale-110 transition ease-in-out delay-50",
        "active:scale-95",
        props.className
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};