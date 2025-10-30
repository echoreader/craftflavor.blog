
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';


export default function Index({ posts, globalData }) {
  return (
    <Layout>

      {/* === SEO Metadata === */}
      <SEO
        title="Contact"
        description="Get in touch with me for questions, feedback, or collaboration opportunities."
      />

      {/* === HEADER (Menu Navigasi) === */}
      <Header name={globalData.name} />

      {/* === MAIN CONTENT === */}
      <main className="w-full bg-white text-gray-800 py-10 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 lg:text-5xl">
          {globalData.blogTitle} Contact
        </h1>

        <section className="space-y-4 text-base leading-relaxed">
          <p>If you have any questions, suggestions, or would like to get in touch, feel free to contact me using the information below.</p>

  <h2>Email</h2>
  <p>tom dot bisnis at gmail dot com</p>

  <h2>Feedback</h2>
  <p>I welcome constructive feedback and collaboration ideas. Please reach out if you would like to connect.</p>
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
