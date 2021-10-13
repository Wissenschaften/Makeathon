import React from 'react';
import type { FC } from 'react';
import Head from 'next/head';

const GoogleAnalytics: FC = () => {

  const gtmId = "GTM-"
  return (
    <>
      {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
      {/* End Google Tag Manager (noscript) */}
    </>
  );
};

export default GoogleAnalytics;