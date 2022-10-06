import classNames from "classnames";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import Stack from "./Stack";

type NavigationProps = {
  children: React.ReactNode;
};

type NavigationItemProps = {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
};

const Navigation = ({ children, ...rest }: NavigationProps) => {
  return (
    <Stack className="mb-12 mt-6" {...rest}>
      {children}
    </Stack>
  );
};

const NavigationItem = ({
  children,
  href,
  isActive,
  ...rest
}: NavigationItemProps) => {
  return (
    <div className="w-full" {...rest}>
      <Link href={href}>
        <Button
          className={classNames(
            isActive
              ? "bg-white/10 font-black"
              : "font-normal hover:bg-white/20 hover:font-medium hover:text-white",
            "lg:text-md block w-full cursor-pointer select-none rounded p-3 text-sm text-white/80 ring-white/50 transition-all focus:outline-none focus:ring-2 xl:text-lg"
          )}
        >
          {children}
        </Button>
      </Link>
    </div>
  );
};

Navigation.Item = NavigationItem;

export default Navigation;
