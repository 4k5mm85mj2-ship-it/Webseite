# WORK-AUFTRAG 03 – Dokumaro auf der Entwicklungswebseite
> Historischer Prüfstand der ersten Integration. Maßgeblich für den abgeschlossenen Gesamtumfang einschließlich der späteren Nachträge ist der [Abschlussbericht vom 28. November 2026](Abschlussbericht-2026-11-28.md).

Stand: 26. November 2026. Ausschließlich 4k5mm85mj2-ship-it/Webseite.
Ausgangscommit Webseite: 152b9116546810ed27495c34dc7586ddbb61fe07.
Produktivcommit vor Beginn und nach lokaler Prüfung: 358926b65fada1e029743adec1a48b733da3eff3.

## Umfang
Dokumaro ist das zweite Produkt nach Mitgemischt in der allgemeinen App-Übersicht. Eigene Produktseite apps/dokumaro/index.html mit Produktname, Leitsatz, Untertitel, freigegebenem Icon und acht nativen aufklappbaren Funktionsvorstellungen. Lokale Navigation folgt dem Mitgemischt-Muster. Kein TestFlight-/App-Store-Link, kein Platzhalter und kein Datum für Dokumaro; Entwicklungsstatus in Übersicht und Produktseite. Allgemeine Metadaten und README auf zwei Produkte angepasst. Kein Sitemap-Dokument vorhanden; deshalb keines neu eingeführt.

