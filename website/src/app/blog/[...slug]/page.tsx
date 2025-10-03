import { posts } from "#site/content";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx-content";
import Image from "next/image";
interface BlogPostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: BlogPostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((p) => p.slugAsParams === slug);

  if (!post || post.published === false) {
    return null;
  }

  return post;
}

export async function generateStaticParams(): Promise<BlogPostPageProps["params"][]> {
  return posts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      {post.coverImage && (
        <Image 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-64 object-cover rounded-box mb-8" 
        />
      )}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        {post.description && (
          <p className="text-xl text-base-content/70 mb-4">{post.description}</p>
        )}
        <div className="flex items-center gap-4 text-base-content/60">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString()}
          </time>
          {post.author && <span>By {post.author}</span>}
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="flex gap-2 mt-4 flex-wrap">
            {post.tags.map((tag) => (
              <span key={tag} className="badge badge-primary">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      <div className="prose lg:prose-xl max-w-none">
        <MDXContent code={post.content} />
      </div>
    </article>
  );
}
