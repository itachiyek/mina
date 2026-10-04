# Mina Café – Gestaltungskonzept

## Ziel und Nutzung

Die digitale Speisekarte wird vorrangig am Tisch per QR-Code geöffnet.
Mobile Gäste sollen sofort Speisen, Getränke, Preise und Kategorien finden.
Die Gestaltung übersetzt die vorhandene Marke in eine ruhige, hochwertige Website.
Die aktuelle Karte enthält 45 Produkte. Preise, Zutaten und Reihenfolge folgen den gelieferten Speisekarten-Notizen.

## Aufbau und Navigation

- Desktop: feste rechte Sidebar mit Logo, Kategorien und ergänzenden Informationen.
- Mobile: von rechts öffnender Drawer mit vollständiger Navigation, passend zum Kategorienbutton rechts.
- Ein runder Menübutton im festen mobilen Kopf hält die Navigation beim Scrollen erreichbar.
- Das Logo steht links im mobilen Kopf, der Menübutton rechts.
- Die Karte beginnt direkt mit der ersten Kategorie; ein zusätzlicher Titel und eine zweite Kategoriezeile entfallen.
- Die aktive Kategorie wird klar hervorgehoben und begleitet die Orientierung.
- Karte und Navigation folgen derselben Reihenfolge: Açaí Bowls, Coffee & Tea, Mina Signatur, Matcha, Smoothies, Softdrinks, Croffel, Pancakes, Bread & Breakfast, Kuchen.
- Produktnamen und Preise sind direkt lesbar; Beschreibungen stehen darunter.
- Kategorienüberschrift, Illustration und Beschreibung bilden eine gemeinsame getönte Fläche. Die Beschreibung steht kompakt direkt unter der Titelzeile.
- Ergänzende Informationen und Extras werden kompakt zugänglich gemacht.
- Großzügige Touch-Flächen und ein klarer Schließen-Button erleichtern die Bedienung.
- Der Drawer unterstützt Tastatur, Escape, Fokusbegrenzung und Fokus-Rückgabe.

## Farben und Typografie

| Rolle                              | Farbwert  |
| ---------------------------------- | --------- |
| Creme, Hauptfläche                 | `#f8f5ee` |
| Helles Sand, ergänzende Fläche     | `#eee7dc` |
| Oliv, Text und Hauptakzente        | `#424a32` |
| Bronze, dekorative Details         | `#9a7849` |
| Bronze, Text mit erhöhtem Kontrast | `#85633b` |
| Sekundärtext                       | `#666a57` |

Manrope prägt Kategorien, Navigationsüberschriften, Produkttexte und Preise als klare Druckschrift.
Cormorant Garamond setzt bei den dekorativen Begrüßungstexten ruhige, markennahe Akzente.
Die Fonts werden lokal gehostet; klare Hierarchien vermeiden unnötige Schriftvarianten.
Bronze bleibt ein zurückhaltender Akzent; funktionale Texte benötigen genügend Kontrast.
Feine Linien, ruhige Abstände und cremige Flächen verbinden Website und Instagram-Auftritt.
Kompakte Kategorienflächen greifen Sand-, Salbei- und Beerentöne auf.
Kleine statische SVG-Illustrationen geben den Kategorien Charakter. Produktzeilen bleiben einheitlich gestaltet.

## Logo und Textkarte

Das Original-Logo wird mit transparentem Hintergrund in passenden Größen eingesetzt.
Die Speisekarte zeigt alle Produkte als Text mit Zutaten und rechts ausgerichteten Preisen.
Produktbilder entfallen auf Mobile und Desktop. Feine Trennlinien und ruhige Abstände strukturieren die Kategorien.
Die gelieferten Produktposts dienen weiterhin als Referenz für Farben und Markenstil.

## Bewegung und Zugänglichkeit

Framer Motion animiert Drawer, aktive Desktop-Kategorie und Extras mit kurzen, sanften Übergängen.
Kategorienflächen und Produktzeilen blenden beim ersten Eintritt in den sichtbaren Bereich sanft ein. Die kurze Bewegung nutzt nur Opazität und vollständige Transform-Werte; die Sektionen selbst bleiben für Navigation und Scrollposition unverändert. Bei reduzierter Bewegung erscheinen die Inhalte sofort.
Der mobile Drawer gleitet ohne Federbewegung von rechts; die Abdunklung blendet separat ein.
Die vollständig animierte Transform-Eigenschaft nutzt native Browseranimationen über Framer Motion.
Das Panel bleibt montiert, um erneuten DOM-Aufbau beim Öffnen zu vermeiden; die Karte rendert dabei nicht erneut.
Scrollsperre und Fokusbegrenzung bleiben bis zum Ende der Schließanimation aktiv.
`react-remove-scroll` begrenzt Maus- und Touch-Scrollen. Die Seite bleibt im Dokumentfluss, ohne einen fixierten Body oder künstliche Scroll-Rücksetzung.
Der Drawer verwendet dynamische Viewporthöhe und Safe-Area-Abstände. HTML und Body haben beide einen deckenden Creme-Hintergrund.
Die Scrollbarbreite bleibt reserviert, damit die Karte beim Öffnen ihre Breite behält.
Nach einer Kategorieauswahl scrollt die Karte erst, wenn die Navigation vollständig geschlossen ist.
Feine Navigationstrennlinien, Bronze-Nummern und dezente Konturen verfeinern die Gestaltung.
Bewegung unterstützt Orientierung und Rückmeldung, ohne den Zugriff auf Inhalte zu verzögern.
Die Systemeinstellung Reduced Motion wird respektiert; große Bewegungen werden reduziert.
Die Karte passt sich schmalen Displays an und vermeidet horizontales Scrollen der Inhalte.

## Research-Grundlage

- [NN/g: QR-Code Guidelines](https://www.nngroup.com/articles/qr-code-guidelines/) – direkt zur relevanten mobilen Seite führen.
- [NN/g: Mobile Navigation](https://www.nngroup.com/articles/find-navigation-mobile-even-hamburger/) – versteckte Navigation sichtbar unterstützen.
- [NN/g: Menu Design Checklist](https://www.nngroup.com/articles/menu-design/) – Desktop-Navigation zeigen und aktuelle Position markieren.
- [W3C: Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) – Fokus und Tastaturbedienung des Drawers.
- [W3C: Target Size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum) – ausreichend große Bedienflächen.
- [W3C: Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) und [Kontrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) – mobile Lesbarkeit.
- [Motion: Accessibility](https://motion.dev/docs/react-accessibility) – Reduced Motion in Framer Motion berücksichtigen.
- [Motion: Performance](https://motion.dev/docs/performance) – vollständige Transform-Eigenschaft und native Animationen.
- [Motion: Scroll Animations](https://motion.dev/docs/react-scroll-animations) – einmalige Einblendungen mit `whileInView` und gemeinsamem Intersection Observer.
- [react-remove-scroll](https://github.com/theKashey/react-remove-scroll) – Scroll-Begrenzung für Maus und Touch bei bestehendem Dokumentfluss.
- [WebKit: Viewport Units](https://webkit.org/blog/12445/new-webkit-features-in-safari-15-4/) – dynamische Höhe bei beweglichen mobilen Browserleisten.

Farben und Schriftkombination sind die gestalterische Ableitung aus den gelieferten Markenreferenzen.
