import { InferGetServerSidePropsType } from "next/types";
import Head from "next/head";

// Sections
import { HeaderSection, PresentationSection, CustomersSection, SkillsSection, ServicesSection, ContactsSection, FooterSection, LastArticlesSection } from "@theartcode/sections";

// Components
import { OpenGraph, IubendaScript } from "@theartcode/components";

// Styles 
import styles from './global.module.scss'

// Utils
import client from "@theartcode/api/apollo-client";
import { FETCH_LIMITED_POSTS } from "@theartcode/api/posts.api";

// Lang
import { customersSection, presentationSection, servicesSection, lastArticlesSection, contactSection } from "@theartcode/lang/en";

const Home = ({data}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { articles } = data;

  return (
    <>
    <Head>
        <title>Vibra - Where art meets code</title>
        <meta name="description" content="Vibra blends art and code to create innovative software solutions that elevate your digital experience. Discover how we turn ideas into reality." />
        <link rel="icon" type="image/png"  href="/assets/images/favicon.png" />
        <OpenGraph 
          url='string'
          title='Vibra - Where art meets code'
          type='website'
          description='ibra blends art and code to create innovative software solutions that elevate your digital experience. Discover how we turn ideas into reality.'
          site_name='Vibra'
        />
      </Head>
      <HeaderSection />
      <IubendaScript />
      <main>
        <PresentationSection lang={presentationSection} />
        <CustomersSection lang={customersSection} />
        <SkillsSection />
        <ServicesSection lang={servicesSection} />
        <LastArticlesSection articles={articles} lang={lastArticlesSection} />
        <ContactsSection lang={contactSection} />
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