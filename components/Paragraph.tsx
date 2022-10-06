import React from "react";

type Props = {
  children: React.ReactNode;
};

const Paragraph = ({ children, ...rest }: Props) => {
  return (
    <p
      className="mb-4 text-sm font-medium text-white/80 md:text-base lg:text-lg"
      {...rest}
    >
      {children}
    </p>
  );
};

export default Paragraph;
