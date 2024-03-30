import { useState, useEffect } from "react";
import Head from "next/head";
import { HeaderSection, FooterSection } from "@theartcode/sections";
import { Button } from "@theartcode/components";
import { OpenGraph } from "@theartcode/components";
import Image from "next/image";

// Lang
import {
  defaultLang,
  headerSection,
} from "@theartcode/lang/en";

const NotFoundPage: React.FC = () => {
  const [mainHeight, setMainHeight] = useState("100dvh");

  useEffect(() => {
    const headerElement = document.querySelector("header");
    const footerElement = document.querySelector("footer");

    if (headerElement && footerElement) {
      const headerHeight = headerElement.offsetHeight;
      const footerHeight = footerElement.offsetHeight;
      const windowHeight = window.innerHeight;

      const mainHeight = windowHeight - headerHeight - footerHeight;
      setMainHeight(`${mainHeight}px`);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Vibra Studio - 404 Page</title>
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
      <main className="grid place-items-center" style={{ minHeight: mainHeight }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[3rem] md:gap-[5rem] items-center place-items-center py-16 my-16 md:my-0">
            <div className="text-center md:text-left">
              <h1 className="pb-4">404 Page</h1>
              <p className="pb-8">
                This page appears to be missing.
              </p>
              <Button
                link="/"
                text="Return back"
                style="fill"
                color="main2"
              />
            </div>
            <div>
              <Image
                src={`/assets/images/404.svg`}
                width={300}
                height={400}
                alt="artCode"
                className="w-[60%] md:w-[100%] mx-auto"
              />
            </div>
          </div>
        </div>
      </main>
      <FooterSection />
    </>
  );
};

export default NotFoundPage;
