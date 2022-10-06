type Props = {
  size: "small" | "normal" | "large";
};
const WordkMark = () => {
  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-5xl select-none font-serif text-green-50/80 mb-1 lg:mb-2 font-black">
        The Happy Stoner
      </h1>
      <h2 className="select-none text-xs md:text-sm uppercase text-green-50/80 tracking-widest font-light">
        Amsterdam Finest Stash Movement
      </h2>
    </>
  );
};

export default WordkMark;
