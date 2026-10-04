import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { menu } from "./menu.js";

const categories = menu.categories;
const money = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});
const instagram = "https://www.instagram.com/minacafe.wob/";
const categoryNotes = {
  bowls: "Fruchtig & frisch",
  croffel: "Knusprig & warm",
  pancakes: "Kleine Glücklichmacher",
  food: "Für den großen Hunger",
  kuchen: "Ein Stück Auszeit",
  signature: "Dein neuer Lieblingskaffee",
  matcha: "Fresh, fruity & pure",
  coffee: "Die kleinen Rituale",
  smoothies: "Frisch gemixt",
  softdrinks: "Eine kleine Erfrischung",
};

function Icon({ name, size = 20, ...props }) {
  const paths = {
    menu: (
      <>
        <path d="M5 9h14M5 15h14" />
      </>
    ),
    close: <path d="m6 6 12 12M6 18 18 6" />,
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    external: (
      <>
        <path d="M8 5h11v11M19 5 5 19" />
      </>
    ),
    down: <path d="m7 10 5 5 5-5" />,
    plus: <path d="M12 5v14M5 12h14" />,
    pin: (
      <>
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 0 1 14 0Z" />
        <circle cx="12" cy="10" r="2.2" />
      </>
    ),
    instagram: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M17 7h.01" />
      </>
    ),
    cup: (
      <>
        <path d="M5 8h12v6a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5V8ZM17 9h1a3 3 0 0 1 0 6h-1M4 22h14M8 2v3M13 2v3" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}

function Sun({ className = "" }) {
  return (
    <svg
      className={className}
      width="70"
      height="70"
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.25" strokeLinecap="round">
        <path d="M23 47a17 17 0 0 1 34 0M40 7v12M20 13l6 10M7 28l11 6M4 47h12M60 13l-6 10M73 28l-11 6M76 47H64" />
        <path d="M25 57h30M31 64h18" />
      </g>
    </svg>
  );
}

function Logo({ compact = false, onTop }) {
  return (
    <a
      className={`brand ${compact ? "brand--compact" : ""}`}
      href="#top"
      aria-label="Mina Café – zum Anfang"
      onClick={
        onTop
          ? (event) => {
              event.preventDefault();
              onTop();
            }
          : undefined
      }
    >
      <img
        src="/images/mina-logo.png"
        width="696"
        height="400"
        alt="Mina Café"
      />
    </a>
  );
}

function CategoryNavigation({ active, onNavigate, mobile = false }) {
  return (
    <nav
      className="category-navigation"
      aria-label={mobile ? "Mobile Menükategorien" : "Menükategorien"}
    >
      {["Essen & Süßes", "Getränke"].map((group, groupIndex) => (
        <div className="nav-group" key={group}>
          <p className="nav-group__label">{group}</p>
          {categories
            .slice(groupIndex === 0 ? 0 : 5, groupIndex === 0 ? 5 : 10)
            .map((category, index) => {
              const current = active === category.id;
              return (
                <a
                  className={`category-link ${current ? "is-active" : ""}`}
                  href={`#${category.id}`}
                  key={category.id}
                  aria-current={current ? "location" : undefined}
                  onClick={(event) => {
                    event.preventDefault();
                    onNavigate(category.id);
                  }}
                >
                  {current && (
                    <motion.span
                      className="category-link__active"
                      layoutId={mobile ? "mobile-category" : "desktop-category"}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 38,
                      }}
                    />
                  )}
                  <span className="category-link__number">
                    {String(index + 1 + groupIndex * 5).padStart(2, "0")}
                  </span>
                  <span className="category-link__name">{category.label}</span>
                  <span className="category-link__arrow">
                    <Icon name="arrow" size={15} />
                  </span>
                </a>
              );
            })}
        </div>
      ))}
    </nav>
  );
}

function Sidebar({ active, onNavigate }) {
  return (
    <aside className="sidebar" aria-label="Speisekarten-Navigation">
      <div className="sidebar__brand">
        <Logo onTop={() => onNavigate("top")} />
        <span className="sidebar__location">Wolfsburg</span>
      </div>
      <div className="sidebar__menu-label">
        <span>Die Speisekarte</span>
        <span className="tiny-sun">✳</span>
      </div>
      <CategoryNavigation active={active} onNavigate={onNavigate} />
      <div className="sidebar__footer">
        <p>
          Good food.
          <br />
          <em>Better mood.</em>
        </p>
        <a
          className="social-link"
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="instagram" size={17} />
          <span>@minacafe.wob</span>
          <Icon name="external" size={13} />
        </a>
      </div>
    </aside>
  );
}

