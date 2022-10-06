import classNames from "classnames";

const WordkMark = () => {
  const containerClassName = classNames("text-center block bg-green-800  py-2");
  const titleClassName = classNames(
    "text-3xl md:text-4xl lg:text-5xl select-none font-serif text-green-50/80 md:mb-1 lg:mb-2 font-black"
  );
  const subtitleClassName = classNames(
    "select-none text-xs md:text-sm lg:text-base uppercase text-green-50/80 tracking-widest font-light"
  );
  return (
    <div className={containerClassName}>
      <h1 className={titleClassName}>The Happy Stoner</h1>
      <h2 className={subtitleClassName}>Amsterdam Finest Stash Movement</h2>
    </div>
  );
};

export default WordkMark;
