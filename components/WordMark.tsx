import classNames from "classnames";
import React from "react";

type Props = {} & React.HTMLAttributes<HTMLDivElement>;

const WordMark = ({ className, ...rest }: Props) => (
  <div
    className={classNames("mt-4 mb-8 block text-center", className)}
    {...rest}
  >
    <h1 className="select-none font-serif text-3xl font-black text-white/80 md:text-4xl lg:mb-1 lg:text-5xl">
      The Happy Stoner
    </h1>
    <h2 className="select-none text-xs font-light uppercase tracking-wide text-white/80 lg:text-base lg:tracking-widest xl:text-lg">
      Amsterdam Finest Stash Movement
    </h2>
  </div>
);

export default WordMark;
