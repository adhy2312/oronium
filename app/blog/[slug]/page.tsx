import { getAllPosts, getPostBySlug } from "../../../lib/posts";

interface PostPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-6 py-16">
      <article className="prose prose-invert prose-lg max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold text-neon drop-shadow-lg mb-2">
          {post.title}
        </h1>
        <p className="text-gray-400 mb-10">{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </main>
  );
}
