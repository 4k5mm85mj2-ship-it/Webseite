# Allgemeine Hilfe und App-Auswahl – Prüfbericht
Stand: 24. November 2026. Entwicklungsrepository Webseite; Implementierungscommit f586a45e7d225b0bb06e568f1ec6ed7f97abd871, Seitenversion 2ad147d17eac.

## Änderung
Alle Hilfe-Verweise auf den sechs Seiten heißen „Hilfe“. Die Hilfeseite hat allgemeine BRG-Texte, keine Mitgemischt-Navigation und keinen Rücksprung in eine einzelne App. Die bisherige Anleitung zur lokalen Spielverbindung liegt unverändert bei Mitgemischt in der Frage zur Internetverbindung. Anker kontaktformular und barriere-melden bleiben erhalten.

Kontaktformular: native, beschriftete App-Auswahl; Vorauswahl „Allgemein / keine bestimmte App“, außerdem Mitgemischt, Barborant und Sovira. Erlaubte Kennungen werden serverseitig auf feste Namen abgebildet. Die Auswahl steht im Betreff und Nachrichtentext. Keine frei übermittelten Betreffzeilen, keine zusätzlichen Empfänger. App-Wechsel bei gleicher Versandkennung wird im Doppelversandschutz berücksichtigt.

## Prüfungen
- Acht Node-Tests mit lokalen Mocks bestanden: Versand/Reply-To/fester Empfänger, Replay, unklarer Versandstatus, ungültige und manipulierte Eingaben, Quote, alle vier App-Betreffvarianten, alte Formulare ohne App-Feld, App-Wechsel mit gleicher Kennung.
- Alle sechs HTML-Seiten auf eine Hauptüberschrift, eindeutige IDs, interne Anker, konsistente Hilfe-Linktexte und gültige Formularbeschriftung geprüft.
- Live-Aufruf auf GitHub Pages: allgemeiner Titel und Texte, sichtbare Auswahl mit vier Optionen; Hilfe-Link aus dem Mitgemischt-Bereich führt korrekt zur allgemeinen Hilfe. Verschobene Verbindungsanleitung lässt sich bei Mitgemischt aufklappen.
- Tastatur: vom E-Mail-Feld per Tab zur App-Auswahl; Fokus sichtbar mit durchgehender 3-Pixel-Markierung.
- Echter Formularversand mit „Mitgemischt“: Eingang im BRG-Postfach am 24.11.2026 um 21:38 Uhr, Betreff „Website-Kontakt – Mitgemischt – …“; App-Zuordnung im Text.
- Echter Formularversand mit vorausgewähltem „Allgemein“, ohne Namen: Eingang um 21:39 Uhr, Betreff „Website-Kontakt – Allgemein – …“; Reply-To korrekt. Beide kontrollierten Nachrichten gingen ausschließlich an das eigene BRG-Postfach.
- Bestätigungsseite und Rücklink zur Entwicklungs-Hilfe erfolgreich geprüft.

## Grenzen und Bestandsschutz
Kein praktischer VoiceOver-Test der neuen Auswahl; dieser steht zur Abnahme aus. Browserprüfung bei 1348 CSS-Pixeln ohne horizontalen Überlauf. Keine neue vollständige Prüfung mit 320 CSS-Pixeln, 200 Prozent Schrift und beiden Systemerscheinungsbildern durchgeführt. Das Auswahlfeld verwendet die vorhandenen flüssigen Abmessungen, Fokusregeln und Farbvariablen der Eingabefelder; keine neuen Farben eingeführt.

Die Entwicklungsseite verwendet eine eigene Apps-Script-Bereitstellung der Version 3 (ID AKfycbzcwVhKNEY3iYJYehuetwCHtBejFpe33ZONP5bqX4pK2rqh1tvcBl5IsrA7Q7Rl6Q3wpA). Die produktive Bereitstellung bleibt auf Version 2; produktives Repository, Domain, Zugriffsrechte und automatische Eingangsbestätigung wurden nicht geändert. Keine kostenpflichtigen Dienste oder Abhängigkeiten hinzugefügt.