Geänderte Funktions-/Inhaltsdateien: index.html, support.html, assets/contact-form.js, assets/home.css, scripts/version-styles.mjs, README.md, neue apps/dokumaro/index.html und assets/dokumaro/*. Neu: scripts/contact-form-client.test.cjs und dieser Prüfbericht mit Auditdateien. apps/mitgemischt/index.html, motivation.html, impressum.html erhalten ausschließlich neue Cacheversionen. datenschutz.html: nur allgemeine Meta-Beschreibung und Cacheversion; sämtliche Rechtstexte bleiben unverändert.

## Fachliche Grundlage
Read-only geprüfter Dokumaro-Entwicklungsstand 63d9422df752d367d76faba84570ad8f63932661 auf work/wa01-initial-development. Gelesen: Documentation/ProjectSources/01_Produktvision.txt, 02_Funktionale_Anforderungen.txt (1.5), 11_Projektstand_Roadmap.txt (1.5), 12_Produktidentitaet_und_App_Store.txt sowie AcceptanceCorrections/CAUSES_AND_LIMITS.md. Die Quellen enthalten bereits interne Testnachweise, aber offene praktische Kamera-/Audio-/Geräteprüfungen. Deshalb Funktionsdarstellung ausdrücklich als Entwicklung/Vorhaben, ohne Zusage fehlerfreier OCR oder PDF/UA. Manuelle Aufnahme, lokale OCR, Vorschau, Mehrseitigkeit, PDF/DOCX/RTF/TXT, Deutsch/Englisch/Französisch entsprechend den Quellen beschrieben. Keine iOS-Datei geändert.

## Produktmaterial
Original-AppIcon.png und Scanner.png bytegleich aus dem geprüften App-Stand kopiert. App-Icon-Blob: 70a736e67bfaf5017a1ee9db33296e4602aaf6b4. Drei neue einheitliche konzeptionelle Illustrationen, keine App-Screenshots: Erfassung, Textlesen, Seiten/Export. Vollständige Motive, responsiv mit object-fit:contain; WebP-Dateien 24–32 KiB bei 1200 × 800 Pixeln. Quellen/Promptmotive in Illustrationen.json. Bildmotive der Funktionskarten sind dekorativ ausgeblendet; sämtliche Informationen stehen zugänglich im Text. Identifizierendes App-Icon auf Produktseite mit beschreibendem Alternativtext.

## Hilfe und Formular
Auswahl: Allgemein / keine bestimmte App, Mitgemischt, Dokumaro. Bisheriger Test-Endpunkt unverändert. Kein Google-Projekt geöffnet, keine Skriptversion, Trigger, Berechtigungen, Supportautomatisierung oder produktive Bereitstellung geändert.

Bei Dokumaro übernimmt ein nativer formdata-Handler die Auswahl als „App: Dokumaro“ am Anfang der Nachricht. Er entfernt nur für Dokumaro den bisher serverseitig unbekannten app-Parameter. Der bestehende Dienst akzeptiert dieses ältere Nachrichtenformat und bildet den normalen Website-Kontakt-Betreff; die Produktzuordnung erfolgt im Nachrichtentext, nicht im App-Betreff. Kein falscher Betreff „Allgemein“. Allgemein und Mitgemischt behalten ihre bisherigen Parameter und Betreffzuordnung. Nachrichtenlimit für Dokumaro 4.985 Zeichen plus 15 Zeichen Produktangabe, zusammen 5.000; keine stille Kürzung. Wiederholte FormData-Erstellung verdoppelt den Hinweis nicht; Originaleingabe bleibt erhalten. Doppelversandschutz umfasst weiterhin die übertragene Nachricht.

Die Übertragung läuft weiterhin als native HTTPS-POST-Navigation. Keine neue Serverkomponente, kein neuer Anbieter. Ein Dokumaro-spezifischer Betreff würde eine Ergänzung der serverseitigen Whitelist und eine gesondert freigegebene Bereitstellung erfordern; diese Änderung wurde nicht ausgeführt und ist für die hier realisierte Nachrichtenzuordnung nicht erforderlich.

## Gezielte Prüfungen
- 13 lokale Node-Prüfungen bestanden: acht unveränderte Versanddienst-Tests und fünf neue Client-/Kompatibilitätstests. Dokumaro-Payload wird von der unveränderten Servervalidierung akzeptiert; 5.000-Zeichen-Grenze, App-Wechsel, unveränderte Allgemein/Mitgemischt-Parameter, keine verdoppelten Präfixe und Honeypot geprüft. Nur lokale Mocks, keine Testmail versendet.
- Zusätzlich native FormData-Erstellung im Chromium-Browser auf einer ausschließlich lokalen Prüffassung ohne Versand: Dokumaro ergibt app=null und message="App: Dokumaro\\n\\nPrüfung ohne Versand.", bei unveränderter Originaleingabe; Mitgemischt ergibt weiterhin app=mitgemischt und unveränderte Nachricht. Die Prüffassung wird nicht veröffentlicht.
- Sieben HTML-Seiten: je eine Hauptüberschrift, eindeutige IDs, interne Anker, vorhandene Alternativattribute geprüft. Neue Produktseite mit acht H3-Überschriften. Accessibility-Baum enthält verständliche Namen und Auf-/Zuklappzustände; Illustrationen erzeugen keine zusätzlichen Fokusstopps.
- Tastatur: erste Funktionskarte mit Enter geöffnet, Zustand im Accessibility-Baum bestätigt; Fokus auf SUMMARY, sichtbare 3-Pixel-Fokusmarkierung. Native Links, Details/Summary und select werden wiederverwendet.
- Chromium-Layoutprüfung: 48 Varianten (drei betroffene Seiten × 320/390/768/1280 CSS-Pixel × 100/200 Prozent Schrift × hell/dunkel). Alle Karten geöffnet. Tatsächliche Root-Schrift 16/32 Pixel bestätigt. Kein horizontaler Dokumentüberlauf und keine geprüften Inhaltselemente außerhalb des Viewports. Dark-/Light-CSS-Regeln in lokalen Testframes gezielt ausgewählt; keine Behauptung eines realen Betriebssystemwechsels. Angaben in layout-audit.json.
- Kontraste anhand tatsächlich gerenderter repräsentativer Textfarben geprüft: Navy/Weiß 15,16:1; Weiß/Mittelblau 4,79:1; Mittelblau/Navy 3,16:1 nur für große Hero-Schrift; normaler Text hell 12,20:1, dunkel 14,26:1 auf Seitenfläche bzw. 11,92:1 auf Karten. Weitere Werte in contrast-audit.json.
- Keine neuen Animationen; bestehende prefers-reduced-motion-Regeln unverändert. Wiederverwendete Styles behalten beide Erscheinungsbilder und systemweite Kontrastregeln.

## Bestandsschutz und Produktionstrennung
Keine Repository-Workflows für Übertragungen zur Produktion vorhanden; bestehende Veröffentlichungen sind GitHub-eigene pages build and deployment, repositorybezogen. Dev enthält keinen CNAME für die Produktivdomain. Ausschließlich native GitHub-Schreiboperationen mit repository_full_name=4k5mm85mj2-ship-it/Webseite. Webseite-produktiv nur lesend als Referenz geprüft. Keine Domain-/DNS-/HTTPS-Änderung.

Mitgemischt-Inhalte, alle fünf Spiele, TestFlight-Adresse, Motivation und Impressumsinhalt durch normalisierten Dateivergleich unverändert. Beide bisherigen Farbstyles und Code.gs bytegleich. Homepage-Mitgemischt-Artikel unverändert. Nachweise in preservation-audit.json. Produktivcommit nach erfolgreicher Testbereitstellung nochmals lesend geprüft und identisch bestätigt: 358926b65fada1e029743adec1a48b733da3eff3.

## Grenzen / praktische Abnahme
Kein tatsächlicher VoiceOver-/NVDA-/JAWS-Test dieser Erweiterung verfügbar; keine pauschale WCAG-Konformitätszertifizierung. Praktische Abnahme auf dem iPhone bleibt erforderlich. Kein echter Mailversand, kein Test öffentlicher Dokumaro-Versionen und keine Veröffentlichung der App. Kein zusätzlicher kostenpflichtiger Dienst, Build oder Hostingvertrag. GitHub Pages bleibt die einzige bereitgestellte Testumgebung. Keine produktive Freigabe oder Synchronisierung.

Entwicklungsziel: https://4k5mm85mj2-ship-it.github.io/Webseite/apps/dokumaro/ .


## GitHub-Pages-Abschluss

Implementierungscommit: 50f517c83f88cdacf8e5c01526d99c2d63fcc685. GitHub-Pages-Lauf 45836317573 erfolgreich (success). Live-Seitenversion 76da650eb6b7. Im Browser bestätigt: Dokumaro-Produktseite, acht Funktionskarten, geladenes originales 1024-Pixel-App-Icon und geladene 1200-Pixel-Illustration; keine Store-/TestFlight-Verweise. App-Übersicht in Reihenfolge Mitgemischt, Dokumaro. Hilfe über bestehende Navigation erreichbar; Dokumaro auswählbar, 4.985-Zeichen-Limit aktiv. Keine echte Formularnachricht gesendet.

Direkte Abnahme: https://4k5mm85mj2-ship-it.github.io/Webseite/apps/dokumaro/?v=76da650eb6b7

Keine weiteren Änderungen nach Bereitstellung vorgesehen. Praktische VoiceOver-Abnahme und gegebenenfalls echter Testversand bleiben offen; keine produktive Freigabe.
