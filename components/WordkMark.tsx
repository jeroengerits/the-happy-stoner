type Props = {
    size: "small" | "normal" | "large"
}
const WordkMark = () => {
    return (
        <>
            <h1 className="text-5xl md:text-6xl  select-none font-serif text-green-50/80 mb-2 font-black">The Happy Stoner</h1>
            <h2 className="select-none text-sm md:text-base lg:text-lg xl:text-xl uppercase text-green-50/50 tracking-widest font-light">Amsterdam Finest
                Stash
                Movement</h2>
        </>
    );
}

export default WordkMark
