# BRG-Kontaktformular – separater Versanddienst

Vorbereitet am 23. November 2026. Noch nicht in Google bereitgestellt. Der Versand auf der Website bleibt deaktiviert, bis eine echte Bereitstellung und die Zustellung ins BRG-Postfach geprüft wurden. Keine Änderung am bestehenden Apps-Script-Supportprojekt, an dessen Triggern oder an der automatischen Eingangsbestätigung.

## Bereitstellung nach Freigabe des Google-Zugriffs

1. In script.google.com ausdrücklich das Konto brg.entwicklung@gmail.com auswählen. Ein neues eigenständiges Projekt „BRG Website-Kontaktformular“ anlegen.
2. Code.gs und appsscript.json aus diesem Verzeichnis übernehmen. Keine bestehenden Projekte überschreiben. Der einzige benötigte OAuth-Scope ist script.send_mail (Nachrichten senden, keine Postfach-Leseberechtigung).
3. Quelltext prüfen und als neue Web-App bereitstellen: Ausführung als Eigentümer des BRG-Kontos; Zugriff für Besucher ohne Google-Anmeldung. Berechtigungsabfrage gesondert bestätigen lassen. Keine Zugangsdaten oder OAuth-Token in Website oder Repository übernehmen.
4. Die bestätigte /exec-Adresse in assets/contact-form.js als endpoint hinterlegen. Formular wird damit aktiv. Native HTTPS-POST-Navigation öffnet die Ergebnisansicht des Versanddienstes; kein no-cors-Fetch und keine unbelegte Erfolgsmeldung.
5. Mit einer eindeutig als Test gekennzeichneten Nachricht prüfen: tatsächlicher Eingang in brg.entwicklung@gmail.com, korrekte Antwortadresse, Bestätigung erst nach erfolgreichem MailApp-Aufruf, Replay ohne zweite Mail, ungültige Eingaben, Quoten- und Fehlerfall. Kein Versand an Dritte. Ergebnis der realen Zustellung separat dokumentieren.
6. Testseite über GitHub Pages bereitstellen und anonym ohne Google-Anmeldung testen. Erst nach Abnahme nach Webseite-produktiv übernehmen. CONTACT.back für die produktive Domain anpassen, wenn diese tatsächlich verbunden ist.

## Verhalten und Grenzen

- Empfänger ist fest brg.entwicklung@gmail.com. Besucher können keine beliebigen Empfänger bestimmen. Name freiwillig, E-Mail und Nachricht erforderlich, maximal 5.000 Zeichen.
- Browser- und Servervalidierung, Honeypot ohne sichtbare Rätsel, maximal drei Sendungen je Antwortadresse/Stunde und 30/Tag, Quotenreserve zehn Empfänger. Keine Behauptung vollständiger Bot-Abwehr; Apps Script bietet hier keine verlässliche Quell-IP-Begrenzung.
- ScriptLock schützt die Reservierung und Verarbeitung gegen gleichzeitige Doppelanfragen. Bei unklarem Versandstatus keine automatische Wiederholung. Versandkennung und Inhaltsprüfsumme verhindern erneuten Versand derselben Anfrage. Prüfsummen, Kennungen und Zähler werden bei der nächsten Anfrage nach Ablauf von 24 Stunden entfernt. Keine dauerhafte Speicherung von Nachrichtentexten außerhalb des Postfachs, kein Protokollieren personenbezogener Formulareingaben.
- Es wird nur eine Nachricht an das eigene BRG-Postfach gesendet, keine automatische Bestätigung an die eingegebene Besucheradresse. Die Erfolgsseite bestätigt den Versanddienst-Aufruf, nicht eine fachliche Bearbeitung. Bestehende Supportregeln schließen Nachrichten aus dem eigenen Konto aus; eine automatische Kunden-Eingangsbestätigung wird dadurch nicht neu aktiviert. Gmail-Antworten auf diese Nachrichten an Reply-To/ursprünglichen Formularabsender richten und vor Versand prüfen.
- Quoten sind von Google begrenzt und können geändert werden. Keine kostenpflichtigen APIs/Abos eingerichtet. Bei Quotenende bleibt der direkte E-Mail-Kontakt erhalten.

## Prüfstand

`node --test services/contact-form/contact-form.test.cjs`: fünf Tests bestanden (nur lokale Mocks). Gültiger Versand, fester Empfänger, Reply-To, Replay, geänderte Inhalte bei gleicher Kennung, mehrdeutiger Fehler ohne Wiederholung, ungültige Felder/Header-Injection/Honeypot/Längen, Quote und Adresslimit. `node --check assets/contact-form.js` und `git diff --check` erfolgreich.

16 Browserkombinationen: Rahmenbreite 320/390/768/1440, Schrift 100/200 Prozent, hell/dunkel. Kein horizontaler Dokumentüberlauf, Eingaben innerhalb des Bildschirms, Versandbutton korrekt deaktiviert. Ungültiges E-Mail-Format wird nativ erkannt. Beschriftungen, Pflichtfelder und Einrichtungsstatus im Accessibility-Baum vorhanden. Kein praktischer VoiceOver-Test und noch kein echter Nachrichteneingang geprüft.

Kontraste: Text hell 12,20:1; Eingaberahmen hell 5,81:1; Text dunkel 14,26:1; Eingaberahmen dunkel 10,15:1; weiße Schrift auf Mittelblau 4,79:1.

Der Browserzugriff auf script.google.com wurde durch die automatische Sicherheitsprüfung abgelehnt, weil die zusätzliche Origin-Freigabe fehlte. Kein Umgehungsversuch. Die Bereitstellung ist deshalb offen.
