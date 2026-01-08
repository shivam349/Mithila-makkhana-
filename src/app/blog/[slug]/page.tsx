import { blogPosts } from "@/data/blog";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post not found" };
  return { title: `${post.title} | Mithila Makhana Blog`, description: post.excerpt, keywords: post.tags };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="section-shell py-14 space-y-6">
      <div className="space-y-2">
        <p className="tag">{post.tags.join(" · ")}</p>
        <h1 className="text-3xl font-semibold">{post.title}</h1>
        <p className="text-sm text-muted-foreground">
          {new Date(post.date).toDateString()} • {post.readTime}
        </p>
      </div>
      <div className="relative h-72 w-full rounded-2xl overflow-hidden">
        <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
      </div>
      <p className="text-lg leading-8 text-foreground whitespace-pre-line">{post.content}</p>
    </div>
  );
}
