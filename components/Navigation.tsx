import classNames from "classnames";
import Link from "next/link";
import React from "react";

type NavigationProps = {
  children: React.ReactNode;
};

type NavigationItemProps = {
  children: React.ReactNode;
};

type NavigationLinkProps = {
  href: string;
  children: React.ReactNode;
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

const NavigationItem = ({ children, ...rest }: NavigationItemProps) => {
  const className = classNames("w-full");
  return (
    <li className={className} {...rest}>
      {children}
    </li>
  );
};

const NavigationLink = ({ href, children, isActive }: NavigationLinkProps) => {
  const className = classNames(
    isActive
      ? "font-black bg-green-900"
      : "font-normal hover:text-green-100 hover:bg-green-900/50",
    "block text-green-100/80 w-full text-sm lg:text-md xl:text-lg cursor-pointer p-3 rounded transition-all"
  );
  return (
    <Link href={href}>
      <span className={className}>{children}</span>
    </Link>
  );
};

Navigation.Item = NavigationItem;
Navigation.Link = NavigationLink;

export default Navigation;
