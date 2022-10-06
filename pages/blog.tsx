import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import InternalLink from "../components/InternalLink";
import Navigation from "../components/Navigation";
import WordkMark from "../components/WordkMark";

const Blog: NextPage = () => {
  return (
    <div>
      <Head>
        <title>The Happy Stoner</title>
        <meta name="description" content="The Happy Stoner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-4 text-center max-w-2xl mx-auto">
        <div className="block mb-16">
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
        </div>
        <div className="  text-lg text-left  mt-12">blog</div>
      </main>
    </div>
  );
};

export default Blog;
