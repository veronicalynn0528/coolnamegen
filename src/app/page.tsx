import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";
import { generators, categories } from "@/data/generators";

const popularGenerators = generators
  .filter((g) => g.volume >= 2000)
  .sort((a, b) => b.volume - a.volume)
  .slice(0, 8);

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Section 1: Hero */}
        <section className="hero-pattern relative overflow-hidden py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 lg:pr-12">
              <h1 className="text-5xl md:text-7xl font-black text-primary font-headline leading-[1.1] tracking-[-3%] mb-6">
                Cool Name Generator —{" "}
                <span className="text-primary-container">35+ Free Generators</span>
              </h1>
              <p className="text-xl text-on-surface-variant font-body max-w-xl mb-10 leading-relaxed">
                35+ name generators. Pick a category, hit generate, get inspired.
                The perfect name is just one click away.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/rap-name-generator"
                  className="px-8 py-4 bg-secondary-container text-on-secondary-container font-bold text-lg rounded-xl shadow-lg hover:brightness-105 transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-xl">
                    auto_awesome
                  </span>
                  Try Random Generator
                </Link>
                <a
                  href="#categories"
                  className="px-8 py-4 bg-surface-lowest text-primary font-bold text-lg rounded-xl border border-outline-variant/20 hover:bg-surface-low transition-all"
                >
                  Browse Categories
                </a>
              </div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/50 rotate-3 transform-gpu">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-surface-container">
                    <span className="font-label text-xs tracking-widest text-on-surface-variant uppercase">
                      Latest Result
                    </span>
                    <span className="material-symbols-outlined text-primary/30">
                      colors_spark
                    </span>
                  </div>
                  <div className="text-4xl font-headline font-black text-primary">
                    Aetheric Forge
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                      Fantasy
                    </span>
                    <span className="px-3 py-1 bg-secondary-container/30 text-on-secondary-container text-xs font-bold rounded-full">
                      Business
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 bg-primary p-6 rounded-3xl shadow-2xl -rotate-6 transform-gpu hidden lg:block">
                <div className="text-white text-3xl font-black font-headline">
                  Vikingr
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Category Grid */}
        <section id="categories" className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex justify-between items-end mb-16">
              <div>
                <span className="font-label text-sm tracking-widest text-primary/60 uppercase block mb-2">
                  The Directory
                </span>
                <h2 className="text-4xl font-headline font-black text-primary">
                  Pick Your Name Generator
                </h2>
              </div>
              <a
                className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline"
                href="#"
              >
                View All Categories
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(Object.keys(categories) as (keyof typeof categories)[]).map(
                (catKey) => {
                  const cat = categories[catKey];
                  const count = generators.filter(
                    (g) => g.category === catKey
                  ).length;
                  return (
                    <div
                      key={catKey}
                      className="group p-8 rounded-3xl bg-surface-lowest hover:bg-surface-low transition-all duration-300"
                    >
                      <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-3xl">
                          {cat.icon}
                        </span>
                      </div>
                      <h3 className="text-2xl font-headline font-bold text-primary mb-2">
                        {cat.label}
                      </h3>
                      <p className="text-on-surface-variant font-body mb-6">
                        {cat.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-primary/40">
                          {count} Generators
                        </span>
                        <a
                          href="#"
                          className="font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                        >
                          Explore
                          <span className="material-symbols-outlined text-sm">
                            arrow_forward
                          </span>
                        </a>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </section>

        {/* Section 3: Popular Generators */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-4xl font-headline font-black text-primary mb-12 text-center">
              Most Popular Generators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {popularGenerators.map((g) => (
                <Link
                  key={g.slug}
                  href={`/${g.slug}`}
                  className="bg-surface-lowest p-5 rounded-2xl flex items-center justify-between hover:scale-[1.02] transition-transform shadow-sm"
                >
                  <div>
                    <div className="font-bold font-headline text-primary">
                      {g.title.replace(" Generator", "")}
                    </div>
                    <div className="text-xs text-on-surface-variant font-medium font-body">
                      {g.volume.toLocaleString()} searches/mo
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Ad Slot */}
        <div className="bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
            <div className="max-w-[728px] mx-auto">
              <AdSlot size="728x90" />
            </div>
          </div>
        </div>

        {/* Section 4: SEO Content */}
        <section className="py-24 bg-surface overflow-hidden">
          <div className="max-w-4xl mx-auto px-8 relative">
            <div className="absolute -left-20 top-0 text-[200px] font-black text-surface-container select-none -z-10 opacity-50 font-headline">
              WHY
            </div>
            <h2 className="text-4xl font-headline font-black text-primary mb-10">
              Why Use a Name Generator?
            </h2>
            <div className="space-y-6 text-lg text-on-surface-variant font-body leading-relaxed">
              <p>
                Naming something is one of the hardest parts of the creative
                process. Whether you are building a{" "}
                <strong className="text-primary">new business brand</strong>,
                writing an epic fantasy novel, or simply welcoming a new puppy
                into your home, the right name carries weight and identity. Our
                Smart algorithms analyze linguistic patterns and cultural
                trends to provide suggestions that feel authentic and memorable.
              </p>
              <p>
                Using a{" "}
                <strong className="text-primary">
                  dedicated name generator
                </strong>{" "}
                saves hours of brainstorming and prevents creative block.
                Instead of staring at a blank page, you can instantly cycle
                through hundreds of curated ideas tailored to your specific
                niche. From the syllables in a Viking warrior&apos;s name to the
                modern punchiness of a tech startup, we handle the complex
                phonetic heavy lifting so you can focus on building.
              </p>
              <p>
                At{" "}
                <strong className="text-primary">CoolNameGen</strong>, we pride
                ourselves on diversity and depth. Our tools aren&apos;t just
                random letter jumbles; they are semantic systems designed to
                evoke emotion. Browse our 35+ specialized categories and find
                a name that resonates with your vision, backed by the largest
                database of creative naming resources on the web.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
