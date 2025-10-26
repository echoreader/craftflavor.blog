import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';

export default function SEO({ title, description }) {
  const router = useRouter();
  const canonicalUrl = `https://craftflavor.blog${router.asPath === '/' ? '' : router.asPath}`;

  return (
    <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      <meta name="robots" content="index, follow"/>
    </Head>

     <Script id="skip-analytics" strategy="lazyOnload">
        {`
          if (window.location.search.includes("no-track")) {
            localStorage.setItem("skipAnalytics", "true");
          }

          if (localStorage.getItem("skipAnalytics") !== "true") {
            const cfScript = document.createElement("script");
            cfScript.defer = true;
            cfScript.src = "https://static.cloudflareinsights.com/beacon.min.js";
            cfScript.setAttribute("data-cf-beacon", '{"token": "7699fbd2379d441588fc8971b1541b1c"}');
            document.head.appendChild(cfScript);
          }
        `}
      </Script>
      </>
  );
}
