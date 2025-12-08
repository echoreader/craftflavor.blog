import { getAllPosts, getAllCategories } from "../../utils/mdx-utils";
import { getGlobalData } from "../../utils/global-data";
import { siteUrl } from "../../utils/config-utils";

export default function CategoryPage({ posts, slug }) {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-8 lg:text-5xl">
        Category: {slug}
      </h1>

      <div className="grid gap-3">
        {posts.map((post) => {
          const slugPath = post.filePath.replace(/\.mdx?$/, "");
          const postUrl = `${siteUrl}/${slugPath}/`;

          return (
            <div
              key={slugPath}
              className="border border-gray-400 rounded-lg p-6 shadow-sm space-y-4"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                <a href={postUrl} className="text-blue-700 no-underline">
                  {post.data.title}
                </a>
              </h2>

              <p className="mb-3 text-sm font-medium text-gray-600">
                {post.data.date}
              </p>

              {post.data.description && (
                <p className="text-base text-gray-700 leading-relaxed">
                  {post.data.description}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const slug = params.slug;

  const allPosts = getAllPosts();

  // ✅ filter otomatis berdasarkan kategori
  const posts = allPosts.filter(
    (post) => post.data.category === slug
  );

  const globalData = await getGlobalData();

  return {
    props: {
      posts,
      slug,
      globalData,
    },
  };
}

export async function getStaticPaths() {
  // ✅ kategori otomatis dari semua MDX
  const categories = getAllCategories();

  const paths = categories.map((cat) => ({
    params: { slug: cat },
  }));

  return { paths, fallback: false };
}
