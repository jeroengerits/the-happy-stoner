import type { NextPage } from "next";
import Head from "next/head";
import ContentContainer from "../components/ContentContainer";
import Navigation from "../components/Navigation";
import PageContainer from "../components/PageContainer";
import WordMark from "../components/WordMark";

const Shop: NextPage = () => {
  return (
    <div>
      <Head>
        <title>The Happy Stoner</title>
        <meta name="description" content="The Happy Stoner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <ContentContainer>
          <div className="pt-4 pb-8">
            <WordMark />
          </div>
          <Navigation>
            <Navigation.Item href="/">Hello</Navigation.Item>
            <Navigation.Item href="/blog">Blog</Navigation.Item>
            <Navigation.Item href="/shop" isActive>
              Shop
            </Navigation.Item>
          </Navigation>
          blabla
        </ContentContainer>
      </PageContainer>
    </div>
  );
};

export default Shop;
