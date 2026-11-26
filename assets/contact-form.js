/* Separate Apps Script endpoint; native POST with server-side confirmation. */
'use strict';
(() => {
  const endpoint = 'https://script.google.com/macros/s/AKfycbzcwVhKNEY3iYJYehuetwCHtBejFpe33ZONP5bqX4pK2rqh1tvcBl5IsrA7Q7Rl6Q3wpA/exec';
  const form = document.querySelector('#contact-form');
  if (!form) return;
  const button = form.querySelector('button[type="submit"]');
  const status = document.querySelector('#contact-form-status');
  const app = form.querySelector('[name="app"]');
  const message = form.querySelector('[name="message"]');
  const messageHint = document.querySelector('#contact-message-hint');
  const dokumaroPrefix = 'App: Dokumaro\n\n';
  // Existing deployed service accepts legacy messages without an app field.
  // Identify Dokumaro in the message; never alter the shared Google script.
  function updateMessageLimit() {
    message.maxLength = app.value === 'dokumaro' ? 5000 - dokumaroPrefix.length : 5000;
    messageHint.textContent = 'Bis zu ' + message.maxLength.toLocaleString('de-DE') + ' Zeichen. Bitte keine Passwörter oder Zugangscodes senden.';
    message.setCustomValidity(message.value.length > message.maxLength ? 'Bitte kürze deine Nachricht auf höchstens ' + message.maxLength + ' Zeichen.' : '');
  }
  app.addEventListener('change', updateMessageLimit);
  message.addEventListener('input', updateMessageLimit);
  form.addEventListener('formdata', event => {
    if (event.formData.get('app') === 'dokumaro') {
      event.formData.delete('app');
      event.formData.set('message', dokumaroPrefix + event.formData.get('message'));
    }
  });
  updateMessageLimit();
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
  window.addEventListener('pageshow', () => { updateMessageLimit(); button.disabled = false; });
})();

