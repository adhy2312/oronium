import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "My Blog",
  description: "A modern Next.js Markdown blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        {/* Navbar */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-white/5 border-b border-gray-800">
          <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
            <Link href="/" className="text-2xl font-bold text-teal-400 hover:text-teal-300">
               MyBlog
            </Link>
            <div className="flex gap-6 text-gray-300">
              <Link href="/" className="hover:text-teal-400">Home</Link>
              <Link href="/blog" className="hover:text-teal-400">Blog</Link>
              <Link href="/about" className="hover:text-teal-400">About</Link>
            </div>
          </nav>
        </header>

        {/* Page content */}
        <main className="px-6">{children}</main>

        {/* Footer */}
        <footer className="mt-20 border-t border-gray-800 py-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} My Blog. Built with Next.js ❤️</p>
        </footer>
      </body>
    </html>
  );
}
