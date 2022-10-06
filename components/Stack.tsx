import classNames from "classnames";
import React from "react";

type StackProps = {
  children: React.ReactNode;
  isVertical?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Stack = ({ className, isVertical, children, ...rest }: StackProps) => (
  <div
    className={classNames(
      "flex items-center justify-center gap-2",
      isVertical ? "flex-col" : "flex-row"
    )}
    {...rest}
  >
    {children}
  </div>
);

type StackItemProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const StackItem = ({ children, ...rest }: StackItemProps) => (
  <div className="w-full" {...rest}>
    {children}
  </div>
);

Stack.Item = StackItem;

export default Stack;
