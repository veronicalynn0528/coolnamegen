"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export default function Analytics() {
  const pathname = usePathname();
  useEffect(() => {
    if (!document.getElementById("site-analytics")) {
      const script = document.createElement("script");
      script.id = "site-analytics";
      script.src = "/site-analytics.js";
      script.dataset.gaId = document.querySelector<HTMLMetaElement>('meta[name="ga4-measurement-id"]')?.content;
      document.head.appendChild(script);
    }
    window.dispatchEvent(new Event("analytics-page"));
  }, [pathname]);
  return null;
}
