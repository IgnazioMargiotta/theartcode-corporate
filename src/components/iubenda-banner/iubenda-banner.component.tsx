import { useEffect } from 'react';

export const IubendaScript = () => {
  useEffect(() => {
    
    const configScript = document.createElement('script');
    configScript.type = 'text/javascript';
    configScript.innerHTML = `
      var _iub = _iub || [];
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
      };
    `;
    document.head.appendChild(configScript);

    const autoblockingScript = document.createElement('script');
    autoblockingScript.type = 'text/javascript';
    autoblockingScript.src = 'https://cs.iubenda.com/autoblocking/3536975.js';
    document.head.appendChild(autoblockingScript);

    const stubScript = document.createElement('script');
    stubScript.type = 'text/javascript';
    stubScript.src = '//cdn.iubenda.com/cs/gpp/stub.js';
    document.head.appendChild(stubScript);

    const csScript = document.createElement('script');
    csScript.type = 'text/javascript';
    csScript.src = '//cdn.iubenda.com/cs/iubenda_cs.js';
    csScript.charset = 'UTF-8';
    csScript.async = true;
    document.head.appendChild(csScript);

    return () => {
      document.head.removeChild(configScript);
      document.head.removeChild(autoblockingScript);
      document.head.removeChild(stubScript);
      document.head.removeChild(csScript);
    };
  }, []);

  return null;
};

export default IubendaScript;
