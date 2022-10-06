import classNames from "classnames";
import React from "react";

type Props = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...rest }: Props) => {
  return (
    <button
      className={classNames(
        "select-none  whitespace-nowrap rounded-md bg-black/10 py-3 px-8 font-bold tracking-wide text-green-50 ring-green-200 transition-all hover:bg-green-900 hover:font-black hover:text-white focus:outline-none focus:ring-2",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
