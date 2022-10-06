import React from "react";

type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: Props) => {
  return (
    <button
      className="hover:text-white-80 select-none whitespace-nowrap rounded-md bg-white/10 py-3 px-8 font-bold tracking-wide text-white/60 ring-white/50 transition-all hover:bg-white/20 focus:outline-none focus:ring-2"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
