import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import Schema from '../components/Schema';


export default function Index({ posts, globalData }) {
  return (
    <Layout>

<Schema type="organization" />

      {/* === SEO Metadata === */}
      <SEO
  title="CraftFlavor Blog — Creative DIY & Flavorful Recipes for Everyday Makers"
  description="Welcome to CraftFlavor, where handmade creativity meets culinary inspiration. Explore DIY tutorials, food crafts, cooking hacks, and global recipes designed for curious makers and home chefs who love crafting flavor with heart."
/>


      {/* === HEADER (Menu Navigasi) === */}
      <Header name={globalData.name} />

      {/* === MAIN CONTENT === */}
      <main className="w-full bg-white text-gray-800 py-10 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 lg:text-5xl">
          {globalData.blogTitle} Craft with Flavor — Handmade Joy Meets Kitchen Creativity
        </h1>

        <section className="space-y-4 text-base leading-relaxed">
          <p>
            CraftFlavor celebrates the art of making through DIY projects and culinary inspiration. From food crafts and cooking hacks to handmade design ideas, we invite you to create with heart, flavor, and everyday joy.
          </p>
        </section>
      </main>

      {/* === FOOTER === */}
      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
