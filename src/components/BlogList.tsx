import { blogPosts } from "@/data/blog";
import { BlogCard } from "./BlogCard";

export function BlogList() {
  return (
    <section className="section-shell py-14">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <p className="tag">Makhana Journal</p>
          <h2 className="text-2xl font-semibold">Stories from Mithila</h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-xl">
          Tips, farmer stories, recipes, and health benefits for the beloved fox nuts of Darbhanga.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
