import Link from "next/link";
import classnames from "classnames";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
};

const InternalLink = ({ href, children, isActive }: Props) => {
  const className = classnames(
    isActive
      ? "font-black bg-green-900"
      : "font-normal hover:text-green-100  hover:bg-green-900/50",
    "block text-green-100/80 w-full text-lg cursor-pointer p-4 rounded transition-all"
  );
  return (
    <Link href={href}>
      <span className={className}>{children}</span>
    </Link>
  );
};

export default InternalLink;
