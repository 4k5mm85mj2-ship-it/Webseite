# WA03 – Abschluss des Entwicklungsauftrags

Datum: 28. November 2026. Auftraggeber: BRG Entwicklung. Grundlage: ausdrücklicher Auftrag „WA 03 abschließen“.

**Status: Entwicklungsumfang abgeschlossen und zur praktischen Abnahme bereitgestellt. Keine produktive Veröffentlichung oder Freigabe.**

## Abschließender Stand

Geprüfter funktionaler Ausgangsstand: `0f3db6d9d57607208c97ca0b6d6556601e1a39e6`. Dieser Stand war bereits mit GitHub-Pages-Lauf `46139518677` erfolgreich bereitgestellt. Der Abschluss übernimmt die bestehenden Inhalte und Funktionen unverändert und ergänzt die Dokumentation sowie aktuelle Cache-Versionen.

- Genau zwei eigenständige Produkte mit gemeinsamer BRG-Navigation. Die bereits im Repository bestehende Reihenfolge Dokumaro, Mitgemischt aus Commit `178e5dee3ded3bbdeeac55b382451ca06925678c` bleibt erhalten.
- Dokumaro mit „Einfach digital. Für alle.“, „Scannen. Lesen. Teilen.“, Produktbeschreibung, offiziellem App-Icon und vollständiger Produktillustration in der App-Übersicht sowie im Produkt-Einstieg. TestFlight-Hinweis im Motiv entfernt; optimierte lokale WebP-Dateien mit unverändertem Seitenverhältnis.
- Neun illustrierte Funktionsbereiche nach der zuletzt vorhandenen redaktionellen Bündelung: Dokumentenerfassung, automatische/manuelle Aufnahme, Dokumentenqualität, Lesen, mehrseitige Dokumente, Teilen, lokale Verarbeitung, Barrierefreiheit und „So individuell wie du“. Der letzte Bereich enthält Speicherort, PDF/DOCX/RTF/TXT, Deutsch/Englisch/Französisch, akustische Hinweise und automatisches Weiterscannen. Die früheren Berichte mit acht beziehungsweise zehn Bereichen dokumentieren Zwischenstände.
- Keine Entwicklungsstatus-, Termin-, Download-, App-Store- oder TestFlight-Zusagen innerhalb der Dokumaro-Produktdarstellung. Globale Vorschaukennzeichnung und `noindex,nofollow` bleiben erhalten.
- Dokumaro ist im allgemeinen Kontaktformular auswählbar. Die Produktzuordnung erfolgt weiterhin im Nachrichtentext; der unveränderte bestehende Dienst verwendet dafür den allgemeinen Website-Kontakt-Betreff. Keine Änderung produktiver Google-Skripte oder Supportautomatisierungen.
- Mitgemischt mit allen fünf Kartenspielen und unverändertem öffentlichen TestFlight-Link `https://testflight.apple.com/join/URaHnfM7` bleibt erhalten. Motivation, Kontakt, Impressum, Datenschutz und KI-Hinweis bleiben erhalten.

## Abschlussprüfung

| Prüfung | Ergebnis |
| --- | --- |
| Bestehende lokale Formularprüfungen | 13 von 13 bestanden; Zuordnung Dokumaro, unveränderte übrige App-Werte, Längenlimit, Mehrfachversandschutz und Servervalidierung. Nur lokale Mocks, keine Nachricht versendet. |
| Responsive Darstellung des aktuellen Dokumaro-Stands | 16 von 16 bestanden: 320/390/768/1280 CSS-Pixel × 100/200 % Schrift × hell/dunkel; alle neun Funktionsbereiche geöffnet. Kein horizontaler Überlauf oder sichtbarer Inhalt außerhalb der Seitenbreite. |
| Erscheinungsbilder und Bildskalierung | Tatsächlich berechnete Farbmodi light/dark und 16/32 Pixel Grundschrift bestätigt. Originalseitenverhältnis 1199:1312 in allen Layoutfällen erhalten. Die Testframes aktivieren vorhandene CSS-Medienregeln; kein realer Systemwechsel behauptet. |
| Tastatur und Zugänglichkeitsbaum | Fokus auf dem ersten Summary nach Tab aus dem Einstieg, sichtbare 3-Pixel-Markierung; „So individuell wie du“ mit Enter geöffnet. Name, Überschrift, Aufklappzustand und vollständiger Inhalt im Browser-Zugänglichkeitsbaum bestätigt. |
| HTML und Verknüpfungen | Alle sieben Seiten: je eine Hauptüberschrift, eindeutige IDs, vorhandene Alternativattribute, gültige lokale Bild-/Seitenziele und interne Anker. Vorschaukennzeichnung und Noindex erhalten. |
| Kontraste | Alle zwölf dokumentierten Farbpaarungen neu berechnet und Mindestwerte erfüllt. Weiß/Mittelblau 4,79:1; Mittelblau/Navy 3,16:1 für große Hero-Schrift; normaler Fließtext hell 12,20:1, dunkel 14,26:1 bzw. 11,92:1 auf Karten. Keine neue Farbkombination. |
| Bestandsschutz beim Abschluss | Alle sieben HTML-Seiten vor/nach Abschluss ohne Cache-Parameter identisch. Sämtliche Styles, JavaScript, Formularlogik und `Code.gs` unverändert. Nur Dokumentation und Cache-Versionen geändert. |

Die bisherigen gezielten Prüfungen zur Integration, zum Produktauftritt und zur Illustration bleiben als historische Nachweise erhalten:

- [Erste Integration](Pruefbericht.md)
- [Vollständiger Produktauftritt](Nachtrag-Produktauftritt-2026-11-27.md)
- [Produktillustration](Nachtrag-Produktillustration-2026-11-27.md)
- [Dokumentierte Kontrastwerte](contrast-audit.json)

