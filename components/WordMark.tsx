import classNames from "classnames";
import React from "react";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

const WordMark = ({ className, ...rest }: Props) => (
  <div className={classNames("block text-center", className)} {...rest}>
    <h1 className="heading-lg select-none text-green-50">The Happy Stoner</h1>
    <h2 className="select-none text-xs font-light uppercase tracking-wide  lg:text-sm lg:tracking-widest">
      Amsterdam Finest Stash Movement
    </h2>
  </div>
);

export default WordMark;
