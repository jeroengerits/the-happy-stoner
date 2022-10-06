import classNames from "classnames";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Paragraph = ({ children, ...rest }: Props) => {
  const className = classNames(
    "mb-4 text-white/80 text-sm md:text-base lg:text-lg"
  );
  return (
    <p className={className} {...rest}>
      {children}
    </p>
  );
};

export default Paragraph;
