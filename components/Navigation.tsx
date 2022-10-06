import classNames from "classnames";
import Link from "next/link";
import React from "react";

type NavigationProps = {
  children: React.ReactNode;
};

type NavigationItemProps = {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
};

const Navigation = ({ children, ...rest }: NavigationProps) => {
  const className = classNames(
    "flex gap-2 justify-center items-center text-center justify-center mb-12"
  );
  return (
    <ul className={className} {...rest}>
      {children}
    </ul>
  );
};

const NavigationItem = ({
  children,
  href,
  isActive,
  ...rest
}: NavigationItemProps) => {
  const className = classNames(
    isActive
      ? "font-black bg-white/20"
      : "font-normal hover:text-white hover:bg-white/10",
    "block text-white/80 w-full text-sm lg:text-md xl:text-lg cursor-pointer p-3 rounded transition-all"
  );
  return (
    <li className="w-full" {...rest}>
      <Link href={href}>
        <span className={className}>{children}</span>
      </Link>
    </li>
  );
};

Navigation.Item = NavigationItem;

export default Navigation;
