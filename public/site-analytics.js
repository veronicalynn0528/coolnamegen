(() => {
  const id = document.currentScript?.dataset.gaId;
  if (!/^G-[A-Z0-9]+$/.test(id || '')) return;
  const key = 'coolnamegen.com.analytics-consent.v1';
  const allowedPaths = new Set(["/", "/privacy-policy", "/terms-of-service", "/elf-name-generator", "/viking-name-generator", "/norse-name-generator", "/nord-name-generator", "/nordic-name-generator", "/medieval-name-generator", "/warriors-name-generator", "/elvish-name-generator", "/name-generator-for-elves", "/graffiti-name-generator", "/rap-name-generator", "/rapper-name-generator", "/dj-name-generator", "/song-name-generator", "/podcast-name-generator", "/artist-name-generator", "/cat-name-generator", "/pet-name-generator", "/puppy-name-generator", "/horse-name-generator", "/restaurant-name-generator", "/bakery-name-generator", "/cafe-name-generator", "/diner-name-generator", "/farm-name-generator", "/boat-name-generator", "/middle-name-generator", "/sibling-name-generator", "/email-name-generator", "/combine-name-generator", "/team-name-generator", "/team-name-generator-using-keywords", "/project-name-generator"]);
  const currentPath = () => allowedPaths.has(location.pathname) ? location.pathname : "/404";
  let publicPath = currentPath();
  let lastPagePath = null;
  let choice = readChoice();
  let region = 'unknown';
  let loaded = false;
  let panel;
  window['ga-disable-' + id] = true;

  function readChoice() {
    try { return localStorage.getItem(key); } catch { return null; }
  }
  function clearCookies() {
    const domains = ['', location.hostname, '.' + location.hostname];
    for (const cookie of document.cookie.split(';')) {
      const name = cookie.split('=')[0].trim();
      if (!/^(_ga|_clck$|_clsk$)/.test(name)) continue;
      for (const domain of domains) {
        document.cookie = name + '=; Max-Age=0; Path=/; SameSite=Lax' + (domain ? '; Domain=' + domain : '');
      }
    }
  }
  const consent = (granted) => ({
    analytics_storage: granted ? 'granted' : 'denied',
    ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'
  });
  function apply() {
    const granted = region !== 'unknown' && choice !== 'denied' && (choice === 'granted' || region === 'default');
    window['ga-disable-' + id] = !granted;
    if (!granted) {
      if (loaded) window.gtag('consent', 'update', consent(false));
      clearCookies();
      return;
    }
    if (loaded) {
      window.gtag('consent', 'update', consent(true));
      pageView();
      return;
    }
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', consent(false));
    window.gtag('consent', 'update', consent(true));
    window.gtag('js', new Date());
    // Only fixed public page paths are reported. Never send input, query strings or hashes.
    const path = publicPath;
    let referrer = '';
    try { referrer = document.referrer ? new URL(document.referrer).origin + '/' : ''; } catch { /* No referrer. */ }
    window.gtag('config', id, {
      page_location: location.origin + path,
      page_referrer: referrer,
      page_title: document.title,
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
    pageView();
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
    document.head.appendChild(tag);
  }
  function pageView() {
    if (!loaded || window['ga-disable-' + id] || lastPagePath === publicPath) return;
    lastPagePath = publicPath;
    window.gtag('set', {page_location: location.origin + publicPath, page_title: document.title});
    window.gtag('event', 'page_view', {page_location: location.origin + publicPath, page_title: document.title});
  }
  window.addEventListener('analytics-page', () => { publicPath = currentPath(); pageView(); });
  function show() {
    if (panel) { panel.hidden = false; return; }
    panel = document.createElement('section');
    panel.className = 'analytics-consent';
    panel.setAttribute('aria-label', 'Analytics privacy settings');
    panel.innerHTML = '<p>Allow Google Analytics cookies to help us understand site usage? Your files and tool inputs are never sent. You can change your choice below at any time. <a href="/privacy-policy">Privacy details</a></p><div><button type="button" data-choice="granted">Allow</button><button type="button" data-choice="denied">Decline</button><button type="button" data-close>Close</button></div>';
    panel.addEventListener('click', (event) => {
      const button = event.target.closest('button');
      if (!button) return;
      if (button.dataset.choice) {
        choice = button.dataset.choice;
        try { localStorage.setItem(key, choice); } catch { /* Choice still applies for this page. */ }
        apply();
      }
      panel.hidden = true;
    });
    document.body.appendChild(panel);
  }
  document.addEventListener('click', event => { if (event.target.closest('[data-privacy-settings]')) show(); });
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) {
      choice = readChoice();
      apply();
      if (region !== 'default' && !choice) show();
    }
  });
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);
  fetch('/api/consent-region', { cache: 'no-store', signal: controller.signal })
    .then(response => { if (!response.ok) throw new Error('Region unavailable'); return response.json(); })
    .then(data => { region = data.region === 'default' ? 'default' : data.region === 'strict' ? 'strict' : 'unknown'; })
    .catch(() => { region = 'unknown'; })
    .finally(() => {
      clearTimeout(timeout);
      choice = readChoice() || choice;
      apply();
      if (region !== 'default' && !choice) show();
    });
})();
