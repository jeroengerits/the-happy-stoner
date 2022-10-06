import classNames from "classnames";
import React from "react";

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const PageContainer = ({ children, className, ...rest }: Props) => {
  return (
    <div
      className={classNames(
        "min-h-screen bg-green-800 text-green-100 antialiased",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default PageContainer;
