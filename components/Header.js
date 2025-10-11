import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="flex items-center justify-between px-6 py-6">
  {/* Kiri: Logo + Nama */}
  <div className="flex items-center gap-4">
    {/* D<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-blue-400" /> */}
    <Link href="/" className="text-2xl font-semibold dark:text-white">
      Echo Reader
    </Link>
  </div>

  {/* Kanan: Menu */}
  <nav className="flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
    <Link href="/" className="hover:text-blue-500 transition">Home</Link>
    <Link href="/blog" className="hover:text-blue-500 transition">Blog</Link>
    <Link href="/about" className="hover:text-blue-500 transition">About</Link>
  </nav>
</header>

  );
}
