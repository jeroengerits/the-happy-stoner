import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Paragraph from "../components/Paragraph";
import WordkMark from "../components/WordkMark";

const Blog: NextPage = () => {
  return (
    <div>
      <Head>
        <title>The Happy Stoner</title>
        <meta name="description" content="The Happy Stoner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-4 max-w-2xl mx-auto">
        <Navigation>
          <Navigation.Item>
            <Navigation.Link href="/">Hello</Navigation.Link>
          </Navigation.Item>
          <Navigation.Item>
            <Navigation.Link href="/shop">Shop</Navigation.Link>
          </Navigation.Item>
          <Navigation.Item>
            <Navigation.Link href="/blog" isActive>
              Blog
            </Navigation.Link>
          </Navigation.Item>
        </Navigation>
        <div className="top-0 sticky">
          <WordkMark />
        </div>
        <h2 className=" text-green-100/80 text-sm md:text-base lg:text-lg font-bold mb-1 mt-8">
          This is a blog subject title of a thing
        </h2>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet
          aperiam ea excepturi exercitationem expedita, impedit iusto laborum
          maxime nam natus neque nisi quaerat repellat sed, velit voluptatum!
          Eos, nesciunt!
        </Paragraph>
        <Paragraph>Read more..</Paragraph>
      </main>
    </div>
  );
};

export default Blog;
