export default function Footer({ copyrightText }) {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 py-12 mt-16">
      <div className="max-w-2xl mx-auto px-4 flex flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase text-gray-600 dark:text-gray-400 tracking-wide mb-4">
          {copyrightText}
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          Powered by{' '}
        
            Echo Reader
        {' '} 
          | {' '}
          <a
            href="https://borncraft.blogspot.com/"
            target="_blank"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Born Craft
          </a> {' '}
          | {' '}
          <a
            href="https://cookmanyrecipe.blogspot.com/"
            target="_blank"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Cook Many Recipe
          </a>
        </p>
      </div>
    </footer>
  );
}
