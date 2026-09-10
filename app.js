/* Mina Café – Rendering & Illustrationen */
(function () {
  const TONES = {
    berry:     { a: "#C4324F", b: "#8E1E3A", light: "#F2A6B6" },
    mango:     { a: "#F3B33D", b: "#D98A1C", light: "#FFE29A" },
    choco:     { a: "#7A4A2A", b: "#4E2C16", light: "#C9A27E" },
    peanut:    { a: "#C99A5B", b: "#9B6F3A", light: "#F0D6B0" },
    pistachio: { a: "#9DB56A", b: "#6E8848", light: "#D6E4B3" },
    lotus:     { a: "#C98A4B", b: "#9A6432", light: "#F0CFA3" },
    oreo:      { a: "#3A3532", b: "#1E1B19", light: "#D9D3CC" },
    classic:   { a: "#7A9A4F", b: "#56733A", light: "#C6D8A0" },
    blueberry: { a: "#5B5FA8", b: "#3B3F7A", light: "#B9BCE6" },
    raspberry: { a: "#D64A6E", b: "#A02C50", light: "#F5B9CA" },
    spanish:   { a: "#B07A4E", b: "#7E5230", light: "#E7C9A8" },
    mocha:     { a: "#C39A6C", b: "#8F6A44", light: "#F0DFC8" },
    caramel:   { a: "#C58A45", b: "#8F5F2A", light: "#F1D3A6" },
    pesto:     { a: "#7E9A45", b: "#5A7130", light: "#C9D9A0" }
  };
  const tone = (t) => TONES[t] || TONES.berry;
  let uid = 0;

  /* ---------- shared bits ---------- */
  const sticker = (cx, cy, r) => `
    <g>
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="#E9DECB" opacity=".96"/>
      <path d="M${cx - r * .28} ${cy - r * .42} a ${r * .28} ${r * .28} 0 0 1 ${r * .56} 0" fill="none" stroke="#B58A55" stroke-width="1.4"/>
      <text x="${cx}" y="${cy + r * .18}" text-anchor="middle" font-family="Bodoni Moda, Playfair Display, serif" font-size="${r * .62}" fill="#4E5A38" font-weight="500">Mina</text>
      <text x="${cx}" y="${cy + r * .55}" text-anchor="middle" font-family="Jost, sans-serif" font-size="${r * .2}" letter-spacing="${r * .06}" fill="#B58A55">CAFÉ</text>
    </g>`;

  const cupDefs = (id, t) => `
    <defs>
      <clipPath id="cup${id}"><path d="M32 46 L52 236 A48 12 0 0 0 148 236 L168 46 Z"/></clipPath>
      <linearGradient id="glass${id}" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#fff" stop-opacity=".55"/><stop offset=".25" stop-color="#fff" stop-opacity=".05"/>
        <stop offset=".8" stop-color="#fff" stop-opacity=".05"/><stop offset="1" stop-color="#fff" stop-opacity=".45"/>
      </linearGradient>
      <linearGradient id="acai${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5A1E3E"/><stop offset="1" stop-color="#3E1330"/></linearGradient>
      <linearGradient id="tone${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${t.a}"/><stop offset="1" stop-color="${t.b}"/></linearGradient>
    </defs>`;

  const cupShell = (id) => `
    <path d="M32 46 L52 236 A48 12 0 0 0 148 236 L168 46 Z" fill="url(#glass${id})"/>
    <path d="M32 46 L52 236 A48 12 0 0 0 148 236 L168 46" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="2"/>
    <ellipse cx="100" cy="46" rx="70" ry="14" fill="none" stroke="#fff" stroke-opacity=".9" stroke-width="3"/>
    <ellipse cx="100" cy="250" rx="52" ry="8" fill="#3B452B" opacity=".18"/>`;

  /* ---------- illustrations ---------- */
  function bowl(t) {
    const id = ++uid;
    return `<svg viewBox="0 0 200 270" role="img" aria-hidden="true">
      ${cupDefs(id, t)}
      <ellipse cx="100" cy="252" rx="60" ry="9" fill="#3B452B" opacity=".18"/>
      <g clip-path="url(#cup${id})">
        <rect x="0" y="0" width="200" height="270" fill="url(#acai${id})"/>
        <rect x="0" y="120" width="200" height="34" fill="#C9A06E"/>
        <g fill="#E4C08F">${Array.from({length: 40}, (_, i) => `<circle cx="${20 + (i * 37) % 170}" cy="${124 + (i * 13) % 26}" r="${2.2 + (i % 3)}"/>`).join("")}</g>
        <rect x="0" y="200" width="200" height="70" fill="url(#tone${id})"/>
        <rect x="0" y="0" width="200" height="270" fill="url(#glass${id})"/>
      </g>
      ${cupShell(id)}
      <!-- toppings -->
      <ellipse cx="100" cy="46" rx="66" ry="13" fill="#4A1734"/>
      <g>
        <ellipse cx="66" cy="42" rx="12" ry="7" fill="#F4EBDC"/><ellipse cx="80" cy="34" rx="10" ry="6" fill="#FFF7EA"/>
        <circle cx="52" cy="46" r="7" fill="#2E2E6E"/><circle cx="64" cy="52" r="6" fill="#3A3C8A"/><circle cx="43" cy="53" r="5" fill="#2E2E6E"/>
        <path d="M112 30 c 12 -2 20 8 16 18 c -4 10 -18 12 -24 4 c -5 -8 -1 -20 8 -22z" fill="#D8324D"/>
        <path d="M132 34 c 10 -2 18 6 15 15 c -3 9 -16 10 -21 4 c -4 -7 -1 -17 6 -19z" fill="#E2405B"/>
        <ellipse cx="146" cy="50" rx="11" ry="7" fill="#F3DC8A"/><ellipse cx="146" cy="50" rx="5" ry="3" fill="#E9C868"/>
        <ellipse cx="128" cy="55" rx="10" ry="6" fill="#F7E49A"/>
        <g fill="#9DB56A"><circle cx="92" cy="40" r="2.4"/><circle cx="100" cy="34" r="2.2"/><circle cx="106" cy="44" r="2.6"/><circle cx="96" cy="50" r="2"/><circle cx="86" cy="30" r="2"/></g>
        <g fill="#D14B6A"><circle cx="88" cy="46" r="2"/><circle cx="104" cy="28" r="2"/><circle cx="76" cy="44" r="1.8"/><circle cx="118" cy="50" r="2"/></g>
      </g>
      ${sticker(100, 178, 30)}
    </svg>`;
  }

  function matcha(t, kind) {
    const id = ++uid;
    const isClassic = kind === "classic";
    return `<svg viewBox="0 0 200 270" role="img" aria-hidden="true">
      ${cupDefs(id, t)}
      <defs>
        <linearGradient id="mg${id}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#7E9E4E"/><stop offset=".42" stop-color="#8FAE5C"/><stop offset=".62" stop-color="#EDEFE0"/><stop offset=".78" stop-color="#F6F1E6"/>
          <stop offset=".86" stop-color="${isClassic ? "#F6F1E6" : t.light}"/><stop offset="1" stop-color="${isClassic ? "#EDEFE0" : t.a}"/>
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="252" rx="60" ry="9" fill="#3B452B" opacity=".18"/>
      <g clip-path="url(#cup${id})">
        <rect x="0" y="0" width="200" height="270" fill="url(#mg${id})"/>
        <path d="M40 150 c 30 -20 50 20 80 -4 s 30 10 50 0 v 40 c -30 10 -60 -14 -90 4 s -30 -6 -40 -2z" fill="#fff" opacity=".35"/>
        <g fill="#fff" opacity=".28"><rect x="52" y="50" width="26" height="22" rx="6"/><rect x="92" y="44" width="30" height="24" rx="6"/><rect x="128" y="56" width="24" height="20" rx="6"/><rect x="74" y="74" width="24" height="18" rx="5"/></g>
        <rect x="0" y="0" width="200" height="270" fill="url(#glass${id})"/>
      </g>
      ${cupShell(id)}
      <ellipse cx="100" cy="46" rx="66" ry="13" fill="#7E9E4E"/>
      ${isClassic ? "" : `<g fill="${t.a}"><circle cx="86" cy="44" r="4"/><circle cx="104" cy="38" r="3.4"/><circle cx="116" cy="47" r="3.6"/><circle cx="96" cy="50" r="2.6"/><circle cx="76" cy="50" r="2.4"/></g>`}
      ${sticker(100, 168, 30)}
    </svg>`;
  }

  function coffee(t) {
    const id = ++uid;
    return `<svg viewBox="0 0 200 270" role="img" aria-hidden="true">
      ${cupDefs(id, t)}
      <defs>
        <linearGradient id="cf${id}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#F7F1E7"/><stop offset=".22" stop-color="#F7F1E7"/><stop offset=".3" stop-color="${t.a}"/><stop offset=".68" stop-color="${t.b}"/><stop offset=".85" stop-color="${t.light}"/><stop offset="1" stop-color="#F5EFE4"/>
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="252" rx="60" ry="9" fill="#3B452B" opacity=".18"/>
      <g clip-path="url(#cup${id})">
        <rect x="0" y="0" width="200" height="270" fill="url(#cf${id})"/>
        <path d="M60 120 c 10 40 0 70 8 110 h 20 c -6 -40 6 -70 -4 -110z" fill="#fff" opacity=".22"/>
        <path d="M120 130 c 12 40 -6 70 6 110 h 14 c -8 -40 6 -70 -6 -110z" fill="#fff" opacity=".18"/>
        <rect x="0" y="0" width="200" height="270" fill="url(#glass${id})"/>
      </g>
      ${cupShell(id)}
      <path d="M40 48 c 4 -18 20 -26 34 -22 c 6 -14 26 -16 34 -6 c 12 -10 30 -4 32 10 c 12 0 22 10 18 20 z" fill="#FBF6EE"/>
      <path d="M52 44 c 6 -10 16 -12 24 -8 c 6 -8 20 -8 26 0 c 10 -6 22 -2 24 8" fill="none" stroke="#EBDFCB" stroke-width="2" stroke-linecap="round"/>
      ${sticker(100, 178, 30)}
    </svg>`;
  }

  function smoothie(t) {
    const id = ++uid;
    return `<svg viewBox="0 0 200 270" role="img" aria-hidden="true">
      ${cupDefs(id, t)}
      <ellipse cx="100" cy="252" rx="60" ry="9" fill="#3B452B" opacity=".18"/>
      <g clip-path="url(#cup${id})">
        <rect x="0" y="0" width="200" height="270" fill="url(#tone${id})"/>
        <path d="M30 90 c 30 -18 60 18 90 -2 s 40 8 60 0 v 30 c -30 10 -60 -14 -90 4 s -40 -6 -60 -2z" fill="#fff" opacity=".25"/>
        <rect x="0" y="0" width="200" height="270" fill="url(#glass${id})"/>
      </g>
      ${cupShell(id)}
      <ellipse cx="100" cy="46" rx="66" ry="13" fill="${t.light}"/>
      <rect x="118" y="-6" width="10" height="120" rx="5" transform="rotate(12 123 54)" fill="#4E5A38"/>
      <rect x="118" y="-6" width="10" height="120" rx="5" transform="rotate(12 123 54)" fill="url(#glass${id})"/>
      ${sticker(100, 172, 30)}
    </svg>`;
  }

  function croffle(t) {
    const id = ++uid;
    return `<svg viewBox="0 0 220 200" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="cr${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E4B36E"/><stop offset="1" stop-color="#B8762E"/></linearGradient>
        <linearGradient id="tone${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${t.a}"/><stop offset="1" stop-color="${t.b}"/></linearGradient>
        <clipPath id="crc${id}"><path d="M40 60 q 70 -50 140 0 q 30 40 0 80 q -70 50 -140 0 q -30 -40 0 -80z"/></clipPath>
      </defs>
      <ellipse cx="110" cy="176" rx="82" ry="12" fill="#3B452B" opacity=".18"/>
      <path d="M40 60 q 70 -50 140 0 q 30 40 0 80 q -70 50 -140 0 q -30 -40 0 -80z" fill="url(#cr${id})"/>
      <g clip-path="url(#crc${id})" stroke="#8E5A22" stroke-opacity=".55" stroke-width="3">
        ${[0,1,2,3,4,5].map(i => `<line x1="${34 + i * 30}" y1="10" x2="${34 + i * 30}" y2="190"/>`).join("")}
        ${[0,1,2,3,4].map(i => `<line x1="10" y1="${44 + i * 28}" x2="210" y2="${44 + i * 28}"/>`).join("")}
      </g>
      <path d="M62 84 c 24 -22 62 -20 84 4 c 14 16 8 42 -16 50 c -22 6 -54 4 -70 -12 c -12 -12 -10 -32 2 -42z" fill="url(#tone${id})" opacity=".95"/>
      <path d="M70 70 c 20 10 40 -6 60 6 s 30 0 44 8" fill="none" stroke="#FFF9EE" stroke-width="4" stroke-linecap="round" opacity=".9"/>
      <g fill="#FFF9EE" opacity=".9"><circle cx="58" cy="60" r="2"/><circle cx="90" cy="48" r="1.6"/><circle cx="150" cy="52" r="2"/><circle cx="170" cy="86" r="1.6"/><circle cx="120" cy="140" r="1.8"/></g>
      <g fill="${t.light}"><circle cx="96" cy="100" r="4"/><circle cx="124" cy="92" r="3.4"/><circle cx="112" cy="116" r="3"/><circle cx="138" cy="112" r="3.6"/></g>
    </svg>`;
  }

  function pancakes(t) {
    const id = ++uid;
    const layer = (y) => `<ellipse cx="110" cy="${y}" rx="64" ry="18" fill="#E5B56E"/><ellipse cx="110" cy="${y - 6}" rx="64" ry="18" fill="#F1CB8A"/>`;
    return `<svg viewBox="0 0 220 200" role="img" aria-hidden="true">
      <defs><linearGradient id="tone${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${t.a}"/><stop offset="1" stop-color="${t.b}"/></linearGradient></defs>
      <ellipse cx="110" cy="176" rx="82" ry="12" fill="#3B452B" opacity=".18"/>
      <ellipse cx="110" cy="164" rx="92" ry="16" fill="#F4EBDC"/>
      ${layer(150)}${layer(126)}${layer(102)}
      <path d="M62 84 c 20 -14 76 -14 96 0 c 6 14 -4 22 -14 20 c -8 8 -18 -2 -26 4 c -10 -6 -24 6 -32 -2 c -10 4 -20 -6 -24 -22z" fill="url(#tone${id})" opacity=".92"/>
      <path d="M70 92 c 16 6 24 -8 40 2 s 30 -6 44 2" fill="none" stroke="#FFF9EE" stroke-width="3.5" stroke-linecap="round" opacity=".9"/>
      <g fill="${t.light}"><circle cx="84" cy="84" r="4"/><circle cx="120" cy="78" r="4.4"/><circle cx="146" cy="88" r="3.8"/><circle cx="104" cy="94" r="3"/></g>
      <g fill="#fff" opacity=".85"><circle cx="76" cy="70" r="1.6"/><circle cx="108" cy="64" r="1.4"/><circle cx="140" cy="70" r="1.6"/><circle cx="160" cy="84" r="1.3"/><circle cx="92" cy="60" r="1.2"/></g>
    </svg>`;
  }

  function toast(t) {
    const id = ++uid;
    return `<svg viewBox="0 0 240 200" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="br${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#C98F52"/><stop offset="1" stop-color="#9A6430"/></linearGradient>
        <linearGradient id="av${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${t.light}"/><stop offset="1" stop-color="${t.a}"/></linearGradient>
      </defs>
      <ellipse cx="120" cy="176" rx="96" ry="12" fill="#3B452B" opacity=".18"/>
      <path d="M40 120 c -20 -40 20 -90 90 -84 c 60 -10 100 30 90 76 c -6 30 -50 56 -100 50 c -50 4 -74 -14 -80 -42z" fill="url(#br${id})"/>
      <path d="M52 118 c -14 -32 18 -74 82 -68 c 52 -8 88 24 80 62 c -6 26 -44 48 -88 42 c -44 4 -66 -12 -74 -36z" fill="#F0DFC1"/>
      <path d="M62 112 c -8 -26 20 -60 72 -54 c 46 -6 78 20 70 52 c -8 22 -40 38 -78 34 c -38 2 -58 -10 -64 -32z" fill="url(#av${id})"/>
      <g><circle cx="96" cy="96" r="10" fill="#D9412F"/><circle cx="96" cy="96" r="5" fill="#F07B5A"/><circle cx="146" cy="84" r="9" fill="#D9412F"/><circle cx="146" cy="84" r="4.5" fill="#F07B5A"/><circle cx="130" cy="120" r="8" fill="#D9412F"/><circle cx="130" cy="120" r="4" fill="#F07B5A"/></g>
      <g fill="#FFF9EE"><rect x="108" y="82" width="12" height="10" rx="3" transform="rotate(-12 114 87)"/><rect x="156" y="104" width="12" height="10" rx="3" transform="rotate(20 162 109)"/><rect x="82" y="118" width="11" height="9" rx="3"/><rect x="120" y="102" width="9" height="8" rx="2"/></g>
      <g fill="#2E2A2A"><circle cx="122" cy="94" r="3.2"/><circle cx="140" cy="108" r="3"/><circle cx="104" cy="112" r="2.8"/></g>
      <g fill="none" stroke="#4E7A3A" stroke-width="3" stroke-linecap="round"><path d="M110 72 q 8 -12 20 -8"/><path d="M160 96 q 10 -4 16 4"/><path d="M84 104 q -8 -8 -12 2"/></g>
      <g fill="#7E9A45"><ellipse cx="112" cy="128" rx="3" ry="1.8"/><ellipse cx="152" cy="120" rx="3" ry="1.8"/><ellipse cx="92" cy="86" rx="3" ry="1.8"/></g>
    </svg>`;
  }

  function cake(t) {
    const id = ++uid;
    return `<svg viewBox="0 0 220 200" role="img" aria-hidden="true">
      <defs><linearGradient id="ck${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6E7C8"/><stop offset="1" stop-color="#E8CFA1"/></linearGradient></defs>
      <ellipse cx="110" cy="176" rx="82" ry="12" fill="#3B452B" opacity=".18"/>
      <path d="M40 80 L150 60 L180 150 L70 170 Z" fill="url(#ck${id})"/>
      <path d="M40 80 L150 60 L160 40 L50 60 Z" fill="#B0783A"/>
      <path d="M50 60 L160 40 L150 60" fill="none" stroke="#8B5A24" stroke-width="2"/>
      <path d="M70 170 L40 80 L44 76" fill="none" stroke="#D8B77E" stroke-width="2"/>
      <path d="M60 64 c 18 8 30 -4 50 4 s 30 -6 44 0" fill="none" stroke="${t.a}" stroke-width="6" stroke-linecap="round" opacity=".95"/>
      <g fill="${t.light}"><circle cx="90" cy="58" r="3"/><circle cx="130" cy="52" r="3"/></g>
    </svg>`;
  }

  const ART = { bowl, matcha, coffee, smoothie, croffle, pancakes, toast, cake };
  function art(item) {
    if (!item.art) return "";
    const t = tone(item.tone);
    return ART[item.art] ? ART[item.art](t, item.tone) : "";
  }
  window.MINA_ART = ART;
  window.MINA_TONE = tone;

  /* ---------- helpers ---------- */
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const money = (n) => n.toFixed(2).replace(".", ",") + " €";

  /* Foto-Slot: hat ein Item ein `image`-Feld (Datei unter images/), wird das Foto statt der Illustration gezeigt. */
  const media = (item) => {
    if (!item.image) return art(item);
    return `<img src="images/${esc(item.image)}" alt="${esc(item.name)}" loading="lazy" onerror="this.remove()">${art(item)}`;
  };

  /* ---------- renderers ---------- */
  function cardHTML(item, size) {
    const badge = item.badge ? `<span class="badge ${/signature|bestseller/i.test(item.badge) ? "badge--copper" : ""}">${esc(item.badge)}</span>` : "";
    const tag = item.tagline ? `<p class="card__tagline">${esc(item.tagline)}</p>` : "";
    const ings = item.desc && item.desc.length ? `<ul class="ingredients">${item.desc.map(d => `<li>${esc(d)}</li>`).join("")}</ul>` : "";
    return `<article class="card ${size === "feature" ? "card--feature" : "card--sm"}">
      ${badge}
      <div class="card__art">${media(item)}</div>
      <div class="card__body">
        <div class="card__top"><h3 class="card__name">${esc(item.name)}</h3><span class="price">${money(item.price)}</span></div>
        ${tag}${ings}
      </div>
    </article>`;
  }

  function rowHTML(item) {
    const badge = item.badge ? `<span class="badge-inline">${esc(item.badge)}</span>` : "";
    const desc = item.desc && item.desc.length ? `<p class="row__desc">${esc(item.desc.join(" · "))}</p>` : "";
    return `<div class="row"><span class="row__name">${esc(item.name)}${badge}</span><span class="price">${money(item.price)}</span>${desc}</div>`;
  }

  function extrasHTML(groups, single) {
    if (!groups || !groups.length) return "";
    return `<div class="extras ${single ? "extras--single" : ""}">${groups.map(g => `
      <div class="extra">
        <div class="extra__head"><h4 class="extra__title">${esc(g.title)}</h4><span class="extra__price">${g.price >= 1 || g.title === "Tee" ? "" : ""}${g.title === "Tee" ? money(g.price) : "+" + money(g.price)}</span></div>
        <p class="extra__opts">${g.options.map(esc).join(" · ")}</p>
      </div>`).join("")}</div>`;
  }

  function sectionHTML(cat) {
    let body = "";
    if (cat.layout === "feature") body = `<div class="grid--feature">${cat.items.map(i => cardHTML(i, "feature")).join("")}</div>`;
    else if (cat.layout === "cards") body = `<div class="grid--cards">${cat.items.map(i => cardHTML(i, "sm")).join("")}</div>`;
    else body = `<div class="list">${cat.items.map(rowHTML).join("")}</div>`;

    const intro = cat.intro ? `<p class="section__intro">${esc(cat.intro)}</p>` : "";
    return `<section class="section" id="${cat.id}" data-cat="${cat.id}">
      <header class="section__head">
        <p class="section__kicker">${esc(cat.kicker || "")}</p>
        <h2 class="section__title">${esc(cat.title)}</h2>
        ${intro}
      </header>
      ${body}
      ${extrasHTML(cat.extras)}
      ${extrasHTML(cat.sub, true)}
    </section>`;
  }

  /* ---------- mount ---------- */
  const data = window.MINA_MENU;
  const menu = document.getElementById("menu");
  const nav = document.getElementById("catnav-scroll");
  menu.innerHTML = data.categories.map(sectionHTML).join("");
  nav.innerHTML = data.categories.map(c => `<a class="chip" href="#${c.id}" data-target="${c.id}"><span>${c.emoji}</span>${esc(c.label)}</a>`).join("");

  /* showcase (hero) */
  const show = document.getElementById("showcase");
  if (show) {
    const picks = [
      { kicker: "Our Signature", name: "Mina Bowl", art: "bowl", tone: "berry" },
      { kicker: "Our Matcha", name: "Iced Matcha", art: "matcha", tone: "berry" },
      { kicker: "Our Coffee", name: "Iced White Mocha", art: "coffee", tone: "mocha" }
    ];
    show.innerHTML = picks.map(p => `<a class="showcase__card" href="#${p.art === "bowl" ? "bowls" : p.art === "matcha" ? "matcha" : "signature"}">
      <div><p class="kicker">${p.kicker}</p><h3 class="name">${p.name}</h3></div>
      <div class="art">${ART[p.art](tone(p.tone), p.tone)}</div>
    </a>`).join("");
  }

  /* reveal cards */
  const cards = document.querySelectorAll(".card");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: .05 });
    cards.forEach(c => io.observe(c));
  } else cards.forEach(c => c.classList.add("is-in"));

  /* active chip */
  const chips = [...nav.querySelectorAll(".chip")];
  const sections = [...menu.querySelectorAll(".section")];
  function setActive(id) {
    chips.forEach(c => {
      const on = c.dataset.target === id;
      c.classList.toggle("is-active", on);
      if (on) c.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    });
  }
  const spy = new IntersectionObserver((entries) => {
    const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
    if (visible[0]) setActive(visible[0].target.id);
  }, { rootMargin: "-30% 0px -55% 0px", threshold: [0, .1, .25, .5] });
  sections.forEach(s => spy.observe(s));
  chips.forEach(c => c.addEventListener("click", () => setActive(c.dataset.target)));

  /* share */
  const shareBtn = document.getElementById("share-btn");
  if (shareBtn && navigator.share) {
    shareBtn.hidden = false;
    shareBtn.addEventListener("click", () => navigator.share({ title: "Mina Café · Speisekarte", url: location.href }).catch(() => {}));
  }
})();
