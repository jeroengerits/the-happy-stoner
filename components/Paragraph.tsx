import React from "react";

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement>;

const Paragraph = ({ children, ...rest }: Props) => {
  return (
    <p className="paragraph mb-4" {...rest}>
      {children}
    </p>
  );
};

export default Paragraph;
