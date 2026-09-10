/* Mina Café – Rendering */
(function () {
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const money = (n) => n.toFixed(2).replace(".", ",") + " €";

  /* ---------- renderers ---------- */
  /* Foto-Karte: nur Gerichte mit `image` (Datei unter images/) bekommen eine Karte mit Foto. */
  function cardHTML(item) {
    const badge = item.badge ? `<span class="badge ${/signature|bestseller/i.test(item.badge) ? "badge--copper" : ""}">${esc(item.badge)}</span>` : "";
    const tag = item.tagline ? `<p class="card__tagline">${esc(item.tagline)}</p>` : "";
    const ings = item.desc && item.desc.length ? `<ul class="ingredients">${item.desc.map(d => `<li>${esc(d)}</li>`).join("")}</ul>` : "";
    return `<article class="card">
      ${badge}
      <div class="card__art"><img src="images/${esc(item.image)}" alt="${esc(item.name)}" loading="lazy" width="1200" height="900"></div>
      <div class="card__body">
        <div class="card__top"><h3 class="card__name">${esc(item.name)}</h3><span class="price">${money(item.price)}</span></div>
        ${tag}${ings}
      </div>
    </article>`;
  }

  /* Alle anderen Gerichte: einfache Zeile mit Name, Preis und Zutaten. */
  function rowHTML(item) {
    const badge = item.badge ? `<span class="badge-inline">${esc(item.badge)}</span>` : "";
    const desc = item.desc && item.desc.length ? `<p class="row__desc">${esc(item.desc.join(" · "))}</p>` : "";
    return `<div class="row"><span class="row__name">${esc(item.name)}${badge}</span><span class="price">${money(item.price)}</span>${desc}</div>`;
  }

  function extrasHTML(groups, single) {
    if (!groups || !groups.length) return "";
    return `<div class="extras ${single ? "extras--single" : ""}">${groups.map(g => `
      <div class="extra">
        <div class="extra__head"><h4 class="extra__title">${esc(g.title)}</h4><span class="extra__price">${g.title === "Tee" ? money(g.price) : "+" + money(g.price)}</span></div>
        <p class="extra__opts">${g.options.map(esc).join(" · ")}</p>
      </div>`).join("")}</div>`;
  }

  function sectionHTML(cat) {
    const featured = cat.items.filter(i => i.image);
    const rest = cat.items.filter(i => !i.image);
    const cards = featured.length ? `<div class="grid--feature ${featured.length === 1 ? "grid--feature-single" : ""}">${featured.map(cardHTML).join("")}</div>` : "";
    const list = rest.length ? `<div class="list">${rest.map(rowHTML).join("")}</div>` : "";
    const intro = cat.intro ? `<p class="section__intro">${esc(cat.intro)}</p>` : "";
    return `<section class="section" id="${cat.id}" data-cat="${cat.id}">
      <header class="section__head">
        <p class="section__kicker">${esc(cat.kicker || "")}</p>
        <h2 class="section__title">${esc(cat.title)}</h2>
        ${intro}
      </header>
      ${cards}
      ${list}
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
