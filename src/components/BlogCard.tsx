import { BlogPost } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="card overflow-hidden h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image src={post.coverImage} alt={post.title} fill className="object-cover" sizes="100vw" />
      </div>
      <div className="p-5 flex flex-1 flex-col gap-3">
        <p className="text-xs uppercase tracking-wide text-accent">{post.tags.join(" · ")}</p>
        <Link href={`/blog/${post.slug}`} className="text-lg font-semibold hover:text-accent">
          {post.title}
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
        <div className="mt-auto flex items-center gap-2 text-xs text-muted-foreground">
          <Clock size={14} /> {post.readTime} • {new Date(post.date).toDateString()}
        </div>
      </div>
    </article>
  );
}
