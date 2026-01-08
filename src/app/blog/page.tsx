import { blogPosts } from "@/data/blog";
import { BlogCard } from "@/components/BlogCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mithila Makhana Blog",
  description: "Benefits, farmer stories, and recipes featuring authentic Mithila makhana.",
};

export default function BlogPage() {
  return (
    <div className="section-shell py-14 space-y-6">
      <div>
        <p className="tag">Blog</p>
        <h1 className="text-3xl font-semibold">Makhana stories & recipes</h1>
        <p className="text-muted-foreground">Stay updated with Mithila harvests, wellness guides, and kitchen inspiration.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
