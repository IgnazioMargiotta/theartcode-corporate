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
import { defaultLang, customersSection, presentationSection, servicesSection, lastArticlesSection, contactSection, headerSection } from "@theartcode/lang/it";

const Home = ({data}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { articles } = data;

  return (
    <>
    <Head>
        <title>Vibra Studio - Where art meets code</title>
        <meta name="description" content="Vibra unisce arte e codice per creare soluzioni software innovative che elevano la tua esperienza digitale. Scopri come trasformiamo le idee in realtà." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <OpenGraph 
          url='string'
          title='Vibra Studio - Where art meets code'
          type='website'
          description='Vibra unisce arte e codice per creare soluzioni software innovative che elevano la tua esperienza digitale. Scopri come trasformiamo le idee in realtà.'
          site_name='Vibra Studio'
        />
      </Head>
      <HeaderSection lang={{...headerSection, defaultLang}} />
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