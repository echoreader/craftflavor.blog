import Head from 'next/head';
import { useRouter } from 'next/router';

export default function SEO({ title, description }) {
  const router = useRouter();
  const canonicalUrl = `https://craftflavor.blog${router.asPath === '/' ? '' : router.asPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
    </Head>
  );
}
