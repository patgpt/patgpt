import { posts } from "#site/content";
import Link from "next/link";
import { Card, CardBody, CardTitle } from "@/components/atoms";
import Image from "next/image";
export default function BlogPage() {
  const publishedPosts = posts
    .filter((post) => post.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (publishedPosts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12">Blog</h1>
        <p className="text-center text-base-content/70">No blog posts yet.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {publishedPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slugAsParams}`}>
            <Card className="h-full hover:shadow-2xl transition-shadow">
              {post.coverImage && (
                <figure>
                  <Image src={post.coverImage} alt={post.title} className="w-full h-48 object-cover" />
                </figure>
              )}
              <CardBody>
                <CardTitle>{post.title}</CardTitle>
                {post.description && (
                  <p className="text-base-content/80">{post.description}</p>
                )}
                <div className="text-sm text-base-content/60 mt-2">
                  {new Date(post.date).toLocaleDateString()}
                </div>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="badge badge-sm badge-outline">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
