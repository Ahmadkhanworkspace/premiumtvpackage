import React from "react";
import Link from "next/link";
import { BlogPost } from "@/data/blogs";
import { Clock, ArrowRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="group flex flex-col justify-between rounded-2xl border border-card-border bg-card-bg p-6 glass-panel transition-all duration-200 hover:shadow-lg">
      <div>
        <div className="flex items-center justify-between text-xs text-foreground/50 mb-3">
          <span className="font-bold tracking-wider uppercase text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
            {post.category}
          </span>
          <span className="flex items-center space-x-1 font-semibold">
            <Clock className="h-3.5 w-3.5" />
            <span>{post.readTime}</span>
          </span>
        </div>

        <h3 className="text-lg font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-200 mb-2">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="text-sm text-foreground/75 leading-relaxed mb-6">
          {post.summary}
        </p>
      </div>

      <div className="border-t border-card-border/60 pt-4 flex items-center justify-between">
        <span className="text-[10px] text-foreground/40 font-bold uppercase">
          {post.publishedDate}
        </span>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:gap-2 transition-all"
        >
          <span>Read Article</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
