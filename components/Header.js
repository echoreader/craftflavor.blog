import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 py-4">
        
        {/* Kiri: Logo + Nama */}
        <div className="mb-4 sm:mb-0">
          <Link href="/" className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition">
            Echo Reader
          </Link>
        </div>

        {/* Kanan: Menu */}
        <nav className="flex flex-wrap gap-4 sm:gap-6 text-sm font-medium text-gray-700 tracking-wide">
          <Link
            href="/"
            className="px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
