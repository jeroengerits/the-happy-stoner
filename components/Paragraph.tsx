import React from "react";

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement>;

const Paragraph = ({ children, ...rest }: Props) => {
  return (
    <p
      className="mb-4  text-sm   !leading-relaxed md:text-base lg:text-lg"
      {...rest}
    >
      {children}
    </p>
  );
};

export default Paragraph;
