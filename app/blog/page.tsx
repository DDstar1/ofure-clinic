"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import Badge from "@/components/ui/Badge";
import { blogPosts, blogCategories } from "@/lib/blog-data";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-800 to-teal-800 text-white pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
        <div className="relative container-custom text-center">
          <Badge className="mb-5 bg-white/10 border-white/20 text-white">Health Blog</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Health Tips &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-primary-200">
              Medical Insights
            </span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Expert health information written by our clinical team to help you
            and your family make informed healthcare decisions.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === cat
                    ? "bg-primary-600 text-white shadow-sm"
                    : "bg-white text-gray-600 hover:text-primary-600 border border-gray-200 hover:border-primary-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg">No articles in this category yet.</p>
            </div>
          ) : (
            <>
              {/* Featured post */}
              {featured && (
                <Link
                  href={`/blog/${featured.slug}`}
                  className="card-base block overflow-hidden mb-8 group hover:-translate-y-1"
                >
                  <div className="grid md:grid-cols-2">
                    <div className="bg-gradient-to-br from-primary-100 to-teal-50 h-64 md:h-auto flex items-center justify-center">
                      <div className="text-center text-primary-300 p-8">
                        <svg className="w-16 h-16 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm text-primary-400">Featured article image</p>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                          {featured.category}
                        </span>
                        <span className="text-xs text-gray-400 bg-white px-2 py-1 rounded-full border">Featured</span>
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                        {featured.title}
                      </h2>
                      <p className="text-gray-600 text-sm leading-relaxed mb-5">{featured.excerpt}</p>
                      <div className="flex items-center gap-5 text-xs text-gray-400 mb-5">
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{formatDate(featured.date)}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                      </div>
                      <span className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              )}

              {/* Rest of posts */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="card-base flex flex-col overflow-hidden group hover:-translate-y-1"
                  >
                    <div className="bg-gradient-to-br from-primary-50 to-teal-50 h-48 flex items-center justify-center">
                      <div className="text-center text-primary-200">
                        <svg className="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold mb-3">
                        {post.category}
                      </span>
                      <h3 className="font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors leading-snug flex-1">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-400 pt-4 border-t border-gray-100">
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{formatDate(post.date)}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
