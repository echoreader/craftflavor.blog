import { siteUrl } from "../utils/config-utils"; // ← ambil siteUrl

export default function Footer({ copyrightText }) {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="flex flex-col justify-start text-left">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            All Right Reserved <span className="font-medium">Craftflavor</span>
          </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col md:items-end md:text-right text-left">
          <div className="flex flex-col space-y-1">
            
            <a
              href={`${siteUrl}/contact/`}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Contact
            </a>
            <a
              href={`${siteUrl}/disclaimer/`}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Disclaimer
            </a>
            <a
              href={`${siteUrl}/privacy-policy/`}
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
