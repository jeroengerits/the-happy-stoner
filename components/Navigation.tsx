import classNames from "classnames";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Navigation = ({ children, ...rest }: Props) => {
  const className = classNames("flex gap-2 justify-center items-center");
  return (
    <ul className={className} {...rest}>
      {children}
    </ul>
  );
};

const NavigationItem = ({ children, ...rest }: Props) => {
  const className = classNames("w-full");
  return (
    <li className={className} {...rest}>
      {children}
    </li>
  );
};

Navigation.Item = NavigationItem;

export default Navigation;
