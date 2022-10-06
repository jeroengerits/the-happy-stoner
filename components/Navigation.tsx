import classNames from "classnames";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import Stack from "./Stack";

type NavigationProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

type NavigationItemProps = {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Navigation = ({ children, ...rest }: NavigationProps) => {
  return (
    <Stack className="sticky top-0 bg-green-800 p-2" {...rest}>
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
    <Stack.Item {...rest}>
      <Link href={href}>
        <Button
          className={classNames(
            isActive
              ? "bg-green-900 font-black"
              : "bg-transparent font-normal font-light hover:bg-green-700 hover:font-medium hover:text-green-50",
            "lg:text-md block w-full cursor-pointer select-none rounded py-4 text-base uppercase tracking-wider text-green-100 ring-green-200 transition-all focus:outline-none focus:ring-2 xl:text-xl"
          )}
        >
          {children}
        </Button>
      </Link>
    </Stack.Item>
  );
};

Navigation.Item = NavigationItem;

export default Navigation;