function MobileDrawer({
  open,
  onClose,
  active,
  onNavigate,
  returnFocusRef,
  backgroundRef,
}) {
  const dialogRef = useRef(null);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    if (!open) return;
    const background = backgroundRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (background) background.inert = true;
    const dialog = dialogRef.current;
    dialog?.querySelector("button")?.focus();
    const handleKey = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
      if (event.key !== "Tab") return;
      const focusable = [
        ...dialog.querySelectorAll("a[href], button:not([disabled])"),
      ];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const handleResize = () => {
      if (window.innerWidth > 1000) onClose();
    };
    document.addEventListener("keydown", handleKey);
    window.addEventListener("resize", handleResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      if (background) background.inert = false;
      document.removeEventListener("keydown", handleKey);
      window.removeEventListener("resize", handleResize);
      returnFocusRef.current?.focus({ preventScroll: true });
    };
  }, [open, onClose, returnFocusRef, backgroundRef]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="drawer-layer"
          key="navigation-drawer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="drawer-backdrop"
            aria-hidden="true"
            onClick={onClose}
          />
          <motion.div
            id="mobile-navigation"
            className="drawer"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="drawer-title"
            initial={{ x: reduceMotion ? 0 : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: reduceMotion ? 0 : "100%" }}
            transition={{ type: "spring", stiffness: 340, damping: 36 }}
          >
            <div className="drawer__top">
              <Logo onTop={() => onNavigate("top")} />
              <motion.button
                type="button"
                className="icon-button"
                aria-label="Navigation schließen"
                onClick={onClose}
                whileTap={{ scale: 0.92 }}
              >
                <Icon name="close" />
              </motion.button>
            </div>
            <p className="drawer__eyebrow">Mina Café · Wolfsburg</p>
            <h2 id="drawer-title">Was darf’s sein?</h2>
            <CategoryNavigation
              active={active}
              onNavigate={onNavigate}
              mobile
            />
            <div className="drawer__bottom">
              <p>
                Such dir deinen Lieblingsmoment aus.
                <br />
                Wir freuen uns auf deine Bestellung an der Theke.
              </p>
              <a
                className="social-link"
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="instagram" size={17} />
                @minacafe.wob
                <Icon name="external" size={13} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MenuItem({ item }) {
  return (
    <article className="menu-item">
      <div className="menu-item__copy">
        <div className="menu-item__heading">
          <h3>{item.name}</h3>
          {item.badge && (
            <span className="item-badge">
              {item.badge === "Hype" ? "Mina Favorite" : item.badge}
            </span>
          )}
        </div>
        {!!item.desc?.length && <p>{item.desc.join(" · ")}</p>}
      </div>
      <span className="menu-item__price">{money.format(item.price)}</span>
    </article>
  );
}

