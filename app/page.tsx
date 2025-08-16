import Link from "next/link";

export default function HomePage() {
  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-4">My Blog 🚀</h1>
      <p className="mb-6 text-gray-600">
        Welcome to my blog! Click below to see posts.
      </p>
      <Link
        href="/blog"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        View Blog Posts
      </Link>
    </main>
  );
}
