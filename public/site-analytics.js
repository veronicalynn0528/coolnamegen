(() => {
  const id = document.currentScript?.dataset.gaId;
  if (!/^G-[A-Z0-9]+$/.test(id || '')) return;
  const key = 'coolnamegen.com.analytics-consent.v1';
  const allowedPaths = new Set(["/", "/privacy-policy", "/terms-of-service", "/elf-name-generator", "/viking-name-generator", "/norse-name-generator", "/nord-name-generator", "/nordic-name-generator", "/medieval-name-generator", "/warriors-name-generator", "/elvish-name-generator", "/name-generator-for-elves", "/graffiti-name-generator", "/rap-name-generator", "/rapper-name-generator", "/dj-name-generator", "/song-name-generator", "/podcast-name-generator", "/artist-name-generator", "/cat-name-generator", "/pet-name-generator", "/puppy-name-generator", "/horse-name-generator", "/restaurant-name-generator", "/bakery-name-generator", "/cafe-name-generator", "/diner-name-generator", "/farm-name-generator", "/boat-name-generator", "/middle-name-generator", "/sibling-name-generator", "/email-name-generator", "/combine-name-generator", "/team-name-generator", "/team-name-generator-using-keywords", "/project-name-generator"]);
  const currentPath = () => allowedPaths.has(location.pathname) ? location.pathname : "/404";
  let publicPath = currentPath();
  let lastPagePath = null;
  const pageTitles = {"/": "CoolNameGen — Free Name Generator for Every Occasion", "/privacy-policy": "Privacy Policy — CoolNameGen", "/terms-of-service": "Terms of Service — CoolNameGen", "/404": "Page Not Found — CoolNameGen", "/elf-name-generator": "Elf Name Generator — Free Elven Names for Fantasy", "/viking-name-generator": "Viking Name Generator — Free Norse & Scandinavian Names", "/norse-name-generator": "Norse Name Generator — Free Old Norse Names with Meanings", "/nord-name-generator": "Nord Name Generator — Nordic & Scandinavian Names", "/nordic-name-generator": "Nordic Name Generator — Scandinavian Names for Free", "/medieval-name-generator": "Medieval Name Generator — Free Middle Ages Names", "/warriors-name-generator": "Warriors Name Generator — Epic Fighter & Battle Names", "/elvish-name-generator": "Elvish Name Generator — Free Tolkien-Style Elf Names", "/name-generator-for-elves": "Name Generator for Elves — High, Wood & Dark Elf Names", "/graffiti-name-generator": "Graffiti Name Generator — Free Street Tag & Alias Names", "/rap-name-generator": "Rap Name Generator — Free Hip-Hop Name Maker", "/rapper-name-generator": "Rapper Name Generator — Find Your Hip-Hop Stage Name", "/dj-name-generator": "DJ Name Generator — Free DJ & Producer Name Ideas", "/song-name-generator": "Song Name Generator — Free Song Title Ideas", "/podcast-name-generator": "Podcast Name Generator — Free Show Name Ideas", "/artist-name-generator": "Artist Name Generator — Free Creative Alias Ideas", "/cat-name-generator": "Cat Name Generator — Free Kitten & Cat Name Ideas", "/pet-name-generator": "Pet Name Generator — Free Names for Any Pet", "/puppy-name-generator": "Puppy Name Generator — Free Dog & Puppy Name Ideas", "/horse-name-generator": "Horse Name Generator — Free Equine Name Ideas", "/restaurant-name-generator": "Restaurant Name Generator — Free Dining Name Ideas", "/bakery-name-generator": "Bakery Name Generator — Free Bakery & Café Name Ideas", "/cafe-name-generator": "Cafe Name Generator — Free Coffee Shop Name Ideas", "/diner-name-generator": "Diner Name Generator — Free Restaurant & Diner Names", "/farm-name-generator": "Farm Name Generator — Free Homestead & Ranch Names", "/boat-name-generator": "Boat Name Generator — Free Nautical & Vessel Names", "/middle-name-generator": "Middle Name Generator — Free Middle Name Ideas", "/sibling-name-generator": "Sibling Name Generator — Free Matching Sibling Names", "/email-name-generator": "Email Name Generator — Free Professional Email Ideas", "/combine-name-generator": "Combine Name Generator — Free Name Merger Tool", "/team-name-generator": "Team Name Generator — Free Sports & Group Name Ideas", "/team-name-generator-using-keywords": "Team Name Generator Using Keywords — Custom Team Names", "/project-name-generator": "Project Name Generator — Free Code & Campaign Names"};
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
      page_title: pageTitles[publicPath],
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
    window.gtag('set', {page_location: location.origin + publicPath, page_title: pageTitles[publicPath]});
    window.gtag('event', 'page_view', {page_location: location.origin + publicPath, page_title: pageTitles[publicPath]});
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
