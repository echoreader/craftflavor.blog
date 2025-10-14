import Link from 'next/link';

export default function Pagination({ currentPage, totalPages }) {
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  return (
    <nav className="flex justify-center items-center gap-4 mt-10 text-sm">
      {/* Prev Button */}
      {prevPage ? (
        <Link
          href={`/blog/page/${prevPage}`}
          className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
        >
          ← Prev
        </Link>
      ) : (
        <span className="px-4 py-2 text-gray-400 cursor-not-allowed">← Prev</span>
      )}

      {/* Page Info */}
      <span className="px-4 py-2 text-gray-600">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next Button */}
      {nextPage ? (
        <Link
          href={`/blog/page/${nextPage}`}
          className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
        >
          Next →
        </Link>
      ) : (
        <span className="px-4 py-2 text-gray-400 cursor-not-allowed">Next →</span>
      )}
    </nav>
  );
}
