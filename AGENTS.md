# BRG Entwicklung – Webseite

## Testbereitstellung

Der Auftraggeber hat am 22. November 2026 festgelegt: „Stell unsere Änderungen immer über GitHub Pages zur Verfügung. Das ist ja unsere Testzeit.“

Beauftragte Änderungen an dieser Webseite nach den erforderlichen Prüfungen über die bestehende GitHub-Pages-Testadresse bereitstellen:

https://4k5mm85mj2-ship-it.github.io/Webseite/

Die vorhandene Konfiguration veröffentlicht `main` aus der Repositorywurzel. Diese Testbereitstellung ist autorisiert und benötigt keine erneute gesonderte Veröffentlichungsfreigabe. Sie ersetzt keine fachliche Abnahme. Eine private Vorschau auf einem anderen Dienst ist kein Ersatz für GitHub Pages.

Nach CSS-Änderungen vor Prüfung und Bereitstellung `node scripts/version-styles.mjs` ausführen. Das Skript aktualisiert die Inhaltsversionen der Stylesheet-Adressen und der internen Seitennavigation auf allen fünf Seiten, damit neue HTML-Inhalte nicht mit älteren Styles aus dem Browser-Cache kombiniert werden. Bildgrenzen auch innerhalb von Grid-Containern prüfen; `overflow: hidden` allein ist kein Nachweis für korrektes Reflow.

## Gestaltung und Bestandsschutz

Mobile First, WCAG 2.2 AA als Qualitätsziel und „Genial einfach. Für alle.“ beibehalten. Freigegebene Markenfarben: `#092744`, `#2477B5`, Weiß und erforderliche funktionale neutrale Farben. Vorhandene Original-SVGs verwenden. Allgemeine Startseite, App-Inhalte, Kontakt, Rechtstexte und KI-Hinweis bewahren. Keine kostenpflichtigen Dienste oder neuen Abhängigkeiten ohne gesonderte Freigabe.

Der Prüfbericht für die CI-Integration liegt in `Documentation/WA01/Pruefbericht.md`. Praktische VoiceOver-Tests ausschließlich dann als bestanden kennzeichnen, wenn sie tatsächlich durchgeführt wurden.
