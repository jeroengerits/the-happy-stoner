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
      <div className="min-h-screen bg-green-800 text-green-100">
        <main className="mx-auto max-w-2xl p-4">
          <Navigation>
            <Navigation.Item href="/">Hello</Navigation.Item>
            <Navigation.Item href="/shop">Shop</Navigation.Item>
            <Navigation.Item href="/blog" isActive>
              Blog
            </Navigation.Item>
          </Navigation>
          <h2 className=" mb-1 mt-8 text-sm font-bold text-white/80 md:text-base lg:text-lg">
            This is a blog subject title of a thing
          </h2>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            amet aperiam ea excepturi exercitationem expedita, impedit iusto
            laborum maxime nam natus neque nisi quaerat repellat sed, velit
            voluptatum! Eos, nesciunt!
          </Paragraph>
          <h2 className=" mb-1 mt-8 text-sm font-bold text-white/80 md:text-base lg:text-lg">
            This is a blog subject title of a thing
          </h2>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            amet aperiam ea excepturi exercitationem expedita, impedit iusto
            laborum maxime nam natus neque nisi quaerat repellat sed, velit
            voluptatum! Eos, nesciunt!
          </Paragraph>
          <h2 className=" mb-1 mt-8 text-sm font-bold text-white/80 md:text-base lg:text-lg">
            This is a blog subject title of a thing
          </h2>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            amet aperiam ea excepturi exercitationem expedita, impedit iusto
            laborum maxime nam natus neque nisi quaerat repellat sed, velit
            voluptatum! Eos, nesciunt!
          </Paragraph>
        </main>
      </div>
    </div>
  );
};

export default Blog;
