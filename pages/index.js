import Link from "next/link";
import Schema from '../components/Schema';
import { siteUrl } from "../utils/site";

export default function Index() {
  return (
    <>
      <Schema type="organization"/>

      <h1 className="text-3xl font-bold text-center mb-8 lg:text-5xl">
        Craft with Flavor — Handmade Joy Meets Kitchen Creativity
      </h1>
      <section className="space-y-4 text-base leading-relaxed">
        <p>
          CraftFlavor celebrates the art of making through DIY projects and culinary inspiration. From food crafts and cooking hacks to handmade design ideas, we invite you to create with heart, flavor, and everyday joy.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8 mb-10">
        {/* Cooking Recipes */}
        <div className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition space-y-2">
          <h3 className="text-lg font-semibold text-gray-900 leading-tight">
            <a
              href={`${siteUrl}/category/cooking-recipes/`}
              className="text-blue-700 no-underline focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Cooking Recipes
            </a>
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Step-by-step recipes, cooking techniques, and flavorful dishes you can easily make at home.
          </p>
        </div>

        {/* Food & Drink */}
        <div className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition space-y-2">
          <h3 className="text-lg font-semibold text-gray-900 leading-tight">
            <a
              href={`${siteUrl}/category/food-drink/`}
              className="text-blue-700 no-underline focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Food & Drink
            </a>
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Explore beverages, snacks, ingredients, and food culture from around the world.
          </p>
        </div>

        {/* Culinary Training */}
        <div className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition space-y-2">
          <h3 className="text-lg font-semibold text-gray-900 leading-tight">
            <a
              href={`${siteUrl}/category/culinary-training/`}
              className="text-blue-700 no-underline focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Culinary Training
            </a>
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Learn essential cooking skills, kitchen fundamentals, and professional culinary techniques.
          </p>
        </div>
      </div>

      <div className="flex justify-center mb-16">
        <Link 
          href="/blog/" 
          className="px-6 py-3 border rounded font-semibold hover:bg-gray-50 transition"
        >
          Explore All Posts
        </Link>
      </div>

    </>
  );
}

Index.meta = {
  title: 'CraftFlavor Blog — Creative DIY & Flavorful Recipes for Everyday Makers',
  description: 'Welcome to CraftFlavor, where handmade creativity meets culinary inspiration. Explore DIY tutorials, food crafts, cooking hacks.',
};