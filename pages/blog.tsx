import type { NextPage } from "next";
import Head from "next/head";
import ContentContainer from "../components/ContentContainer";
import Navigation from "../components/Navigation";
import PageContainer from "../components/PageContainer";
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
        <ContentContainer>
          <div className="pt-4 pb-8">
            <WordMark />
          </div>
          <Navigation>
            <Navigation.Item href="/">Hello</Navigation.Item>
            <Navigation.Item href="/blog" isActive>
              Blog
            </Navigation.Item>
            <Navigation.Item href="/shop">Shop</Navigation.Item>
          </Navigation>

          <div className="mt-16">
            <h2 className="heading-xs mb-2 mt-6 text-green-50">
              The real hidden costs of cannabis smoking- plastics polluting our
              planet
            </h2>
            <p className="paragraph">
              Aliquid amet aperiam ea excepturi exercitationem expedita, impedit
              iusto laborum maxime nam natus neque nisi quaerat sed, velit
              voluptatum! Aliquid amet aperiam ea excepturi exercitationem
              expedita, impedit iusto laborum maxime nam natus neque nisi
              quaerat sed, velit voluptatum!
            </p>
            <h2 className="heading-xs mb-2 mt-16 text-green-50">
              Why switching to The Happy Stoner will save you money and the
              planet
            </h2>
            <p className="paragraph">
              Exercitationem expedita, impedit iusto laborum maxime nam natus
              neque nisi quaerat repellat sed, velit voluptatum! Aliquid amet
              aperiam ea excepturi exercitationem expedita, impedit iusto
              laborum maxime nam natus neque nisi quaerat sed, velit voluptatum!
            </p>
            <h2 className="heading-xs mb-2 mt-16 text-green-50">
              Why environmental friendly cannabis packaging matters to you and
              the planet
            </h2>
            <p className="paragraph">
              Impedit iusto laborum maxime nam natus neque nisi quaerat repellat
              sed, velit voluptatum! Aliquid amet aperiam ea excepturi
              exercitationem expedita, impedit iusto laborum maxime nam natus
              neque nisi quaerat sed, velit voluptatum!
            </p>
            <h2 className="heading-xs mb-2 mt-16 text-green-50">
              Why switching to The Happy Stoner will save you money and the
              planet
            </h2>
            <p className="paragraph">
              Exercitationem expedita, impedit iusto laborum maxime nam natus
              neque nisi quaerat repellat sed, velit voluptatum!
            </p>
            <h2 className="heading-xs mb-2 mt-16 text-green-50">
              Why environmental friendly cannabis packaging matters to you and
              the planet
            </h2>
            <p className="paragraph">
              Impedit iusto laborum maxime nam natus neque nisi quaerat repellat
              sed, velit voluptatum! Aliquid amet aperiam ea excepturi
              exercitationem expedita, impedit iusto laborum maxime nam natus
              neque nisi quaerat sed, velit voluptatum!
            </p>
          </div>
        </ContentContainer>
      </PageContainer>
    </div>
  );
};

export default Blog;
