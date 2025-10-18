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
  title="Echo Reader – Curated Insights on People & Society"
  description="Echo Reader connects readers to thoughtful Blogspot content on human stories, social dynamics, and cultural perspectives curated for depth and empathy."
/>


      {/* === HEADER (Menu Navigasi) === */}
      <Header name={globalData.name} />

      {/* === MAIN CONTENT === */}
      <main className="w-full bg-white text-gray-800 py-10 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 lg:text-5xl">
          {globalData.blogTitle}
        </h1>

        <section className="space-y-4 text-base leading-relaxed">
          <p>
            Welcome! I’m Echo Reader, a passionate Blogger and the architect behind the Echo Reader Blog Network. I believe in the power of targeted, high-quality content to drive engagement and deliver real value.
          </p>

          <p className="font-semibold">My Approach to Content:</p>

          <p>
            My digital footprint spans over ten distinct, actively-maintained niches. This segmented approach allows for maximum SEO impact, superior audience targeting, and specialized content creation. I don’t just write; I craft unique voices designed to inform, inspire, and build trust within each specific community.
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
