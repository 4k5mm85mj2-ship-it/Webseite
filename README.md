# Mitgemischt · Website von BRG Entwicklung

Statischer Website-Entwurf ausschließlich für **Mitgemischt – Spielen für alle.**

## Mobile First

Die Basis ist eine einspaltige Darstellung für kleine Displays. Erst ab ausreichender Breite kommen mehrspaltige Bereiche hinzu. Navigation, Kontakt und ausklappbare Inhalte funktionieren mit Touch und Tastatur. Die Hauptinhalte benötigen kein JavaScript.

## Seiten

- `index.html`: Produktvorstellung, vier Kartenspiele, Einstieg, Bedienungshilfen und FAQ.
- `support.html`: E-Mail-Kontakt, Probleme, Ideen und Bedienungsbarrieren.
- `impressum.html`: vorhandene Betreiberangaben; Anschriftnutzung für die Website noch zu bestätigen.
- `datenschutz.html`: klar gekennzeichneter Entwurf mit korrektem Hostinghinweis für die GitHub-Pages-Testfassung und offenen Angaben zu E-Mail und endgültiger Veröffentlichung.

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

- Gestaltung, Inhalte und reale Bedienung auf iPhone/iPad abnehmen; VoiceOver praktisch prüfen.
- App-Store-Link und Verfügbarkeit anhand der tatsächlich veröffentlichten App verifizieren und erst dann ergänzen.
- Nutzung der Postflex-Anschrift für die Website bestätigen.
- Datenschutzhinweise vervollständigen, insbesondere Gmail, Rechtsgrundlagen und Aufbewahrung.
- Angaben zur tatsächlich veröffentlichten App-Version abgleichen.
- Erst bei abgeschlossener Abnahme die Entwurfsmarkierung und gegebenenfalls `noindex` entfernen.

Der Website-Entwurf ändert weder die App noch deren bisherige Supportadressen oder Store-Metadaten.

Prüfumfang und Quellen stehen in [VALIDIERUNG.md](VALIDIERUNG.md).
