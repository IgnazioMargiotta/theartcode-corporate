import { InferGetServerSidePropsType } from "next/types";
import Head from "next/head";

// Sections
import { HeaderSection, PresentationSection, CustomersSection, SkillsSection, ServicesSection, FooterSection, LastArticles } from "@theartcode/sections";

// Components
import OpenGraph from "@theartcode/components/open-graph/open-graph.component";

// Styles 
import styles from './global.module.scss'

// Utils
import client from "@theartcode/api/apollo-client";
import { FETCH_LIMITED_POSTS } from "@theartcode/api/posts.api";
import { MainContactForm } from "@theartcode/components";


const Home = ({data}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { articles } = data;

  return (
    <>
    <Head>
        <title>The artCode - Where art meets code</title>
        <meta name="description" content="The artCode Web App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png"  href="/assets/images/favicon.png" />
        <OpenGraph 
          url='string'
          title='The artCode - Where art meets code'
          type='website'
          description='Where art meets code'
          site_name='The artCode'
        />
      </Head>
      <HeaderSection />
      <main>
        <PresentationSection />
        <CustomersSection />
        <SkillsSection />
        <ServicesSection />
        <LastArticles articles={articles} />
        <MainContactForm />
      </main>
      <FooterSection />
    </>
  );
}

export async function getServerSideProps(context: any): Promise<any> {

  const { data, error, loading } = await client.query({
    query: FETCH_LIMITED_POSTS,
  });

  return {
    props: {
      data,
    }
  }
}

export default Home