import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Paragraph from "../components/Paragraph";
import WordMark from "../components/WordMark";

const Blog: NextPage = () => {
  return (
    <div>
      <Head>
        <title>The Happy Stoner</title>
        <meta name="description" content="The Happy Stoner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-green-800 text-green-100">
        <main className="mx-auto max-w-2xl p-4">
          <WordMark />

          <Navigation>
            <Navigation.Item href="/">Hello</Navigation.Item>
            <Navigation.Item href="/shop">Shop</Navigation.Item>
            <Navigation.Item href="/blog" isActive>
              Blog
            </Navigation.Item>
          </Navigation>
          <div className="">
            <h2 className=" mb-4 mt-12  font-serif text-xl font-medium !leading-snug tracking-wide text-white/80 md:text-2xl ">
              The hidden costs of smoking- plastics polluting our planet
            </h2>
            <Paragraph>
              Aliquid amet aperiam ea excepturi exercitationem expedita, impedit
              iusto laborum maxime nam natus neque nisi quaerat sed, velit
              voluptatum!
            </Paragraph>
            <h2 className="  mb-4  mt-12 font-serif text-xl font-medium !leading-snug tracking-wide text-white/80 md:text-2xl ">
              Why switching to The Happy Stoner will save you money
            </h2>
            <Paragraph>
              Exercitationem expedita, impedit iusto laborum maxime nam natus
              neque nisi quaerat repellat sed, velit voluptatum!
            </Paragraph>
            <h2 className="  mb-4 mt-12   font-serif text-xl font-medium !leading-snug tracking-wide text-white/80 md:text-2xl ">
              Why environmental friendly cannabis packaging matters
            </h2>
            <Paragraph>
              Impedit iusto laborum maxime nam natus neque nisi quaerat repellat
              sed, velit voluptatum!
            </Paragraph>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Blog;
