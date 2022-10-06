import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Paragraph from "../components/Paragraph";
import WordMark from "../components/WordMark";

const Shop: NextPage = () => {
  return (
    <div>
      <Head>
        <title>The Happy Stoner</title>
        <meta name="description" content="The Happy Stoner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-green-800 text-green-100">
        <Navigation>
          <Navigation.Item href="/">Hello</Navigation.Item>
          <Navigation.Item href="/shop" isActive>
            Shop
          </Navigation.Item>
          <Navigation.Item href="/blog">Blog</Navigation.Item>
        </Navigation>
        <main className="mx-auto max-w-2xl p-4">
          <WordMark />
        </main>
      </div>
    </div>
  );
};

export default Shop;
