/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export as static HTML (no server-side rendering)
  output: 'export',

  // Ensure all routes end with trailing slash (for SEO consistency)
  trailingSlash: true,

  // Disable image optimization (use raw <img> or external CDN)
  images: {
    unoptimized: true,
  },

  // Optional: disable Fast Refresh if it's unstable
  // experimental: {
  //   reactRefresh: false
  // }
};

module.exports = nextConfig;
