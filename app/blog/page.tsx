import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts().slice(0, 3); // latest 3 posts

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">
        <h1 className="text-6xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 drop-shadow-lg">
          Welcome to My Blog 🚀
        </h1>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl">
          Thoughts, tutorials, and stories on <span className="text-teal-400">Next.js</span>, 
          <span className="text-blue-400"> React</span>, and web development.
        </p>
        <div className="mt-8 flex gap-4">
          <Link
            href="/blog"
            className="px-6 py-3 rounded-lg bg-teal-500 text-black font-semibold shadow-lg hover:bg-teal-400 transition"
          >
            View Blog
          </Link>
          <Link
            href="/about"
            className="px-6 py-3 rounded-lg border border-gray-600 hover:border-teal-400 transition"
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">Latest Posts</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="group p-6 rounded-xl border border-gray-800 bg-white/5 backdrop-blur-md shadow-lg hover:scale-[1.03] transition-transform"
            >
              <h3 className="text-2xl font-semibold group-hover:text-teal-400">
                {post.title}
              </h3>
              <p className="text-sm text-gray-400">{post.date}</p>
              <p className="mt-3 text-gray-300">{post.excerpt}</p>
              <span className="mt-4 inline-block text-teal-400 font-semibold group-hover:underline">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
