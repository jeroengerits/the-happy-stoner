import type { NextPage } from "next";
import Head from "next/head";
import Button from "../components/Button";
import ContentContainer from "../components/ContentContainer";
import Navigation from "../components/Navigation";
import PageContainer from "../components/PageContainer";
import Paragraph from "../components/Paragraph";
import WordMark from "../components/WordMark";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>The Happy Stoner</title>
        <meta name="description" content="The Happy Stoner" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContainer>
        <Navigation>
          <Navigation.Item href="/" isActive>
            Hello
          </Navigation.Item>
          <Navigation.Item href="/blog">Blog</Navigation.Item>
          <Navigation.Item href="/shop">Shop</Navigation.Item>
        </Navigation>
        <ContentContainer>
          <div className="mt-12 mb-16 ">
            <WordMark />
          </div>
          <div className="mt-12 px-2 md:px-0 ">
            <Paragraph>
              Cannabis has been a part of Amsterdams culture for years, and
              we’re proud to be part of this. So many people come here seeking
              out peace in an increasingly busy world - we feel their stash
              should go along with care too!
            </Paragraph>
            <Paragraph>
              That’s why we came up with a plastic-free package made with
              recycled and eco-friendly materials - which helps to reduce
              pollution in Amsterdam.
            </Paragraph>
            <Paragraph>
              Our sleek design is reusable and keeps your cannabis fresh, so you
              can always enjoy the highest quality while keeping your conscience
              clear.
            </Paragraph>
            <Paragraph>
              We know you love smoking as much we do, but why keep using
              plastics when there is a better option?
            </Paragraph>
            <form className="my-16 flex flex-col justify-center text-center">
              <label
                className="mx-auto mb-4 font-serif text-xl font-medium tracking-wide md:text-2xl"
                htmlFor="email"
              >
                Respect the stash, be like The Happy Stoner
              </label>
              <div className="flex flex-col items-center justify-start justify-center gap-2 lg:flex-row">
                <input
                  className="w-full select-none rounded-md border-0 bg-green-700 py-4 px-6 font-medium placeholder-green-900 ring-green-200 transition-all focus:outline-none focus:ring-2"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail address..."
                />
                <Button className="w-full">Join Us</Button>
              </div>
            </form>
          </div>
        </ContentContainer>
      </PageContainer>
    </div>
  );
};

export default Home;
