# BRG Entwicklung · Website

Statischer Website-Entwurf für **BRG Entwicklung – Genial einfach. Für alle.** Die App-Übersicht enthält zunächst ausschließlich Mitgemischt.

## Mobile First

Die Basis ist eine einspaltige Darstellung für kleine Displays. Erst ab ausreichender Breite kommen mehrspaltige Bereiche hinzu. Navigation, Kontakt und ausklappbare Inhalte funktionieren mit Touch und Tastatur. Die Hauptinhalte benötigen kein JavaScript.

## Seiten

- `index.html`: allgemeine Startseite mit Motivation, Entwicklungsprinzipien, App-Übersicht und Kontakt.
- `apps/mitgemischt/index.html`: abgenommene Mitgemischt-Vorstellung mit vier Kartenspielen, Einstieg, Bedienungshilfen und FAQ.
- `support.html`: E-Mail-Kontakt, Probleme, Ideen und Bedienungsbarrieren.
- `impressum.html`: vorhandene Betreiberangaben; Anschriftnutzung für die Website noch zu bestätigen.
- `datenschutz.html`: klar gekennzeichneter Entwurf mit korrektem Hostinghinweis für die GitHub-Pages-Testfassung und offenen Angaben zu E-Mail und endgültiger Veröffentlichung.

Die Hauptnavigation lautet **Start · Apps · Kontakt**. Produkt und Hilfe haben eine ergänzende Navigation für Mitgemischt. Die bisherige Adresse `support.html` bleibt erreichbar.

Das Erscheinungsbild folgt mit `prefers-color-scheme` automatisch der Systemeinstellung. Die freigegebene helle Palette bleibt in `assets/styles.css`; `assets/appearance.css` ergänzt die dunkle Darstellung. Es gibt keinen zusätzlichen Theme-Umschalter und keine gespeicherte Darstellungspräferenz.

Auf jeder Seite steht ein gut lesbarer KI-Transparenzhinweis mit Link zur Erläuterung im Impressum.

Es werden Systemschriften verwendet. Keine extern geladenen Bibliotheken, Schriftendienste, Analysewerkzeuge oder Werbedienste. Es gibt keine Paketabhängigkeiten und keinen erforderlichen Produktionsbuild.

## GitHub Pages

Der Nutzer hat am 22.11.2026 die Veröffentlichung des Entwurfs zum Testen ausdrücklich beauftragt. Die vorhandene Konfiguration verwendet `main` und `/ (root)`; HTTPS ist aktiviert. Die HTML-Dateien und Assets liegen deshalb unmittelbar in der Repositorywurzel. `.nojekyll` hält die Auslieferung statisch.

Testadresse: <https://4k5mm85mj2-ship-it.github.io/Webseite/>

Die Testfassung ist öffentlich erreichbar und wird auf jeder Seite als Entwurf gekennzeichnet. Die HTML-Seiten enthalten `noindex,nofollow`; das ist keine Zugriffsbeschränkung.

## Lokale Vorschau

Mit Node.js ab Version 18:

```sh
npm run dev
```

Standardadresse: `http://127.0.0.1:3000/`. Es ist kein `npm install` erforderlich. Der Vorschauprozess dient nur der Entwicklung; GitHub Pages liefert die Dateien direkt aus.

## Vor einer endgültigen Produktveröffentlichung

- Die bisherige Mitgemischt-Gestaltung und -Bedienung wurde am 22.11.2026 vom Nutzer praktisch abgenommen. Neue Startseite, Navigation, KI-Hinweis und automatischer Hell-/Dunkelwechsel sind anschließend auf dem iPhone zu prüfen.
- App-Store-Link und Verfügbarkeit anhand der tatsächlich veröffentlichten App verifizieren und erst dann ergänzen.
- Nutzung der Postflex-Anschrift für die Website bestätigen.
- Datenschutzhinweise vervollständigen, insbesondere Gmail, Rechtsgrundlagen und Aufbewahrung.
- Angaben zur tatsächlich veröffentlichten App-Version abgleichen.
- Erst bei abgeschlossener Abnahme die Entwurfsmarkierung und gegebenenfalls `noindex` entfernen.

Der Website-Entwurf ändert weder die App noch deren bisherige Supportadressen oder Store-Metadaten.

Prüfumfang und Quellen stehen in [VALIDIERUNG.md](VALIDIERUNG.md).
