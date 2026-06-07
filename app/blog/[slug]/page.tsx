import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogsData } from "@/data/blogs";
import { getWhatsAppLink } from "@/data/config";
import { ArrowLeft, Clock, Calendar, MessageCircle, HelpCircle } from "lucide-react";

// In Next.js 15, params is a Promise
interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {
  const { slug } = await params;
  const post = blogsData.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedDate,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const whatsappLink = getWhatsAppLink(`Hello! I read your article "${post.title}" and would like to get more information about compatible sports TV packages.`);

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
      
      {/* Back to Blog Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-xs font-bold text-foreground/60 hover:text-primary transition-colors mb-4"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        <span>Back to All Articles</span>
      </Link>

      {/* Article Header */}
      <div className="space-y-4 border-b border-card-border/60 pb-6">
        <span className="inline-block rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
          {post.category}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
          {post.title}
        </h1>
        
        {/* Meta Info */}
        <div className="flex flex-wrap gap-4 text-xs text-foreground/50 font-semibold pt-2">
          <div className="flex items-center space-x-1">
            <Calendar className="h-3.5 w-3.5" />
            <span>Published: {post.publishedDate}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="prose dark:prose-invert max-w-none text-foreground/85 text-sm sm:text-base leading-relaxed space-y-6">
        <div 
          dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br/>").replace(/<br\/><br\/>/g, "</p><p>").replace(/## (.*)/g, "<h2 class='text-2xl font-bold text-foreground tracking-tight mt-8 mb-4'>$1</h2>").replace(/### (.*)/g, "<h3 class='text-xl font-bold text-foreground tracking-tight mt-6 mb-3'>$1</h3>").replace(/\[(.*)\]\((.*)\)/g, "<a href='$2' class='text-primary hover:underline font-bold'>$1</a>") }} 
        />
      </article>

      {/* CTA Box */}
      <div className="rounded-3xl border border-card-border bg-card-bg p-6 sm:p-8 glass-panel space-y-6 mt-12">
        <div className="space-y-2">
          <h3 className="text-xl font-extrabold text-foreground tracking-tight">
            Need Help Setting Up Your Football or Entertainment Package?
          </h3>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Our technical support representatives are online 24/7 on WhatsApp. We can help you select the ideal billing plan, configure your media players (Firestick, Smart TV, Android Box), and verify regional channel lists.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <Link
            href="/packages"
            className="inline-flex items-center justify-center rounded-xl bg-primary hover:bg-primary/95 text-white px-6 py-3 text-sm font-bold shadow-md shadow-primary-glow text-center"
          >
            Browse Premium Packages
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-card-border bg-card-bg hover:bg-emerald-500 hover:text-white hover:border-emerald-600 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200"
          >
            <MessageCircle className="h-4.5 w-4.5" />
            <span>Chat about this article on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Compliance Disclaimer */}
      <div className="rounded-xl border border-card-border bg-card-bg/40 p-4 text-xs text-foreground/50 leading-relaxed flex gap-3">
        <HelpCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
        <div>
          <strong>Compliance Disclaimer:</strong> Availability of sports channels, match schedules, and broadcaster links varies depending on local telecommunication licenses. Our blog posts are for technical guidance purposes only. Contact support via WhatsApp to check the current lineup for your country code.
        </div>
      </div>

    </div>
  );
}
