# WA03 – Dokumaro-Produktillustration

Datum: 27. November 2026. Ausschließlich Entwicklungsrepository `4k5mm85mj2-ship-it/Webseite`.

## Umsetzung

- Die bereitgestellte Illustration „Dokumaro: Scannen, Lesen, Teilen.png“ wird in der Dokumaro-App-Vorstellung auf der allgemeinen Startseite und im bestehenden Einstiegsbereich der Dokumaro-Produktseite verwendet. Keine zusätzlichen Bildbereiche.
- Aus dem Bild wurde der kleine sichtbare „◀ TestFlight“-Hinweis innerhalb des iPhones entfernt. Motiv, Produkttexte, Farbgebung und Bildaufbau wurden visuell beibehalten. Keine generierten App-Ansichten hinzugefügt.
- Vollständiges Originalformat 1199 × 1312 Pixel: keine Beschneidung oder Änderung des Seitenverhältnisses. Zwei lokale WebP-Auflösungen; die Auswahl erfolgt über `srcset`/`sizes`. Feste intrinsische Maße und `height:auto` verhindern Verzerrung und reservieren den Platz vor dem Laden.
- Gleiche vorhandene Bildkomponenten wie Mitgemischt: App-Übersicht maximal 18 rem, Produkt-Einstieg maximal 26 rem; identische Abstände und Rundungen. Unterschiedliche Höhen ergeben sich ausschließlich aus den erhaltenen Originalseitenverhältnissen.
- Das offizielle App-Icon bleibt in der Quelldatei unverändert und wird beim Produktnamen separat angezeigt. Eine kleine, aus diesem Original abgeleitete WebP-Datei vermeidet das Laden der 678-kB-Quelldatei für ein 2-rem-Erkennungszeichen.
- Produktbild und Icon sind mit leerem Alternativtext dekorativ eingebunden: Produktname, Leitsatz, Scannen/Lesen/Teilen und Nutzen sind unmittelbar daneben als Text zugänglich. Keine zusätzlichen Links oder Fokusstopps.

## Bilddateien

| Datei | Abmessungen | Dateigröße |
| --- | --- | --- |
| `assets/dokumaro/produktillustration.webp` | 1199 × 1312 | 142.694 Byte |
| `assets/dokumaro/produktillustration-600.webp` | 600 × 657 | 58.098 Byte |
| `assets/dokumaro/app-icon-192.webp` | 192 × 192 | 30.386 Byte |

Die vollständige WebP-Illustration ist gegenüber der bereitgestellten PNG-Datei (1.875.654 Byte) rund 92 % kleiner. Keine externe Bildquelle, keine zusätzlichen Dienste, Frameworks oder kostenpflichtigen CI-Läufe.

## Gezielte Qualitätssicherung

- 32 Browser-Layoutfälle: Startseite und Dokumaro × 320/390/768/1280 CSS-Pixel × 100/200 % Grundschrift × hell/dunkel. Tatsächliche Layoutbreiten wegen der Scrollleiste teilweise 15 Pixel schmaler. Alle Fälle ohne horizontalen Überlauf oder außerhalb des Inhaltsbereichs liegende sichtbare Elemente.
- In allen Fällen bleibt das Seitenverhältnis der Illustration erhalten; keine feste Bildhöhe und kein beschneidendes `object-fit:cover`. Die tatsächliche helle/dunkle Farbpalette wurde über berechnete `color-scheme`- und Hintergrundwerte verifiziert. Die Modusvarianten der lokalen Prüfumgebung verwenden dieselben Styles mit gezielt aktivierter Medienbedingung.
- Visuelle Kontrolle des vollständigen Produktbilds im Desktop-Einstieg, in der dunklen Mobilansicht und in der App-Übersicht bei Tabletbreite. TestFlight-Hinweis im Bild entfernt; zusätzlich OCR-Kontrolle ohne TestFlight-Treffer. Das Motiv wird ohne Farbfilter dargestellt.
- Vergleich der App-Vorstellungen bei Desktopbreite: beide Produktbilder 288 Pixel breit, 16 Pixel Innenabstand, 10,4 Pixel Rundung. Die Vollansichten bleiben trotz unterschiedlicher ursprünglicher Bildproportionen erhalten.
- Tastaturprüfung: Tab erreicht die bestehende erste Funktionsbeschreibung, Enter öffnet sie; sichtbare durchgezogene Fokusmarkierung von 3 Pixeln. Keine neue interaktive Funktion.
- Browser-Zugänglichkeitsbaum: Produktname einmal als Text, unveränderte Überschriftenhierarchie und beschriftete Funktionsschalter; keine redundante Bildansage oder zusätzliche Bild-Fokusposition.
- Keine neuen Textfarben oder Kontrastpaarungen; bestehende Kontrastgestaltung unverändert.
- Praktisches VoiceOver auf einem iPhone sowie JAWS/NVDA standen in dieser Prüfumgebung nicht zur Verfügung. Die Browserprüfung ersetzt diese praktischen Tests nicht; die abschließende praktische Abnahme bleibt beim Auftraggeber.

## Bestandsschutz und Produktionstrennung

Ausgangscommit Entwicklung: `96be1d6f0dd8ef8634b7764d8b7a9227f7728c66`.

Vor/nach den Änderungen wurden alle bisherigen Textinhalte der beiden betroffenen Seiten verglichen: unverändert. Die zehn bestehenden Dokumaro-Funktionsvorstellungen einschließlich Illustrationen sowie sämtliche Mitgemischt-Beschreibungen und fünf Spiele bleiben unverändert. Motivation, Impressum, Datenschutz, Hilfe, Kontaktformular, Nachrichtenübermittlung, Supportskript, Metadaten und Vorschau-/Noindex-Kennzeichnung bleiben erhalten. Die übrigen fünf HTML-Dateien ändern ausschließlich ihre durch das vorgeschriebene Versionsskript aktualisierten Cache-Adressen.

Original-Icon `assets/dokumaro/app-icon.png`: unveränderter Git-Blob `70a736e67bfaf5017a1ee9db33296e4602aaf6b4`.

Produktivrepository `Webseite-produktiv`: Ausgangsstand und vor Bereitstellung erneut gelesener Stand `358926b65fada1e029743adec1a48b733da3eff3`, Baum `deea061eb9749dafcad96231b3c4969376315669`. Keine Schreiboperation in diesem Repository. Keine Änderung an Domain, DNS, HTTPS, produktiven Supportdiensten oder iOS-Repositories. Nach der Testbereitstellung wird der Produktionsstand nochmals kontrolliert.

## Geänderte Dateien

Inhaltlich: `index.html`, `apps/dokumaro/index.html`, `assets/home.css`; drei neue WebP-Dateien und dieser Bericht. Nur Cache-Versionen: `apps/mitgemischt/index.html`, `motivation.html`, `support.html`, `impressum.html`, `datenschutz.html`.

## Bereitstellung

Nach erfolgreicher technischer Prüfung über den vorhandenen GitHub-Pages-Prozess ausschließlich in Entwicklung:

- https://4k5mm85mj2-ship-it.github.io/Webseite/#apps
- https://4k5mm85mj2-ship-it.github.io/Webseite/apps/dokumaro/

Eine spätere produktive Übernahme ist nicht Teil dieses Auftrags und benötigt eine gesonderte ausdrückliche Freigabe.
