# WA03 – vollständiger Produktauftritt Dokumaro
Stand: 27. November 2026. Nur Entwicklungsrepository 4k5mm85mj2-ship-it/Webseite.
Ausgangsstand Entwicklung: bde0cf0fc9982c207adb1636ffad6ee9eea1be6a.
Unveränderter Produktivstand vor Beginn: 358926b65fada1e029743adec1a48b733da3eff3 (Tree deea061eb9749dafcad96231b3c4969376315669).

## Umsetzung
Die bestehende Dokumaro-Übersicht und Produktseite verwenden den ausdrücklich vorgegebenen Wortlaut für den angestrebten fertigen Produktauftritt. Innerhalb der Darstellung keine Entwicklungshinweise oder Vorhabensformulierungen. Globale Entwurfskennzeichnung und noindex,nofollow bleiben auf allen sieben Seiten erhalten. Keine Behauptung tatsächlicher Downloadverfügbarkeit; keine Store-/TestFlight-Buttons, Platzhalterlinks oder Termine für Dokumaro.

Zehn illustrierte Funktionsbereiche: intelligente Dokumentenerfassung; automatisch/manuell scannen; optimierte Dokumentenqualität; Dokumente lesen; mehrseitige Dokumente; flexibel speichern mit PDF/DOCX/RTF/TXT; einfach teilen; lokale Verarbeitung; Barrierefreiheit; Mehrsprachigkeit mit Sprachauswahl. Native Details-/Summary-Komponenten, Typografie, Farben, Header, Footer und Produktnavigation unverändert wiederverwendet. Bestehender app-links-Container erlaubt später zusätzliche freigegebene Store-Verknüpfungen ohne Layoutumbau; keine leeren Elemente vorab eingefügt.

App-Übersicht weiterhin genau zwei Produkte in Reihenfolge Mitgemischt, Dokumaro. Bereits vorhandene Dokumaro-Auswahl im allgemeinen Kontaktformular bleibt ohne Änderung erhalten. Die Produktzuordnung erfolgt wie zuvor im Nachrichtentext. Keine neue Serverversion und keine Änderung der Nachrichtenübermittlung oder Supportautomatisierung.

## Tatsächlich betroffene Dateien
Inhaltlich: index.html, apps/dokumaro/index.html, README.md und nur die Beschreibung in package.json. Fünf neue WebP-Illustrationen unter assets/dokumaro/: quality, sharing, privacy, accessibility, languages. Bestehendes originales App-Icon und bisherige Illustrationen erhalten.

Nur Cacheversion der internen Navigation: apps/mitgemischt/index.html, motivation.html, support.html, impressum.html, datenschutz.html. Ausgeführt: node scripts/version-styles.mjs. Keine CSS-, JavaScript-, Konfigurations- oder iOS-Änderung. Keine Sitemap vorhanden; deshalb keine neue eingeführt.

## Bilder
Vorhandene geeignete Produktbilder werden wiederverwendet. Fünf zusätzliche konzeptionelle Illustrationen ergänzen die bisher fehlenden Themen. Einheitlich 3:2, 1200 × 800 Pixel, WebP; zusätzliche Dateien je etwa 14–36 kB. Keine echten oder erfundenen App-Screenshots. Ganze Motive mit object-fit:contain; Original-App-Icon unverändert. Dekorative Funktionsillustrationen für Screenreader ausgeblendet, sämtliche Informationen im Text. Das identifizierende App-Icon hat einen beschreibenden Alternativtext. Promptmotive und Erstellungsweg stehen im zugehörigen Audit-JSON.

## Qualitätssicherung
- 13 vorhandene lokale Formularprüfungen bestanden. Kein echter Versand, kein Google-Projekt geöffnet. Clientskript und Code.gs bytegleich zum Ausgangsstand.
- Sieben HTML-Seiten: je eine Hauptüberschrift, eindeutige IDs, gültige interne Anker und vorhandene Alternativattribute. Neue Produktseite mit zehn H3-Überschriften in geforderter Reihenfolge. Alle referenzierten Dokumaro-Bilder lokal vorhanden.
- Keine Entwicklungshinweise im Produkt-Hauptinhalt, keine Store-/TestFlight-URLs oder leeren Anker. Suchmaschinen-Metadaten und Entwurfskennzeichnung auf allen sieben Seiten nachgewiesen.
- Chromium: zehn Funktionskarten mit Enter geöffnet. Tab wechselt vom ersten zum zweiten Summary; logische Reihenfolge und sichtbarer 3-Pixel-Fokus. Accessibility-Baum zeigt Namen, Überschriften und aufgeklappte Zustände; dekorative Bilder erzeugen keine zusätzlichen Ansagen.
- Alle zehn Funktionsillustrationen im Browser geladen und object-fit:contain bestätigt.
- 48 Chromium-Layoutvarianten: Startseite, Dokumaro und Hilfe × Breiten 320/390/768/1280 CSS-Pixel × 100/200 Prozent Schrift × hell/dunkel. Tatsächliche Root-Schrift 16/32 Pixel bestätigt, alle Details geöffnet. Kein horizontaler Dokumentüberlauf und keine geprüften Inhaltselemente außerhalb des Viewports. Farbdarstellungen in lokalen Testframes über die vorhandenen CSS-Regeln ausgewählt; kein realer Betriebssystemwechsel behauptet.
- 126 gerenderte Textproben (63 je Farbdarstellung) rechnerisch geprüft. Alle erfüllen 4,5:1 für normalen bzw. 3:1 für großen Text. Weiß/Mittelblau 4,79:1; Mittelblau/Navy 3,16:1 nur für große Hero-Schrift; normaler Fließtext hell 12,20:1, dunkel 14,26:1 bzw. 11,92:1 auf Karten. Keine neuen UI-Farbkombinationen. Bestehende Regeln für Fokus, Kontrastmodus und Bewegung reduzieren unverändert.
- Mitgemischt-Artikel und vollständige Produktseite, Motivation, Rechtstexte, Hilfe, Formularlogik, TestFlight-Adresse und alle gemeinsamen Styles per Dateivergleich geschützt.

## Produktion und fachliche Grenze
Keine Änderungen am Produktivrepository, an www.brg-entwicklung.de, DNS, HTTPS, Google-Skripten, Supportautomatisierung oder iOS-Repositories. Nur GitHub-Pages-Entwicklungsbereitstellung vorgesehen. Keine neuen Abhängigkeiten oder kostenpflichtigen externen Dienste.

Die Texte sind eine ausdrücklich beauftragte Vorschau des künftigen Veröffentlichungsstands. Sie belegen keine tatsächliche fachliche Abnahme der App. Vor einer späteren produktiven Freigabe sind sämtliche Aussagen mit dem dann praktisch abgenommenen Dokumaro-Stand abzugleichen. Eine Produktionsfreigabe ist nicht erteilt.

Kein praktischer VoiceOver-/NVDA-/JAWS-Test dieser Fassung verfügbar; diese Prüfung bleibt zur praktischen Abnahme offen. Browser-Accessibility-Baum ersetzt keinen echten Screenreader-Test, und es wird keine vollständige WCAG-Konformität bescheinigt. Unveränderte Formularlogik geprüft, aber keine Testmail versendet.

