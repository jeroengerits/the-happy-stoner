import type { NextPage } from "next";
import Head from "next/head";
import ContentContainer from "../components/ContentContainer";
import Navigation from "../components/Navigation";
import PageContainer from "../components/PageContainer";

const Sandbox: NextPage = () => {
  return (
    <div>
      <Head>
        <title>The Happy Stoner</title>
        <meta name="description" content="The Happy Stoner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <Navigation>
          <Navigation.Item href="/">Hello</Navigation.Item>
          <Navigation.Item href="/blog">Blog</Navigation.Item>
          <Navigation.Item href="/shop">Shop</Navigation.Item>
        </Navigation>
        <ContentContainer>
          <h1 className="heading-lg">Large Heading</h1>
          <h2 className="heading-md">Medium Heading</h2>
          <h3 className="heading-sm">Small Heading</h3>
          <h4 className="heading-xs">Extra Small Heading</h4>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
            corporis error illum laudantium molestias non odit omnis pariatur
            quae quas quo ut. Asperiores dolores ipsam, laudantium molestias
            officiis repudiandae unde.
          </p>
        </ContentContainer>
      </PageContainer>
    </div>
  );
};

export default Sandbox;
