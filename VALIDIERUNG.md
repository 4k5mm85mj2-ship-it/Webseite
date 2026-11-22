# Prüfung des Website-Entwurfs · 22.11.2026

## Umfang

Nur die Website für Mitgemischt. Die iOS-Anwendung und bestehende Support-/Store-Konfigurationen wurden nicht verändert. Keine Codemagic- oder TestFlight-Läufe.

## Produktquellen

Abgeglichen mit `4k5mm85mj2-ship-it/mit-gemischt`, `main`, Commit `b8b58f2dbe6cba6ef569a70c27421dee38e1bc12`:

- `Mitgemischt/ContentView.swift`: Produktname, Claim, Navigation und Spielregeln.
- `Mitgemischt/GameKind.swift`: Spiele und Personenzahlen.
- `Mitgemischt.xcodeproj/project.pbxproj`: iPhone/iPad, iOS/iPadOS 17.
- `Mitgemischt/NetworkTransport.swift`: lokale Verbindung mit Peer-to-Peer-Unterstützung.
- `Mitgemischt/SupportContact.swift` und `SupportContactView.swift`: Kontakt und Supportthemen.
- `Mitgemischt/ImprintContact.swift`: vorhandene öffentliche Betreiberangaben.
- `Mitgemischt/NameSettings.swift`, `DeviceTrustStore.swift` und `PrivacyInfo.xcprivacy`: lokale Speicherung und Datenschutzmerkmale.

Die ältere Datei `docs/PRIVACY_SECURITY.md` wurde wegen Widersprüchen zur tatsächlichen lokalen Speicherung nicht als Datenschutzerklärung übernommen. Ein offizieller App-Store-Link ist nicht belegt und wird deshalb nicht vorgetäuscht. Die Kartenillustrationen sind Website-Grafiken, keine Screenshots der App.

Kommunikation nach aktuellem BRG-Supportstandard 1.2: verständliche Du-Form, Supportadresse `brg.entwicklung@gmail.com`, keine Antwortfristen, Behebungs- oder Veröffentlichungstermine und keine behauptete vollständige Barrierefreiheit.

## Browserprüfung

Chrome im bereitgestellten Browser; echte CSS-Viewports in einem gleichursprünglichen iframe. Nominale Breiten: 320, 390, 768, 1024 und 1440 Pixel. Durch die Desktop-Scrollleiste war die verfügbare Innenbreite jeweils 15 Pixel kleiner. Alle vier Seiten wurden bei 100 und 200 Prozent Basisschrift geprüft: **40 Kombinationen**.

- Nach Korrektur einer Überbreite im Bereich zu Bedienungshilfen kein horizontaler Seitenüberlauf und keine über den Viewport hinausragenden Text-/Bedienelemente in den geprüften Kombinationen.
- Mobile Startseite und Spielvorstellung visuell kontrolliert; Desktopansicht ebenfalls kontrolliert.
- Spielbeschreibung per Enter geöffnet und per Leertaste geschlossen; Zustand im Accessibility-Baum sichtbar.
- FAQ per Tastatur geöffnet; Antworttext im Accessibility-Baum sichtbar.
- Sprunglink fokussiert den Hauptinhalt `inhalt`.
- Supportadresse kopiert; erfolgreiche Rückmeldung erscheint im Statusbereich.
- E-Mail-Aktionen verwenden ausschließlich die belegte Supportadresse. Für den Test wurde keine E-Mail versendet.
- Dekorative Spielkarten und Symbole sind für Screenreader ausgeblendet; redundante Ziffern/Pluszeichen aus den zugänglichen Namen entfernt.

Die Tests mit 200 Prozent Basisschrift ersetzen keinen realen Browserzoomtest. Keine praktische VoiceOver-Hörprüfung und kein Safari-/iPhone-/iPad-Hardwaretest. Damit ist keine vollständige WCAG-Konformität nachgewiesen.

## Technische Prüfung

- JavaScript-Syntax des optionalen Kopierhelfers und des lokalen Vorschauservers geprüft.
- Interne Verweise und Anker, IDs, Titel, Hauptüberschrift, Sprach-/Viewport-Angaben und lokale Ressourcen strukturell geprüft.
- Native Links und `details/summary` benötigen kein JavaScript.
- Kein Tracking, Browserdaten-Speicher, Service Worker, Kontaktformular oder automatisch versendete Nachricht im Website-Code.
- Die Testfassung enthält `noindex,nofollow` und eine sichtbare Entwurfskennzeichnung. Suchmaschinenanweisungen ersetzen keine Zugangskontrolle.

## Hosting

GitHub Pages ist auf `main` und `/ (root)` vorbereitet. Es wird diese bestehende Konfiguration verwendet. Die endgültige Live-URL wird nach Veröffentlichung tatsächlich geöffnet und auf die Mitgemischt-Inhalte geprüft.

Primärquellen zur technischen Bereitstellung:

- <https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site>
- <https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages>

Die Datenschutzhinweise sind ein Entwurf; die GitHub-Pages-Testfassung enthält den Hinweis auf die Protokollierung von IP-Adressen durch GitHub. Die noch offenen Angaben sind auf der Datenschutzseite aufgeführt.
