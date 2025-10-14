import Link from 'next/link';
import { getPaginatedPosts } from '../../../utils/mdx-utils';
import { getGlobalData } from '../../../utils/global-data';

import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import SEO from '../../../components/SEO';
import ArrowIcon from '../../../components/ArrowIcon';
import Pagination from '../../../components/Pagination';

const POSTS_PER_PAGE = 5;

export default function BlogPage({ posts, currentPage, totalPages, globalData }) {
  return (
    <Layout>
      <SEO title={`${globalData.name} | Blog Page ${currentPage}`} description={globalData.blogTitle} />
      <Header name={globalData.name} />

      <main className="w-full bg-white text-gray-800 py-10 px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 lg:text-5xl">All Posts</h1>

        <ul className="grid gap-8">
          {posts.map((post) => {
            const slug = post.filePath.replace(/\.mdx?$/, '');

            return (
              <li key={slug} className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                <Link
                  as={`/${slug}`}
                  href="/[slug]"
                  aria-label={`Baca artikel: ${post.data.title}`}
                  className="block px-6 py-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <p className="mb-2 text-xs font-semibold uppercase text-gray-500">
                    {post.data.date || 'Tanggal tidak tersedia'}
                  </p>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="text-gray-600 text-sm">{post.data.description}</p>
                  )}
                  <ArrowIcon className="mt-4 text-blue-500" />
                </Link>
              </li>
            );
          })}
        </ul>

        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </main>

      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const { totalPages } = getPaginatedPosts(POSTS_PER_PAGE, 1);

  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const page = parseInt(params.page);
  const { posts, totalPages } = getPaginatedPosts(POSTS_PER_PAGE, page);
  const globalData = getGlobalData();

  return {
    props: {
      posts,
      currentPage: page,
      totalPages,
      globalData,
    },
  };
}
