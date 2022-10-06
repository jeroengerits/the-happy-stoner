import classNames from "classnames";
import React from "react";

type Props = {
  children: React.ReactNode;
  isVertical?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const Stack = ({ className, isVertical, children, ...rest }: Props) => (
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

export default Stack;
