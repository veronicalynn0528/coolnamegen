'use client';

import { useState } from 'react';
import { categories, type Category } from '@/data/generators';
import Link from 'next/link';

const navCategories: Category[] = [
  'fantasy',
  'music',
  'pets',
  'business',
  'personal',
  'teams',
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface-lowest/95 backdrop-blur-sm border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="material-symbols-outlined text-primary text-2xl">
              auto_awesome
            </span>
            <span className=" text-xl font-bold text-primary">
              CoolNameGen
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-1">
            {navCategories.map((cat) => (
              <Link
                key={cat}
                href={`/#categories`}
                className="px-3 py-2 rounded-lg text-sm font-medium text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
              >
                {categories[cat].label}
              </Link>
            ))}
          </nav>

          {/* Right side: badge + hamburger */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container text-xs font-semibold text-secondary">
              <span className="material-symbols-outlined text-sm">
                verified
              </span>
              100% Free
            </span>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-outline-variant bg-surface-lowest">
          <div className="px-4 py-3 space-y-1">
            {navCategories.map((cat) => (
              <Link
                key={cat}
                href={`/#categories`}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="material-symbols-outlined text-lg">
                  {categories[cat].icon}
                </span>
                {categories[cat].label}
              </Link>
            ))}
          </div>
          <div className="px-4 pb-3">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container text-xs font-semibold text-secondary">
              <span className="material-symbols-outlined text-sm">
                verified
              </span>
              100% Free
            </span>
          </div>
        </nav>
      )}
    </header>
  );
}
