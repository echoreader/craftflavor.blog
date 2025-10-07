import { getAllSlugs, getPostBySlug } from '../utils/mdx-utils';
import { MDXRemote } from 'next-mdx-remote';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function PostPage({ mdxSource, data }) {
  return (
    <Layout>
      <SEO title={data.title} description={data.description} />
      <article className="prose dark:prose-invert mx-auto p-8">
        <h1>{data.title}</h1>
        <p>{data.date}</p>
        <MDXRemote {...mdxSource} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const slugs = getAllSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { mdxSource, data } = await getPostBySlug(params.slug);
  return { props: { mdxSource, data } };
}
