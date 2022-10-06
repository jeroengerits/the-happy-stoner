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
            "w-full",
            isActive
              ? "bg-green-900 font-black"
              : "bg-transparent font-normal font-light hover:bg-green-700 hover:font-medium hover:text-green-50"
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
