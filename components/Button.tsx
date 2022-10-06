import React from "react";

type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: Props) => {
  return (
    <button
      className="select-none  whitespace-nowrap rounded-md bg-black/10 py-3 px-8 font-bold tracking-wide text-green-50 ring-green-200 transition-all hover:bg-green-900 hover:font-black hover:text-white focus:outline-none focus:ring-2"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
