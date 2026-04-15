import Link from 'next/link';
import { generators, categories, type Category } from '@/data/generators';

const topSlugs = [
  'elf-name-generator',
  'viking-name-generator',
  'rap-name-generator',
  'team-name-generator',
  'cat-name-generator',
  'restaurant-name-generator',
  'middle-name-generator',
  'song-name-generator',
];

const topGenerators = generators.filter((g) => topSlugs.includes(g.slug));

const categoryKeys: Category[] = [
  'fantasy',
  'music',
  'pets',
  'business',
  'personal',
  'teams',
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-fixed mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 — Brand info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary-fixed-dim text-2xl">
                auto_awesome
              </span>
              <span className=" text-lg font-bold text-primary-fixed">
                CoolNameGen
              </span>
            </div>
            <p className="text-sm text-primary-fixed-dim/80 leading-relaxed">
              Free smart name generators for every occasion. Fantasy
              characters, pets, businesses, teams, and more. No signup required.
            </p>
          </div>

          {/* Column 2 — Top Generators */}
          <div>
            <h3 className=" text-sm font-semibold text-primary-fixed uppercase tracking-wider mb-4">
              Top Generators
            </h3>
            <ul className="space-y-2">
              {topGenerators.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/${g.slug}`}
                    className="text-sm text-primary-fixed-dim/80 hover:text-primary-fixed transition-colors"
                  >
                    {g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Categories */}
          <div>
            <h3 className=" text-sm font-semibold text-primary-fixed uppercase tracking-wider mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              {categoryKeys.map((cat) => (
                <li key={cat}>
                  <Link
                    href="/#categories"
                    className="flex items-center gap-2 text-sm text-primary-fixed-dim/80 hover:text-primary-fixed transition-colors"
                  >
                    <span className="material-symbols-outlined text-base">
                      {categories[cat].icon}
                    </span>
                    {categories[cat].label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Legal */}
          <div>
            <h3 className=" text-sm font-semibold text-primary-fixed uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-primary-fixed-dim/80 hover:text-primary-fixed transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-sm text-primary-fixed-dim/80 hover:text-primary-fixed transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-primary-container/40 text-center">
          <p className="text-xs text-primary-fixed-dim/60">
            &copy; {new Date().getFullYear()} CoolNameGen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
