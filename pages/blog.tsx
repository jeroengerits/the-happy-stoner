import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import InternalLink from "../components/InternalLink";
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
          <ul className="flex gap-2 justify-center items-center [&>*]:w-full">
            <li>
              <InternalLink href="/">Hello</InternalLink>
            </li>
            <li>
              <InternalLink href="/shop">Shop</InternalLink>
            </li>
            <li>
              <InternalLink href="/blog" isActive>
                Blog
              </InternalLink>
            </li>
          </ul>
        </div>
        <div className="  text-lg text-left  mt-12">blog</div>
      </main>
    </div>
  );
};

export default Blog;
