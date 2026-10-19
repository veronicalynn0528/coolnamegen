import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
export const metadata: Metadata = { title: "Page Not Found — CoolNameGen", robots: { index: false, follow: true } };
export default function NotFound() {
  return <><Header /><main className="max-w-4xl mx-auto px-8 py-20"><h1 className="text-4xl font-bold text-primary">Page not found</h1><p className="mt-6">This page is unavailable. <Link href="/" className="underline">Browse name generators</Link></p></main><Footer /></>;
}
