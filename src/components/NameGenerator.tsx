"use client";

import { useState, useCallback } from "react";
import NameCard from "./NameCard";
import { generateNames, type NameResult } from "@/lib/nameGenerator";

interface Props {
  slug: string;
}

export default function NameGenerator({ slug }: Props) {
  const [results, setResults] = useState<NameResult[]>(() =>
    generateNames(slug, "all", 10)
  );
  const [gender, setGender] = useState<"male" | "female" | "all">("all");
  const [count, setCount] = useState<10 | 20 | 50>(10);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = useCallback(() => {
    setIsGenerating(true);
    // Small delay for UX feedback
    setTimeout(() => {
      setResults(generateNames(slug, gender, count));
      setIsGenerating(false);
    }, 150);
  }, [slug, gender, count]);

  return (
    <div className="bg-surface-low rounded-3xl p-8">
      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
            Gender
          </label>
          <select
            className="w-full bg-surface-lowest border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 text-on-surface font-medium cursor-pointer appearance-none"
            value={gender}
            onChange={(e) => setGender(e.target.value as typeof gender)}
          >
            <option value="all">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
            Quantity
          </label>
          <select
            className="w-full bg-surface-lowest border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 text-on-surface font-medium cursor-pointer appearance-none"
            value={count}
            onChange={(e) =>
              setCount(Number(e.target.value) as 10 | 20 | 50)
            }
          >
            <option value="10">10 Names</option>
            <option value="20">20 Names</option>
            <option value="50">50 Names</option>
          </select>
        </div>
        <div className="flex items-end">
          <button
            className="w-full bg-secondary-container text-[#251a00] font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-lg disabled:opacity-70"
            onClick={handleGenerate}
            disabled={isGenerating}
          >
            <span className="material-symbols-outlined">
              {isGenerating ? "hourglass_empty" : "refresh"}
            </span>
            {isGenerating ? "Generating..." : "Generate Names"}
          </button>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {results.map((result, i) => (
          <NameCard key={`${result.name}-${i}`} {...result} />
        ))}
      </div>
    </div>
  );
}
