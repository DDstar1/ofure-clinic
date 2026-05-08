import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag, User } from "lucide-react";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import { CLINIC } from "@/lib/constants";
import { formatDate } from "@/lib/utils";
import Badge from "@/components/ui/Badge";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function renderContent(markdown: string) {
  const lines = markdown.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) { key++; continue; }

    if (line.startsWith("### ")) {
      elements.push(<h3 key={key++} className="text-xl font-bold text-gray-900 mt-8 mb-3">{line.slice(4)}</h3>);
    } else if (line.startsWith("## ")) {
      elements.push(<h2 key={key++} className="text-2xl font-bold text-gray-900 mt-10 mb-4">{line.slice(3)}</h2>);
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(<p key={key++} className="font-bold text-gray-900 mt-5 mb-2">{line.slice(2, -2)}</p>);
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      i--;
      elements.push(
        <ul key={key++} className="list-disc list-inside space-y-1.5 my-4 text-gray-700 text-[15px]">
          {items.map((item, j) => <li key={j}>{item}</li>)}
        </ul>
      );
    } else {
      elements.push(<p key={key++} className="text-gray-700 leading-relaxed text-[15px] mt-4">{line}</p>);
    }
  }
  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-800 to-teal-800 text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
        <div className="relative container-custom max-w-4xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <Badge className="mb-4 bg-white/10 border-white/20 text-white">{post.category}</Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-white/60 text-sm">
            <span className="flex items-center gap-2"><User className="w-4 h-4" />{post.author}</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{formatDate(post.date)}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Image placeholder */}
      <div className="bg-gradient-to-br from-primary-50 to-teal-50 border-b border-gray-100">
        <div className="container-custom max-w-4xl py-0">
          <div className="h-64 md:h-96 flex items-center justify-center text-primary-200">
            <div className="text-center">
              <svg className="w-20 h-20 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm text-primary-400">Featured image for: {post.title}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="grid lg:grid-cols-[1fr_280px] gap-12">
            {/* Article */}
            <article>
              <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-primary-200 pl-5 mb-8 italic">
                {post.excerpt}
              </p>
              <div>{renderContent(post.content)}</div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-gray-100">
                <Tag className="w-4 h-4 text-gray-400 mt-0.5" />
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs hover:bg-primary-100 hover:text-primary-700 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 bg-gradient-to-br from-primary-600 to-teal-600 rounded-2xl p-7 text-white text-center">
                <h3 className="text-xl font-bold mb-2">Have Questions About Your Health?</h3>
                <p className="text-white/80 text-sm mb-5">
                  Our experienced clinical team is here to help. Book a consultation at Ofure Clinic today.
                </p>
                <Link href="/appointment" className="inline-flex items-center gap-2 bg-white text-primary-700 hover:bg-primary-50 font-semibold px-6 py-3 rounded-full transition-all">
                  Book an Appointment
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="card-base p-5">
                <h3 className="font-bold text-gray-900 mb-4">About the Author</h3>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center text-white font-bold text-sm shrink-0">OC</div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{post.author}</p>
                    <p className="text-xs text-gray-500">Ofure Clinic & Maternity Home</p>
                  </div>
                </div>
              </div>

              {related.length > 0 && (
                <div className="card-base p-5">
                  <h3 className="font-bold text-gray-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link key={r.slug} href={`/blog/${r.slug}`} className="group block">
                        <p className="text-sm font-medium text-gray-800 group-hover:text-primary-600 transition-colors leading-snug mb-1">
                          {r.title}
                        </p>
                        <p className="text-xs text-gray-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />{r.readTime}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
                <h3 className="font-bold text-red-700 text-sm mb-2">Medical Emergency?</h3>
                <p className="text-xs text-red-600 mb-3">Call our 24/7 emergency line immediately.</p>
                <a href={CLINIC.PHONE_HREF} className="flex items-center justify-center gap-2 bg-red-600 text-white font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-red-700 transition-colors">
                  Call Now
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
