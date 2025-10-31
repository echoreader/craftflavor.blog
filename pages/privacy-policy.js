import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ globalData }) {
  return (
    <Layout>

      {/* === SEO Metadata === */}
      <SEO
        title="Privacy Policy"
        description="Learn how I collect, use, and protect your data while you browse this informational blog."
      />

      {/* === HEADER (Menu Navigasi) === */}
      <Header name={globalData.name} />

      {/* === MAIN CONTENT === */}
      <main className="w-full bg-white text-gray-800 py-10 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 lg:text-5xl">
          {globalData.blogTitle} Privacy Policy
        </h1>

        <section className="space-y-4 text-base leading-relaxed">
          <p>This Privacy Policy explains how I collect, use, and protect your information when you visit this blog.</p>

  <h2>1. Information Collection</h2>
  <p>I do not collect personal information unless you voluntarily provide it, such as through a contact form or email.</p>

  <h2>2. Cookies and Third-Party Services</h2>
  <p>This blog uses cookies and may display ads served by Google AdSense or other third-party networks. These services may use cookies to personalize ads based on your browsing behavior.</p>

  <h2>3. Data Usage</h2>
  <p>Any data you provide is used solely to respond to your inquiries or improve the blog experience. I do not sell or share your data with others.</p>

  <h2>4. External Links</h2>
  <p>This blog may contain links to external websites. I am not responsible for the privacy practices or content of those sites.</p>

  <h2>5. Consent</h2>
  <p>By using this blog, you consent to this Privacy Policy.</p>

  <h2>6. Updates</h2>
  <p>This policy may be updated at any time. Please check this page periodically for changes.</p>
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