function Extras({ groups, id }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={`extras ${expanded ? "is-expanded" : ""}`}>
      <motion.button
        type="button"
        className="extras__trigger"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        aria-controls={expanded ? `${id}-extras` : undefined}
        whileTap={{ scale: 0.995 }}
      >
        <span>
          <Icon name="plus" size={17} />
          Mach’s zu deiner Bowl
        </span>
        <span className="extras__hint">Extras & Toppings</span>
        <motion.span animate={{ rotate: expanded ? 180 : 0 }}>
          <Icon name="down" size={18} />
        </motion.span>
      </motion.button>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={`${id}-extras`}
            className="extras__body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div>
              {groups.map((group) => (
                <article className="extra-row" key={group.title}>
                  <div>
                    <h4>{group.title}</h4>
                    <p>{group.options.join(" · ")}</p>
                  </div>
                  <span>+ {money.format(group.price)}</span>
                </article>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MenuSection({ category, index }) {
  return (
    <section
      className="menu-section"
      id={category.id}
      aria-labelledby={`${category.id}-title`}
    >
      <header className="section-heading">
        <div className="section-heading__title">
          <span className="section-number">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <p className="eyebrow">{category.kicker}</p>
            <h2 id={`${category.id}-title`} tabIndex={-1}>
              {category.title}
            </h2>
          </div>
        </div>
        <span className="section-heading__note">
          {categoryNotes[category.id]}
        </span>
      </header>
      <div className="section-body">
        <div className="section-list">
          <p className="section-intro">{category.intro}</p>
          <div className="menu-items">
            {category.items.map((item, itemIndex) => (
              <MenuItem item={item} key={`${item.name}-${itemIndex}`} />
            ))}
          </div>
          {category.id === "matcha" && (
            <p className="section-footnote">
              <Icon name="cup" size={16} />
              Mit Milch deiner Wahl. Heiß oder auf Eis.
            </p>
          )}
          {category.id === "signature" && (
            <p className="section-footnote">
              <Icon name="cup" size={16} />
              Alle Signature Lattes auch auf Eis.
            </p>
          )}
        </div>
      </div>
      {category.extras && <Extras groups={category.extras} id={category.id} />}
    </section>
  );
}

export default function App() {
  const [active, setActive] = useState(categories[0].id);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const backgroundRef = useRef(null);
  const navigationLock = useRef({ id: "", until: 0 });
  const reduceMotion = useReducedMotion();
  const closeDrawer = React.useCallback(() => setDrawerOpen(false), []);

  function openDrawer(event) {
    menuButtonRef.current = event.currentTarget;
    setDrawerOpen(true);
  }

  function navigate(id) {
    closeDrawer();
    const target = document.getElementById(id);
    if (!target) return;
    const isCategory = categories.some((category) => category.id === id);
    navigationLock.current = {
      id: isCategory ? id : "",
      until: performance.now() + (reduceMotion ? 0 : 1200),
    };
    setActive(isCategory ? id : categories[0].id);
    history.pushState(null, "", `#${id}`);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        target.scrollIntoView({
          behavior: reduceMotion ? "instant" : "smooth",
          block: "start",
        });
        target
          .querySelector(isCategory ? "h2" : "h1")
          ?.focus({ preventScroll: true });
      }),
    );
  }

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const marker =
        window.innerWidth <= 600 ? 90 : window.innerWidth <= 1000 ? 96 : 130;
      const lock = navigationLock.current;
      const lockedElement = document.getElementById(lock.id);
      if (
        lock.id &&
        performance.now() < lock.until &&
        lockedElement &&
        Math.abs(lockedElement.getBoundingClientRect().top - marker) > 48
      )
        return;
      navigationLock.current = { id: "", until: 0 };
      let current = categories[0].id;
      for (const category of categories) {
        if (
          document.getElementById(category.id)?.getBoundingClientRect().top <=
          marker + 30
        )
          current = category.id;
      }
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 5
      )
        current = categories.at(-1).id;
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const followHash = () => {
      const id = window.location.hash.slice(1);
      const target = document.getElementById(id);
      if (target) {
        const isCategory = categories.some((category) => category.id === id);
        navigationLock.current = {
          id: isCategory ? id : "",
          until: performance.now() + 300,
        };
        setActive(isCategory ? id : categories[0].id);
        target.scrollIntoView({ behavior: "instant", block: "start" });
      }
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", followHash);
    const hashFrame = requestAnimationFrame(followHash);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(hashFrame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", followHash);
    };
  }, []);

  return (
    <>
      <div className="site" ref={backgroundRef} id="top">
        <a className="skip-link" href="#menu">
          Direkt zur Speisekarte
        </a>
        <Sidebar active={active} onNavigate={navigate} />
        <header className="mobile-header">
          <Logo compact onTop={() => navigate("top")} />
          <motion.button
            type="button"
            className="mobile-menu-button"
            onClick={openDrawer}
            aria-label="Kategorien öffnen"
            title="Kategorien öffnen"
            aria-expanded={drawerOpen}
            aria-controls={drawerOpen ? "mobile-navigation" : undefined}
            aria-haspopup="dialog"
            whileTap={{ scale: 0.92 }}
          >
            <Icon name="menu" />
          </motion.button>
        </header>
        <main
          className="main-content"
          id="menu"
          aria-labelledby="page-title"
          tabIndex={-1}
        >
          <h1 className="sr-only" id="page-title" tabIndex={-1}>
            Mina Café – Speisekarte
          </h1>
          <div className="menu-sections">
            {categories.map((category, index) => (
              <MenuSection
                category={category}
                index={index}
                key={category.id}
              />
            ))}
          </div>
          <section className="visit" aria-labelledby="visit-title">
            <Sun />
            <p className="eyebrow">Mina Café · Wolfsburg</p>
            <h2 id="visit-title">
              Schön, dass
              <br />
              <em>du da bist.</em>
            </h2>
            <p>
              Deinen Lieblingsmoment bestellst du an der Theke.
              <br />
              Bei Fragen zu Zutaten sind wir gerne für dich da.
            </p>
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <Icon name="instagram" size={18} />
              @minacafe.wob
              <Icon name="external" size={14} />
            </a>
          </section>
          <footer className="footer">
            <div>
              <span>Alle Preise in Euro inkl. MwSt.</span>
              <span>Allergene und Zusatzstoffe erfährst du an der Theke.</span>
            </div>
            <a
              href="#top"
              onClick={(event) => {
                event.preventDefault();
                navigate("top");
              }}
            >
              Nach oben<span>↑</span>
            </a>
          </footer>
        </main>
      </div>
      <MobileDrawer
        open={drawerOpen}
        onClose={closeDrawer}
        active={active}
        onNavigate={navigate}
        returnFocusRef={menuButtonRef}
        backgroundRef={backgroundRef}
      />
    </>
  );
}
