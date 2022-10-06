import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Paragraph from "../components/Paragraph";
import WordkMark from "../components/WordkMark";

const Shop: NextPage = () => {
  return (
    <div>
      <Head>
        <title>The Happy Stoner</title>
        <meta name="description" content="The Happy Stoner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-4 max-w-2xl mx-auto">
        <Navigation>
          <Navigation.Item href="/">Hello</Navigation.Item>
          <Navigation.Item href="/shop" isActive>
            Shop
          </Navigation.Item>
          <Navigation.Item href="/blog">Blog</Navigation.Item>
        </Navigation>

        <Paragraph>Shop</Paragraph>
      </main>
    </div>
  );
};

export default Shop;
