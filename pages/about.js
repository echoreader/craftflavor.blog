import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function About({ posts, globalData }) {
  return (
    <Layout>
      {/* === SEO Metadata === */}
      <SEO
  title="About Echo Reader – Human Centered Blog Curator"
  description="Echo Reader curates backlinks to Blogspot content focused on people and society building a thoughtful network of stories, voices, and shared experiences."
/>


      {/* === HEADER === */}
      <Header name={globalData.name} />

      {/* === MAIN CONTENT === */}
      <main className="w-full bg-white text-gray-800 py-10 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 lg:text-5xl">
          About Echo Reader
        </h1>

        <section className="space-y-4 text-base leading-relaxed">
          <p>
            Echo Reader is a passionate writer, SEO strategist, and digital creator behind a growing network of niche blogs. With a focus on clarity, consistency, and audience-first content, Echo crafts digital experiences that inform, inspire, and build trust.
          </p>

          <p>
            The Echo Reader Blog Network spans multiple niches from beauty and business to DIY, travel, and health. Each blog is designed to deliver high-quality, targeted content that resonates with its specific audience.
          </p>

          <p>
            Whether you are here to learn, explore, or collaborate, Echo Reader is committed to creating content with purpose.
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
