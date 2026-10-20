"use client";
import { useEffect } from "react";
export default function Analytics() {
  useEffect(() => {
    if (!document.getElementById("site-analytics")) {
      const script = document.createElement("script");
      script.id = "site-analytics";
      script.src = "/site-analytics.js";
      script.dataset.gaId = document.querySelector<HTMLMetaElement>('meta[name="ga4-measurement-id"]')?.content;
      document.head.appendChild(script);
    }
  }, []);
  return null;
}
