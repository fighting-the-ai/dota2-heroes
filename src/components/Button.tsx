import { twMerge } from "tailwind-merge";

interface ButtonProps {
  className: string,
  onClick: () => void,
}

export const Button = (props: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={twMerge(
        "w-36 h-8",
        "cursor-pointer select-none",
        "flex items-center justify-center",
        "border border-solid rounded-tr-lg rounded-bl-lg rounded-tl-2xl rounded-br-2xl",
        props.className
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};