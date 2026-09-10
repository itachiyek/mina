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
    return `<div class="extras">${groups.map((group) => `
      <article class="extra">
        <div><h3>${esc(group.title)}</h3><p>${group.options.map(esc).join(" · ")}</p></div>
        <strong>${group.title === "Tee" ? money(group.price) : "+ " + money(group.price)}</strong>
      </article>`).join("")}</div>`;
  }

  function sectionHTML(category, index) {
    return `<section class="menu-section" id="${esc(category.id)}" data-category="${esc(category.id)}">
      <header class="menu-section__header">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <div>
          <p>${esc(category.kicker || "")}</p>
          <h2>${esc(category.title)}</h2>
        </div>
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
      <span>${String(index + 1).padStart(2, "0")}</span>${esc(category.label)}
    </a>`).join("");

  const links = [...nav.querySelectorAll("a")];
  const sections = [...menu.querySelectorAll(".menu-section")];
  const setActive = (id) => links.forEach((link) => link.classList.toggle("is-active", link.dataset.target === id));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: "-18% 0px -64%", threshold: [0, 0.1, 0.3] });
    sections.forEach((section) => observer.observe(section));
  }

  links.forEach((link) => link.addEventListener("click", () => setActive(link.dataset.target)));
  setActive(categories[0].id);
})();
