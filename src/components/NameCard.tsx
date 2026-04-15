'use client';

import { useState } from 'react';

interface NameCardProps {
  name: string;
  meaning: string;
  origin: string;
  gender: string;
  onCopy?: () => void;
}

export default function NameCard({
  name,
  meaning,
  origin,
  gender,
  onCopy,
}: NameCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(name).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative bg-surface-lowest rounded-xl border border-outline-variant p-5 transition-shadow hover:shadow-md hover:border-outline">
      {/* Copy button — appears on hover */}
      <button
        type="button"
        onClick={handleCopy}
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity inline-flex items-center justify-center w-8 h-8 rounded-lg bg-surface-container text-on-surface-variant hover:bg-secondary-container hover:text-secondary transition-colors"
        aria-label={`Copy name: ${name}`}
      >
        <span className="material-symbols-outlined text-lg">
          {copied ? 'check' : 'content_copy'}
        </span>
      </button>

      {/* Name */}
      <h3 className=" text-lg font-bold text-primary mb-2 pr-10">
        {name}
      </h3>

      {/* Details */}
      <div className="space-y-1.5">
        <p className="text-sm text-on-surface leading-relaxed">{meaning}</p>

        <div className="flex items-center gap-4 text-xs text-on-surface-variant">
          <span className="inline-flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">
              public
            </span>
            {origin}
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">
              {gender.toLowerCase() === 'male'
                ? 'male'
                : gender.toLowerCase() === 'female'
                  ? 'female'
                  : 'diversity_3'}
            </span>
            {gender}
          </span>
        </div>
      </div>

      {/* Copied feedback */}
      {copied && (
        <div className="absolute bottom-3 right-3 text-xs text-secondary font-medium">
          Copied!
        </div>
      )}
    </div>
  );
}
