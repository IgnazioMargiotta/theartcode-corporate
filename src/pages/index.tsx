import { InferGetServerSidePropsType } from "next/types";
import Head from "next/head";

// Sections
import {
  HeaderSection,
  PresentationSection,
  CustomersSection,
  PackagePriceSection,
  SkillsSection,
  ServicesSection,
  BrandSection,
  ContactsSection,
  FooterSection,
  LastArticlesSection,
  TeamSection,
} from "@theartcode/sections";

// Components
import { OpenGraph } from "@theartcode/components";

// Utils
import client from "@theartcode/api/apollo-client";
import { FETCH_LIMITED_POSTS } from "@theartcode/api/posts.api";

// Lang
import {
  defaultLang,
  customersSection,
  presentationSection,
  servicesSection,
  lastArticlesSection,
  brandSection,
  contactSection,
  headerSection,
  teamSection,
  packagePriceSection
} from "@theartcode/lang/en";

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { articles } = data;

  return (
    <>
      <Head>
        <title>Vibra Studio - Where art meets code</title>
        <meta
          name="description"
          content="Vibra blends art and code to create innovative software solutions that elevate your digital experience. Discover how we turn ideas into reality."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <OpenGraph
          url="string"
          title="Vibra Studio - Where art meets code"
          type="website"
          description="Vibra blends art and code to create innovative software solutions that elevate your digital experience. Discover how we turn ideas into reality."
          site_name="Vibra Studio"
          locale="en_US"
          image={
            {
              'alt': `Vibra Studio`,
              'type': `image/jpeg`,
              'url': `https://vibra.studio/assets/images/og_vibra.jpg`,
              'width': `1800`,
              'height': `945`
            }
          }
        />
      </Head>
      <HeaderSection lang={{ ...headerSection, defaultLang }} />
      <main>
        <PresentationSection lang={presentationSection} />
        <CustomersSection lang={customersSection} />
        <PackagePriceSection lang={packagePriceSection} />
        <SkillsSection />
        <ServicesSection lang={servicesSection} />
        <TeamSection lang={teamSection} />
        <BrandSection lang={brandSection} />
        <LastArticlesSection articles={articles} lang={lastArticlesSection} />
        <ContactsSection lang={contactSection} />
      </main>
      <FooterSection />
    </>
  );
};

export async function getServerSideProps(context: any): Promise<any> {
  const { data, error, loading } = await client.query({
    query: FETCH_LIMITED_POSTS,
  });

  return {
    props: {
      data,
    },
  };
}

export default Home;
