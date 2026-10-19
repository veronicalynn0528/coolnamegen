export function consentRegion(request, trusted = false) {
      const country = trusted ? (request.headers.get("x-vercel-ip-country") || "").toUpperCase() : "";
      const strict = new Set(["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH"]);
      const known = /^[A-Z]{2}$/.test(country) && !["XX", "ZZ", "T1"].includes(country);
      const headers = { "Content-Type": "application/json", "Cache-Control": "private, no-store", "CDN-Cache-Control": "no-store", "Vary": "x-vercel-ip-country", "X-Content-Type-Options": "nosniff" };
      if (!["GET", "HEAD"].includes(request.method)) return new Response(null, { status: 405, headers: { ...headers, Allow: "GET, HEAD" } });
      return new Response(request.method === "HEAD" ? null : JSON.stringify({ region: !known ? "unknown" : strict.has(country) ? "strict" : "default" }), { headers });
}
