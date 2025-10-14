import { getGlobalData } from '../utils/global-data';
import {
  getNextPostBySlug,
  getPostBySlug,
  getPreviousPostBySlug,
  getPostFilePaths,
} from '../utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import ArrowIcon from '../components/ArrowIcon';
import CustomImage from '../components/CustomImage';
import CustomLink from '../components/CustomLink';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import SEO from '../components/SEO';

const components = {
  a: CustomLink,
  Head,
  img: CustomImage,
};

export default function PostPage({
  source,
  frontMatter,
  prevPost,
  nextPost,
  globalData,
  slug,
}) {
  return (
    <Layout>
      <SEO
        title={`${frontMatter.title} - ${globalData.name}`}
        description={frontMatter.description}
      />

      {/* === HEADER === */}
      <Header name={globalData.name} />

      {/* === MAIN CONTENT === */}
      <main className="w-full max-w-2xl mx-auto px-4 pt-10 pb-20">
        <article data-sb-object-id={`posts/${slug}.mdx`}>
          <header>
            <h1
              className="mb-6 text-3xl text-center md:text-5xl dark:text-white"
              data-sb-field-path="title"
            >
              {frontMatter.title}
            </h1>
            {frontMatter.description && (
              <p
                className="mb-8 text-lg text-center text-gray-600 dark:text-gray-300"
                data-sb-field-path="description"
              >
                {frontMatter.description}
              </p>
            )}
          </header>

          <section
            className="prose dark:prose-invert"
            data-sb-field-path="markdown_content"
          >
            <MDXRemote {...source} components={components} />
          </section>

          {/* === PREV / NEXT NAVIGATION === */}
          <div className="grid mt-12 md:grid-cols-2 gap-4">
            {prevPost && (
              <Link
                href={`/${prevPost.slug}`}
                className="flex flex-col px-6 py-6 border rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-black/30 dark:hover:bg-black/50 transition"
              >
                <p className="mb-2 text-sm uppercase text-gray-500 dark:text-white dark:opacity-60">
                  Previous
                </p>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {prevPost.title}
                </h4>
                <ArrowIcon className="mt-4 transform rotate-180 self-start" />
              </Link>
            )}
            {nextPost && (
              <Link
                href={`/${nextPost.slug}`}
                className="flex flex-col px-6 py-6 border rounded-lg bg-gray-50 hover:bg-gray-100 dark:bg-black/30 dark:hover:bg-black/50 transition"
              >
                <p className="mb-2 text-sm uppercase text-gray-500 dark:text-white dark:opacity-60">
                  Next
                </p>
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {nextPost.title}
                </h4>
                <ArrowIcon className="mt-4 self-end" />
              </Link>
            )}
          </div>
        </article>
      </main>

      {/* === FOOTER === */}
      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const globalData = getGlobalData();
  const { mdxSource, data } = await getPostBySlug(params.slug);
  const prevPost = getPreviousPostBySlug(params.slug);
  const nextPost = getNextPostBySlug(params.slug);

  return {
    props: {
      globalData,
      source: mdxSource,
      frontMatter: data,
      slug: params.slug,
      prevPost,
      nextPost,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = getPostFilePaths()
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
