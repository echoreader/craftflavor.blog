"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4">
        {/* Baris atas: Echo Reader + ☰ */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-semibold text-gray-900 hover:text-blue-600 transition"
          >
            Echo Reader
          </Link>

          {/* ☰ hanya muncul di mobile */}
          <button
            className="flex flex-col justify-center gap-1 sm:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
          </button>

          {/* Menu desktop */}
          <nav className="hidden sm:flex gap-6 text-sm font-medium text-gray-700 tracking-wide">
            <Link href="/" className="px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition">Home</Link>
            <Link href="/blog" className="px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition">Blog</Link>
            <Link href="/about" className="px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition">About</Link>
          </nav>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <nav className="flex flex-col gap-4 mt-4 text-sm font-medium text-gray-700 tracking-wide sm:hidden">
            <Link href="/" className="px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition">Home</Link>
            <Link href="/blog" className="px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition">Blog</Link>
            <Link href="/about" className="px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition">About</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
