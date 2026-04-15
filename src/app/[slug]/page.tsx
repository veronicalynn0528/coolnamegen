import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";
import NameGenerator from "@/components/NameGenerator";
import {
  getGeneratorBySlug,
  getRelatedGenerators,
  generators,
} from "@/data/generators";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return generators.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const gen = getGeneratorBySlug(slug);
  if (!gen) return {};
  return {
    title: gen.seoTitle,
    description: gen.seoDescription,
  };
}

export default async function GeneratorPage({ params }: Props) {
  const { slug } = await params;
  const gen = getGeneratorBySlug(slug);
  if (!gen) notFound();

  const related = getRelatedGenerators(slug, 4);

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-6 md:px-8 pt-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Content */}
          <div className="lg:col-span-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-on-surface-variant mb-6">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <Link
                href="/#categories"
                className="hover:text-primary transition-colors"
              >
                {gen.category.charAt(0).toUpperCase() + gen.category.slice(1)}
              </Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-primary font-medium">{gen.title}</span>
            </nav>

            {/* Header */}
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl  font-black text-primary tracking-[-0.04em] mb-4 leading-tight">
                {gen.title}
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl">
                {gen.subtitle}
              </p>
            </div>

            {/* Generator Tool */}
            <NameGenerator slug={gen.slug} />

            {/* Ad Slot */}
            <div className="my-12">
              <AdSlot size="728x90" />
            </div>

            {/* SEO Content */}
            <article className="prose max-w-none">
              <h2 className="text-3xl  font-bold text-primary mb-6">
                About {gen.title}
              </h2>
              <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                <p>
                  Choosing the right name is one of the most important steps in any creative or business project. A great{" "}
                  <strong className="text-primary">{gen.keyword}</strong> tool can save you hours
                  of brainstorming and help you discover names you never would have
                  considered on your own.
                </p>
                <p>
                  Our {gen.keyword} uses a curated database of authentic, culturally
                  rich names to generate suggestions that are both unique and meaningful.
                  Whether you&apos;re naming a character for a novel, a pet, a business,
                  or a creative project, the right name adds depth and personality
                  to whatever you&apos;re building.
                </p>
                <p>
                  Browse our full range of name generators below to find the perfect
                  match for your needs — all free, instant, and requiring no signup.
                </p>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Related Generators */}
            <div className="bg-surface-low rounded-3xl p-8">
              <h3 className="text-2xl  font-bold text-primary mb-6">
                Try These Next
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/${rel.slug}`}
                    className="group flex items-center gap-4 p-4 bg-surface-lowest rounded-2xl hover:bg-primary hover:text-white transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-surface-high flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-xl text-primary group-hover:text-white">
                        {rel.icon}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold  text-sm">
                        {rel.title}
                      </div>
                      <div className="text-xs text-on-surface-variant group-hover:text-white/70">
                        {rel.volume.toLocaleString()} searches/mo
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar Ad */}
            <AdSlot size="300x250" />
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}



