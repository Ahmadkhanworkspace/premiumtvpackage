import React from "react";
import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import SEOContentBlock from "@/components/SEOContentBlock";
import { blogsData } from "@/data/blogs";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Premium TV Packages Blog & Guides | IPTV Setup Reviews",
  description: "Read the latest guides and articles about streaming. Learn how to choose premium packages, follow FIFA schedules, set up IPTV in South Africa, Brazil, USA, Mexico, and Canada.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-semibold text-primary">
          <BookOpen className="h-4 w-4" />
          <span>Guides, Tips & Articles</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Streaming Guides & SEO Blog
        </h1>
        <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
          Stay informed on streaming technologies, configuration tips, sports channel guides, and recommendations for global viewers.
        </p>
      </div>

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogsData.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {/* SEO Content Block */}
      <SEOContentBlock
        title="Streaming Advice & Football TV Guides for Global Cord Cutters"
        description="Choosing a television setup can be complicated due to fragmented broadcasting rights. Our technical blog provides detailed reviews of compatible hardware, step-by-step app instructions, and timezone schedule updates to ensure soccer fans in South Africa, Brazil, USA, Mexico, and Canada never miss live matchday coverages."
        keywords={[
          "premium IPTV packages",
          "football IPTV package",
          "soccer IPTV package",
          "IPTV South Africa",
          "IPTV Brazil",
          "IPTV USA",
          "IPTV Mexico",
          "IPTV Canada"
        ]}
      />

    </div>
  );
}
