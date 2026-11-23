/* Empty until the separate Apps Script deployment and real delivery are verified. */
'use strict';
(() => {
  const endpoint = '';
  const form = document.querySelector('#contact-form');
  if (!form) return;
  const button = form.querySelector('button[type="submit"]');
  const status = document.querySelector('#contact-form-status');
  const requestId = form.querySelector('[name="requestId"]');
  if (!/^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(endpoint) || !window.crypto?.randomUUID) return;
  requestId.value = crypto.randomUUID();
  form.action = endpoint;
  button.disabled = false;
  status.textContent = 'Beim Senden öffnet sich die Bestätigung unseres Versanddienstes bei Google.';
  form.addEventListener('submit', event => {
    if (form.querySelector('[name="website"]').value) {
      event.preventDefault();
      status.textContent = 'Die Nachricht konnte nicht gesendet werden. Bitte schreibe uns direkt per E-Mail.';
      return;
    }
    button.disabled = true;
    status.textContent = 'Deine Nachricht wird übermittelt. Bitte warte auf die Bestätigung.';
  });
  window.addEventListener('pageshow', () => { button.disabled = false; });
})();
