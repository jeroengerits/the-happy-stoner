import type { NextPage } from "next";
import Head from "next/head";
import ContentContainer from "../components/ContentContainer";
import Navigation from "../components/Navigation";
import PageContainer from "../components/PageContainer";
import Paragraph from "../components/Paragraph";
import WordMark from "../components/WordMark";

const Blog: NextPage = () => {
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
          <Navigation.Item href="/blog" isActive>
            Blog
          </Navigation.Item>
          <Navigation.Item href="/shop">Shop</Navigation.Item>
        </Navigation>
        <ContentContainer>
          <div className="mt-8 px-2 md:px-0 ">
            <h2 className="heading-xs mb-2 mt-8">
              The real hidden costs of cannabis smoking- plastics polluting our
              planet
            </h2>
            <Paragraph>
              Aliquid amet aperiam ea excepturi exercitationem expedita, impedit
              iusto laborum maxime nam natus neque nisi quaerat sed, velit
              voluptatum!
            </Paragraph>
            <h2 className="heading-xs mb-2 mt-8">
              Why switching to The Happy Stoner will save you money and the
              planet
            </h2>
            <Paragraph>
              Exercitationem expedita, impedit iusto laborum maxime nam natus
              neque nisi quaerat repellat sed, velit voluptatum!
            </Paragraph>
            <h2 className="heading-xs mb-2 mt-8">
              Why environmental friendly cannabis packaging matters to you and
              the planet
            </h2>
            <Paragraph>
              Impedit iusto laborum maxime nam natus neque nisi quaerat repellat
              sed, velit voluptatum!
            </Paragraph>
          </div>
        </ContentContainer>
      </PageContainer>
    </div>
  );
};

export default Blog;
