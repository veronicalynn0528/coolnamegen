# GA4 dependency reachability · 2026-10-19

- Advisory: https://github.com/advisories/GHSA-vfj7-8cjw-p6xm ; braces <=3.0.3, no patched version on npm at review time. Requires deeply nested attacker-controlled brace patterns reaching recursive glob AST processing.
- Current npm audit: 7 high nodes, one underlying braces advisory. All critical/other advisories resolved by Next 16.4.2, patch lock updates and postcss-selector-parser 7.1.6 override. Do not claim audit zero.
- `npm ls braces --all` shows tailwindcss devDependency via chokidar/micromatch. Runtime has only next/react/react-dom. Tailwind content glob fixed in tailwind.config.js: `./src/**/*.{js,ts,jsx,tsx}`; no network/database/request-derived build content or patterns. No CI workflow accepting user patterns.
- Build runs only trusted committed project config and sources. Names are curated client-side; route slugs are fixed and unknown slugs rejected. New API reads only platform country header, calls no glob module.
- All 12 emitted `.next/**/*.nft.json` deployment traces exclude braces, micromatch, fast-glob and tailwindcss. No related imports in emitted server JS. Browser assets are compiled JS/CSS; build dependencies are not served.
- Evidence: output/ga4/audit-final.json, braces-dependency-tree.txt, runtime-dependency-traces.json; npm build passed. Independent reviewer must confirm caller/data-flow and deployment-trace conclusions before release. This is a scoped unreachable finding, not user risk acceptance or a transferable exception. Re-evaluate if user-supplied glob/build patterns, dynamic build sources, dev-server exposure, or runtime glob dependency is introduced; upgrade when upstream patch is available.

## Local build secret scan classification

Full local tree scan found only Next-generated RSC/preview keys inside .next/cache/.rscinfo, .next/cache/.previewinfo, .next/prerender-manifest.json, .next/server/preview-props.json and .next/server/server-reference-manifest.json. Values were redacted. These are framework-generated local build artifacts, excluded by .gitignore; no source env/provider credentials involved. Git source snapshot scan, browser .next/static scan and .next/server/app (HTML/RSC/routes) scan each return zero. Production is built by existing Vercel Git integration from reviewed source; local .next is never uploaded or committed. Server-only framework manifests are not public files.

## Browser regression correction

First tool-page render exposed existing random initial-name SSR/client mismatch (React418). Server now generates initialResults once and serializes them to the client; route key resets appropriate generator state on navigation. Click Generate still uses the same local algorithm. No provider call, paid operation, input analytics or new data sink.
