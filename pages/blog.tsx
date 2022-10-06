import type { NextPage } from "next";
import Head from "next/head";
import InternalLink from "../components/InternalLink";
import Navigation from "../components/Navigation";
import Paragraph from "../components/Paragraph";

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
            <InternalLink href="/">Hello</InternalLink>
          </Navigation.Item>
          <Navigation.Item>
            <InternalLink href="/shop">Shop</InternalLink>
          </Navigation.Item>
          <Navigation.Item>
            <InternalLink href="/blog" isActive>
              Blog
            </InternalLink>
          </Navigation.Item>
        </Navigation>
        <Paragraph>Blog</Paragraph>
      </main>
    </div>
  );
};

export default Blog;
