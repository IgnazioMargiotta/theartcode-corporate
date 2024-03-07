export const GoogleAdsScript = () => {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16485768351"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16485768351');
          `,
        }}
      ></script>
    </>
  );
};

export default GoogleAdsScript;
