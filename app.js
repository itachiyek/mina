/* Mina Café – menu rendering */
(function () {
  const esc = (value) => String(value).replace(/[&<>\"]/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '\"': "&quot;"
  }[char]));
  const money = (value) => value.toFixed(2).replace(".", ",") + " €";

  function itemHTML(item) {
    const badge = item.badge ? `<span class="menu-item__badge">${esc(item.badge)}</span>` : "";
    const description = item.desc?.length
      ? `<p class="menu-item__description">${item.desc.map(esc).join(" · ")}</p>`
      : "";
    return `<article class="menu-item">
      <div class="menu-item__main">
        <h3>${esc(item.name)} ${badge}</h3>
        ${description}
      </div>
      <p class="menu-item__price">${money(item.price)}</p>
    </article>`;
  }

  function extrasHTML(groups) {
    if (!groups?.length) return "";
    return `<div class="menu-list menu-list--extras">${groups.map((group) => `
      <article class="menu-item">
        <div class="menu-item__main">
          <h3>${esc(group.title)}</h3>
          <p class="menu-item__description">${group.options.map(esc).join(" · ")}</p>
        </div>
        <p class="menu-item__price">${group.title === "Tee" ? money(group.price) : "+ " + money(group.price)}</p>
      </article>`).join("")}</div>`;
  }

  function sectionHTML(category) {
    return `<section class="menu-section" id="${esc(category.id)}" data-category="${esc(category.id)}">
      <header class="menu-section__header">
        <p>${esc(category.kicker || "")}</p>
        <h2>${esc(category.title)}</h2>
      </header>
      ${category.intro ? `<p class="menu-section__intro">${esc(category.intro)}</p>` : ""}
      <div class="menu-list">${category.items.map(itemHTML).join("")}</div>
      ${extrasHTML(category.extras)}
      ${extrasHTML(category.sub)}
    </section>`;
  }

  const categories = window.MINA_MENU.categories;
  const menu = document.getElementById("menu-content");
  const nav = document.getElementById("catnav");

  menu.innerHTML = categories.map(sectionHTML).join("");
  nav.innerHTML = categories.map((category, index) => `
    <a href="#${esc(category.id)}" data-target="${esc(category.id)}">
      <span class="category-nav__index" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
      <span class="category-nav__label">${esc(category.label)}</span>
    </a>`).join("");

  const links = [...nav.querySelectorAll("a")];
  const sections = [...menu.querySelectorAll(".menu-section")];
  let activeId = "";
  const setActive = (id) => {
    if (id === activeId) return;
    activeId = id;
    links.forEach((link) => {
      const isActive = link.dataset.target === id;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
      if (isActive && window.matchMedia("(max-width: 900px)").matches) {
        nav.scrollTo({
          left: link.offsetLeft - (nav.clientWidth - link.offsetWidth) / 2,
          behavior: "smooth"
        });
      }
    });
  };

  const markerPosition = () => window.matchMedia("(max-width: 900px)").matches ? 146 : window.innerHeight * 0.28;
  let scrollFrame = 0;
  let lockedTarget = "";
  let unlockTimer = 0;

  const updateActiveFromScroll = () => {
    scrollFrame = 0;
    const marker = markerPosition();
    if (lockedTarget) {
      const target = document.getElementById(lockedTarget);
      if (target && Math.abs(target.getBoundingClientRect().top - marker) > 28 && window.scrollY + window.innerHeight < document.documentElement.scrollHeight - 2) return;
      lockedTarget = "";
    }

    let current = sections[0];
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= marker) current = section;
    });
    setActive(current.id);
  };

  const scheduleActiveUpdate = () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateActiveFromScroll);
  };

  links.forEach((link) => link.addEventListener("click", (event) => {
    event.preventDefault();
    const id = link.dataset.target;
    const target = document.getElementById(id);
    if (!target) return;
    lockedTarget = id;
    setActive(id);
    target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
    window.clearTimeout(unlockTimer);
    unlockTimer = window.setTimeout(() => {
      lockedTarget = "";
      scheduleActiveUpdate();
    }, 1100);
  }));

  window.addEventListener("scroll", scheduleActiveUpdate, { passive: true });
  window.addEventListener("resize", scheduleActiveUpdate);
  setActive(categories[0].id);
})();
