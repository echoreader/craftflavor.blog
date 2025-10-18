import Head from 'next/head';

export default function Schema({ type, data = {} }) {
  const schemas = {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Echo Reader",
      "url": "https://echoreader.netlify.app",
      "logo": "https://echoreader.netlify.app/logo.png",
      "sameAs": [
        "https://blogspot.com/echo-reader",
        "https://twitter.com/echoreader"
      ]
    },
    bloglist: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Echo Reader Blog",
      "url": `https://echoreader.netlify.app/blog/page/${data.currentPage || 1}`,
      "description": "Browse curated articles from Echo Reader on people, relationships, and society.",
      "hasPart": Array.isArray(data.posts)
        ? data.posts.map((post) => ({
            "@type": "BlogPosting",
            "headline": post.data.title || "Untitled",
            "datePublished": post.data.date || "2025-01-01",
            "url": `https://echoreader.netlify.app/${post.filePath.replace(/\.mdx?$/, '')}`
          }))
        : [],
      "publisher": {
        "@type": "Organization",
        "name": "Echo Reader"
      }
    },
    blogpost: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": data.title || "Untitled Post",
      "description": data.description || "No description available",
      "datePublished": data.date || "2025-01-01",
      "author": {
        "@type": "Person",
        "name": "Echo"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": data.url || "https://echoreader.netlify.app/blog"
      }
    },
    profile: {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Echo",
      "url": "https://echoreader.netlify.app/about",
      "sameAs": [
        "https://blogspot.com/echo-reader",
        "https://twitter.com/echoreader"
      ]
    }
  };

  const selectedSchema = schemas[type];

  if (!selectedSchema) return null;

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(selectedSchema)}
      </script>
    </Head>
  );
}
