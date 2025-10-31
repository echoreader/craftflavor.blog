import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

import Schema from '../components/Schema';

export default function About({ globalData }) {
  return (
    <Layout>

<Schema type="profile" />

      {/* === SEO Metadata === */}
      <SEO
        title="About CraftFlavor — Where DIY Meets Culinary Creativity"
        description="CraftFlavor is a creative space for makers who love food and design. We blend DIY tutorials, handmade projects, cooking hacks, and global recipes to inspire flavorful living. Learn more about our mission to craft joy through creativity and cuisine."
      />

      {/* === HEADER === */}
      <Header name={globalData.name} />

      {/* === MAIN CONTENT === */}
      <main className="w-full bg-white text-gray-800 py-10 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 lg:text-5xl">
          About CraftFlavor
        </h1>

        <section className="space-y-4 text-base leading-relaxed">
          <p>
            CraftFlavor celebrates creativity in the kitchen and beyond. From DIY projects and food crafts to cooking hacks and global recipes, we invite you to craft joy through flavor, design, and everyday inspiration.
          </p>

          <p>
            This blog is curated by Echo Reader — a modular content studio exploring niche storytelling across independent domains. 
            <br/>
            <a href="https://echoreader.blog" rel="nofollow noopener" target="_blank">Echo Reader</a>.
          </p>

        </section>
      </main>

      {/* === FOOTER === */}
      <Footer copyrightText={globalData.footerText} />
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();

  return { props: { globalData } };
}
