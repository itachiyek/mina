# Mina Café · Speisekarte

Responsive QR-Speisekarte mit React, Vite und Framer Motion.

```sh
npm ci
npm run dev
```

Der lokale Entwicklungsserver startet standardmäßig auf `http://localhost:5173`.

```sh
npm run build
npm run preview
```

Der Produktionsbuild liegt in `dist/`. `vercel.json` enthält den Build-Befehl und das Ausgabeverzeichnis für die bestehende Vercel-Konfiguration.

- `menu.js`: alle Kategorien, Produkte, Zutaten und Preise.
- `App.jsx`: Speisekarte, Desktop-Sidebar und mobile Seitennavigation.
- `styles.css`: Farben, Typografie und responsive Darstellung.
- `public/images/`: freigestelltes Logo und archivierte Mina-Produktbilder.
- `DESIGN.md`: Konzept und Research-Quellen.

Die Speisekarte zeigt Produkte, Zutaten und Preise ohne Produktbilder. Die Schriften werden lokal ausgeliefert. Die Animationen berücksichtigen die Systemeinstellung für reduzierte Bewegung.

Mobile Navigation unterstützt Tastaturbedienung, Escape, Fokusbegrenzung, Fokus-Rückgabe und Scrollsperre. Direkte Links wie `/#matcha` und `/#food` öffnen die passende Kategorie.
