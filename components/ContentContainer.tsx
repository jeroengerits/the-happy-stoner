import classNames from "classnames";
import React from "react";

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const ContentContainer = ({ children, className, ...rest }: Props) => {
  return (
    <div className={classNames("mx-auto max-w-2xl p-4", className)} {...rest}>
      {children}
    </div>
  );
};

export default ContentContainer;
