import classNames from "classnames";
import React from "react";

type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: Props) => {
  const className = classNames(
    "focus:outline-none focus:ring-2 ring-white/50 whitespace-nowrap select-none bg-white/10 hover:bg-white/20 text-white/60 hover:text-white-80 tracking-wide font-bold transition-all rounded-md py-3 px-8"
  );
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
};

export default Button;