## Produktionstrennung und Kosten

Produktivrepository `4k5mm85mj2-ship-it/Webseite-produktiv` nur lesend geprüft: unveränderter Commit `358926b65fada1e029743adec1a48b733da3eff3`, Tree `deea061eb9749dafcad96231b3c4969376315669`. Identisch mit dem bereits vor WA03 dokumentierten Produktionsstand. Keine Schreiboperation in Produktion, keine Übertragung der neuen Inhalte, kein produktiver Veröffentlichungsprozess. Der Stand wird nach der abschließenden Entwicklungsbereitstellung erneut kontrolliert.

Kein Entwicklungs-CNAME und kein Repository-Workflow zur Produktionssynchronisierung vorhanden. GitHub Pages veröffentlicht weiterhin ausschließlich die Wurzel von `Webseite/main`. Domain, DNS, HTTPS, iOS-Repositories, Google-Skripte und laufende Entwicklungsaufträge wurden nicht geändert. Keine neuen Abhängigkeiten oder zusätzlichen externen Kosten.

## Einschränkungen und spätere Veröffentlichung

Ein praktischer Test dieser Fassung mit VoiceOver auf iPhone oder mit JAWS/NVDA wurde nicht durchgeführt und ist nicht als bestanden dokumentiert. Die Browserprüfung ersetzt diese Prüfung nicht; eine vollständige WCAG-2.2-AA-Konformität wird nicht bescheinigt. Ebenso wurde keine neue echte Dokumaro-Formularnachricht versendet.

Die Produkttexte dienen weiterhin ausdrücklich der Vorbereitung des angestrebten fertigen App-Stands. Vor einer späteren produktiven Übernahme sind alle Funktionsaussagen mit dem dann tatsächlich abgenommenen App-Stand abzugleichen. Die ausdrückliche Freigabe zur produktiven Veröffentlichung ist ein gesonderter Schritt und nicht Teil dieses Abschlusses.

## Bereitstellung

Abschließende Seitenversion: `480ddf9b5db8`.

- Entwicklungsseite: https://4k5mm85mj2-ship-it.github.io/Webseite/?v=480ddf9b5db8
- Dokumaro: https://4k5mm85mj2-ship-it.github.io/Webseite/apps/dokumaro/?v=480ddf9b5db8

Geänderte Dateien bei diesem Abschluss: `README.md`, dieser Abschlussbericht, der Verweis im ursprünglichen `Pruefbericht.md` und ausschließlich Cache-Versionen in den sieben HTML-Dateien. Keine zusätzliche Funktion, Illustration oder Umgestaltung.


## Nachkorrektur: neueste Einstellungsillustration

Am 28. November 2026 wies der Auftraggeber darauf hin, dass das zuletzt erstellte Bild noch fehlte. Die Abschlussprüfung hatte die vorhandene Einbindung bestätigt, dabei aber nicht erkannt, dass unter „So individuell wie du“ weiterhin die frühere Sprachillustration `languages.webp` verwendet wurde. Der dokumentierte Abschluss deckte diese neue Grafik daher nicht ab.

Korrigiert auf Grundlage von Entwicklungscommit `385811f8491edce15d0daf3fc42facf8b6765439`: Die vorhandene Bildstelle unter „So individuell wie du“ verwendet nun `assets/dokumaro/einstellungen.webp`. Quelle: bereitgestellte Datei „dokumaro-einstellungen.webp“, erstellt am 28. November 2026; 1199 × 1312 Pixel, 162.578 Byte. Datei unverändert übernommen, Git-Blob `1e872a39c92c3ab1afe44444027717ab1e61f4d5`. Keine neue Bildgenerierung oder Bearbeitung des Motivs. Die bisherige Sprachgrafik bleibt im Repository erhalten.

Die bestehenden Styles skalieren das vollständige Motiv ohne Beschneidung (`object-fit:contain`). Leerer Alternativtext und `aria-hidden` des dekorativen Bildbereichs bleiben erhalten; die Produktinformationen stehen weiterhin im Begleittext. Keine zusätzlichen Fokusstopps. Bildgröße als intrinsische Maße korrigiert; Lazy Loading und asynchrones Decodieren bleiben aktiv.

Gezielte Nachprüfung: 16 Browser-Layoutfälle (320/390/768/1280 CSS-Pixel × 100/200 % Schrift × hell/dunkel) ohne Überlauf oder außerhalb der Seitenbreite liegende sichtbare Inhalte. Passende Farbdarstellung, `object-fit:contain` und dekorative Kennzeichnung in allen Fällen bestätigt. Die exakte WebP-Datei wurde in der mobilen Vorschau mit 1199 × 1312 Pixeln geladen und visuell vollständig dargestellt. Mit Enter lässt sich die Beschreibung weiterhin öffnen; Fokus auf Summary mit sichtbarer 3-Pixel-Markierung. Kein praktischer VoiceOver-Test behauptet.

Quellvergleich: Auf der Dokumaro-Seite ausschließlich Bildadresse und intrinsische Bildmaße geändert; sämtliche Texte, übrige Illustrationen und Funktionen unverändert. Die übrigen sechs HTML-Seiten ändern nur Cache-Versionen. Keine CSS-/JavaScript-/Formularänderung. Keine zusätzliche vollständige Regression oder erneuter Testversand erforderlich.

Produktivrepository nur lesend geprüft: weiterhin `358926b65fada1e029743adec1a48b733da3eff3`. Bereitstellung ausschließlich auf der Entwicklungswebseite mit Seitenversion `480ddf9b5db8`; erneute Live-Kontrolle nach erfolgreichem GitHub-Pages-Lauf. Keine Übernahme in Produktion.
