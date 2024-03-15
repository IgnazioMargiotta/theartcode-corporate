import Script from 'next/script';

export const IubendaScript = () => {
  return (
    <>
      <Script
        id="iubenda-config"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window._iub = window._iub || [];
            _iub.csConfiguration = {
        "askConsentAtCookiePolicyUpdate":true,
        "enableFadp":true,
        "enableLgpd":true,
        "enableUspr":true,
        "fadpApplies":true,
        "floatingPreferencesButtonDisplay":"bottom-right",
        "lang":"en-GB",
        "perPurposeConsent":true,
        "siteId":3536975,
        "usprApplies":true,
        "whitelabel":false,
        "cookiePolicyId":40428943,
        "banner":{
          "acceptButtonDisplay":true,
          "closeButtonDisplay":false,
          "customizeButtonDisplay":true,
          "explicitWithdrawal":true,
          "listPurposes":true,
          "position":"float-top-center",
          "rejectButtonDisplay":true,
          "showTitle":false
        }
      };`,
        }}
      />
      <Script
        id="iubenda-stub"
        src="https://cdn.iubenda.com/cs/gpp/stub.js"
        strategy="lazyOnload"
      />
      <Script
        id="iubenda-cs"
        src={`https://cdn.iubenda.com/cs/iubenda_cs.js`}
        strategy="lazyOnload"
      />
    </>
  );
};

export default IubendaScript;
