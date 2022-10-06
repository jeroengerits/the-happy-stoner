import classNames from "classnames";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Paragraph = ({ children, ...rest }: Props) => {
  const className = classNames(
    "mb-4 leading-relaxed text-green-100/80  text-sm md:text-md lg:text-lg tracking-wide"
  );
  return (
    <p className={className} {...rest}>
      {children}
    </p>
  );
};

export default Paragraph;
