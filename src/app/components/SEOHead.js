// components/SEOHead.js

import Head from 'next/head';
import Script from 'next/script';

const SEOHead = ({ title, description, ogImage, twitterImage, url, structuredData }) => {
  const siteTitle = title ? `${title} | YourSiteName` : 'YourSiteName';
  const defaultDescription = 'Your default description here.';
  // ... rest remains unchanged

  return (
    <Head>
      {/* ... other head tags */}
      {structuredData && (
        <Script
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
};

export default SEOHead;
