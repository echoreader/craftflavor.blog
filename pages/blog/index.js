import Link from 'next/link';
import { getAllPosts } from '../../utils/mdx-utils';
import { getGlobalData } from '../../utils/global-data';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import ArrowIcon from '../../components/ArrowIcon';
import Schema from '../../components/Schema';
import { siteUrl } from "../../utils/config-utils";

export default function BlogPage({ posts, globalData }) {
  return (
    <Layout>
      <Schema type="bloglist" data={{ posts }} />
      <SEO
        title="CraftFlavor Articles — DIY Tutorials, Food Crafts & Flavorful Projects"
        description="Explore CraftFlavor curated articles on handmade projects, cooking hacks, and food-inspired crafts. From kitchen creativity to practical design ideas."
      />
      <Header name={globalData.name} />
      <main className="w-full bg-white text-gray-800 py-10 px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 lg:text-5xl">All Posts</h1>
        <ul className="grid gap-8">
          {posts.map((post) => {
            const slug = post.filePath.replace(/\.mdx?$/, '');
            const postUrl = `${siteUrl}/${slug}/`;
            return (
              <li key={slug} className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition px-6 py-6">
                {/* Tanggal di luar anchor */}
                <p className="mb-2 text-xs font-semibold uppercase text-gray-500" aria-hidden="true">
                  {post.data.date || 'Date not available'}
                </p>

                {/* Judul sebagai anchor */}
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  <a
                    href={postUrl}
                    aria-label={`Read Article: ${post.data.title}`}
                    className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    {post.data.title}
                  </a>
                </h2>

                {/* Deskripsi di luar anchor */}
                {post.data.description && (
                  <p className="text-gray-600 text-sm">{post.data.description}</p>
                )}

                {/* Icon tetap di luar anchor */}
                <ArrowIcon className="mt-4 text-blue-500" />
              </li>
            );
          })}
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  const globalData = await getGlobalData();
  return {
    props: { posts, globalData },
  };
}
