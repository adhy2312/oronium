import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkRehype from "remark-rehype";
import rehypePrism from "rehype-prism-plus";
import rehypeStringify from "rehype-stringify"; // ✅ we will keep it, but must install

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as { date: string; title: string }),
    };
  });
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(remarkRehype) // convert md → HTML AST
    .use(rehypePrism) // add syntax highlighting
    .use(rehypeStringify) // convert AST → HTML string
    .process(matterResult.content);

  return {
    slug,
    contentHtml: processedContent.toString(),
    ...(matterResult.data as { date: string; title: string }),
  };
}
