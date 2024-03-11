import Script from 'next/script';

export const GoogleAdsScript = () => {
  return (
    <>
      <Script
       id="gtag-fetch-tagmanager"
        src="https://www.googletagmanager.com/gtag/js?id=AW-16485768351"
        strategy="lazyOnload"
      />
      <Script
        id="gtag-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16485768351');
          `,
        }}
      />
    </>
  );
};

export default GoogleAdsScript;
