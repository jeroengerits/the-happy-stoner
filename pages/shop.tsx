import type { NextPage } from "next";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Paragraph from "../components/Paragraph";

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
          <Navigation.Item>
            <Navigation.Link href="/">Hello</Navigation.Link>
          </Navigation.Item>
          <Navigation.Item>
            <Navigation.Link href="/shop" isActive>
              Shop
            </Navigation.Link>
          </Navigation.Item>
          <Navigation.Item>
            <Navigation.Link href="/blog">Blog</Navigation.Link>
          </Navigation.Item>
        </Navigation>
        <Paragraph>Shop</Paragraph>
      </main>
    </div>
  );
};

export default Shop;
