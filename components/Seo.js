import Head from 'next/head';

export default function Seo({
  title = "Modern Next.js Blog",
  description = "A pixel‑perfect blog built with Next.js, SSR, React Query, and Tailwind CSS.",
  image = "/og-image.png",
  url = "https://your-deployment-url.vercel.app"
}) {
  const fullTitle = title ? `${title} | Modern Next.js Blog` : "Modern Next.js Blog";

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
