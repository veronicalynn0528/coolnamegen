# CoolNameGen GA4 pending setting

Measurement ID G-5X4NEGP0RV. Code candidate not deployed. Local real Google requests show enhanced history page_view independent from send_page_view:false, duplicate route pageviews and previous raw query in automatically generated page_referrer. Only synthetic marker was used. Evidence: shared batch cool-spa-events.json and cool-spa-local.txt. No claim that SPA privacy/dedup passed.

Required: GA4 Admin → Data streams → this web stream → Enhanced measurement settings → Page views → Show advanced settings → turn OFF Page changes based on browser history events; retain Page loads. Veronica operates GA backend per DEPLOYMENT-RULES §8. Explicit async request sent. After she confirms, wait for tag configuration propagation, verify actual g/collect including batched POST events contains only single fixed-path pageviews and no query marker, then independent SHA review and authorized single Vercel Git release.

Official behavior: https://developers.google.com/analytics/devguides/collection/ga4/views?technology=websites . send_page_view:false alone does not disable enhanced history events.
