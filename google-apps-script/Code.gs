/**
 * Registro EuMathClass: guarda Fecha | Nombre | Email | País.
 * Reemplazar PEGA_AQUI_EL_ID_DE_TU_HOJA por el ID del código actual.
 * Pegar en Apps Script y publicar como aplicación web.
 */
function doPost(e) {
  const p = e && e.parameter ? e.parameter : {};
  const nombre = String(p.nombre || '').trim();
  const email = String(p.email || '').trim();
  const pais = String(p.pais || '').trim();
  let ok = false;
  const lock = LockService.getScriptLock();
  try {
    if (!nombre || nombre.length > 150 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || !pais || pais.length > 100) throw new Error('Invalid registration');
    lock.waitLock(10000);
    const ss = SpreadsheetApp.openById('PEGA_AQUI_EL_ID_DE_TU_HOJA');
    const sheet = ss.getSheetByName('registro');
    if (!sheet) throw new Error('Missing registration sheet');
    const literal = value => /^[=+@-]/.test(value) ? "'" + value : value;
    sheet.appendRow([new Date(), literal(nombre), literal(email), literal(pais)]);
    SpreadsheetApp.flush();
    ok = true;
  } catch (error) {
    console.error('Registration failed: ' + error.message);
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }

  // Mostrar el agradecimiento únicamente después de guardar la inscripción.
  const copy = {
    es: ['Participación', 'Gracias por su participación', 'Hemos recibido su inscripción correctamente.', 'Le enviaremos información sobre el proyecto EuMathClass y acceso a los materiales que vayamos creando.', 'Volver a la página', 'No se pudo confirmar la inscripción', 'Consulte al equipo del proyecto antes de enviarla nuevamente.'],
    en: ['Participation', 'Thank you for your participation', 'We have successfully received your registration.', 'We will send you information about the EuMathClass project and access to the materials we develop.', 'Back to the page', 'Registration could not be confirmed', 'Please contact the project team before submitting again.'],
    de: ['Teilnahme', 'Vielen Dank für Ihre Teilnahme', 'Wir haben Ihre Anmeldung erfolgreich erhalten.', 'Wir senden Ihnen Informationen zum Projekt EuMathClass und Zugang zu den Materialien, die wir entwickeln.', 'Zurück zur Seite', 'Die Anmeldung konnte nicht bestätigt werden', 'Bitte wenden Sie sich an das Projektteam, bevor Sie die Anmeldung erneut senden.'],
    it: ['Partecipazione', 'Grazie per la tua partecipazione', 'Abbiamo ricevuto correttamente la tua iscrizione.', 'Ti invieremo informazioni sul progetto EuMathClass e l’accesso ai materiali che svilupperemo.', 'Torna alla pagina', 'Non è stato possibile confermare l’iscrizione', 'Contatta il team del progetto prima di inviarla di nuovo.'],
    pt: ["Participação","Obrigado pela sua participação","Recebemos a sua inscrição com sucesso.","Enviar-lhe-emos informações sobre o projeto EuMathClass e acesso aos materiais que formos desenvolvendo.","Voltar à página","Não foi possível confirmar a inscrição","Contacte a equipa do projeto antes de voltar a enviar a inscrição."],
    hr: ["Sudjelovanje","Hvala na sudjelovanju","Vaša je prijava uspješno zaprimljena.","Poslat ćemo vam informacije o projektu EuMathClass i omogućiti pristup materijalima koje budemo izrađivali.","Povratak na stranicu","Prijavu nije bilo moguće potvrditi","Obratite se projektnom timu prije ponovnog slanja prijave."],
    el: ["Συμμετοχή","Σας ευχαριστούμε για τη συμμετοχή σας","Λάβαμε επιτυχώς την εγγραφή σας.","Θα σας στέλνουμε πληροφορίες για το έργο EuMathClass και θα σας παρέχουμε πρόσβαση στο υλικό που θα δημιουργούμε.","Επιστροφή στη σελίδα","Δεν ήταν δυνατή η επιβεβαίωση της εγγραφής","Επικοινωνήστε με την ομάδα του έργου πριν υποβάλετε ξανά την εγγραφή."]
  };
  const lang = Object.prototype.hasOwnProperty.call(copy, p.idioma) ? p.idioma : 'es';
  const footers = {"es":"Financiado por la Unión Europea (subvención n.º KA220-HED-000358034). Las opiniones y puntos de vista expresados son únicamente los de los autores y no reflejan necesariamente los de la Unión Europea ni los de la Agencia Nacional Erasmus+. Ni la Unión Europea ni la autoridad concedente pueden ser consideradas responsables de ellos.","en":"Funded by the European Union (grant no. KA220-HED-000358034). Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or Erasmus+ National Agency. Neither the European Union nor the granting authority can be held responsible for them.","de":"Finanziert von der Europäischen Union (Fördernummer KA220-HED-000358034). Die geäußerten Ansichten und Meinungen sind ausschließlich die der Autorinnen und Autoren und spiegeln nicht notwendigerweise die Ansichten der Europäischen Union oder der Nationalen Agentur für Erasmus+ wider. Weder die Europäische Union noch die Bewilligungsbehörde können dafür verantwortlich gemacht werden.","it":"Finanziato dall’Unione europea (sovvenzione n. KA220-HED-000358034). Le opinioni espresse appartengono esclusivamente agli autori e non riflettono necessariamente quelle dell’Unione europea o dell’Agenzia nazionale Erasmus+. Né l’Unione europea né l’autorità concedente possono essere ritenute responsabili.","pt":"Financiado pela União Europeia (subvenção n.º KA220-HED-000358034). Os pontos de vista e as opiniões expressos são exclusivamente dos autores e não refletem necessariamente os da União Europeia ou da Agência Nacional Erasmus+. Nem a União Europeia nem a entidade concedente podem ser responsabilizadas pelos mesmos.","hr":"Financira Europska unija (broj bespovratnih sredstava KA220-HED-000358034). Izneseni stavovi i mišljenja pripadaju isključivo autorima i ne odražavaju nužno stavove Europske unije ili nacionalne agencije za Erasmus+. Ni Europska unija ni tijelo koje dodjeljuje bespovratna sredstva ne mogu se smatrati odgovornima za njih.","el":"Χρηματοδοτείται από την Ευρωπαϊκή Ένωση (αριθμός επιχορήγησης KA220-HED-000358034). Οι απόψεις και οι γνώμες που εκφράζονται ανήκουν αποκλειστικά στους συγγραφείς και δεν αντανακλούν κατ’ ανάγκη τις απόψεις της Ευρωπαϊκής Ένωσης ή της Εθνικής Μονάδας Erasmus+. Ούτε η Ευρωπαϊκή Ένωση ούτε η αρχή που χορηγεί την επιχορήγηση μπορούν να θεωρηθούν υπεύθυνες για αυτές."};
  const t = copy[lang];
  const base = 'https://naar129.github.io/participationeumathclass/';
  const html = `<!doctype html>
<html lang="${lang}"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<base target="_top"><title>${t[0]} · EuMathClass</title>
<link rel="stylesheet" href="${base}styles.css?v=20261005-eumathclass1">
<style>.language-tag{padding:10px 16px;border:1px solid #cbd1dc;border-radius:13px;color:#173b67}</style>
</head><body><main class="card">
<header class="logos"><img src="${base}assets/eu.jpg" alt="Co-funded by the European Union"><img src="${base}assets/eumathclass.png" alt="EuMathClass"></header>
<div class="language-row"><span class="language-tag">${lang.toUpperCase()}</span></div>
<h1>${t[0]}</h1>
<section class="confirmation" aria-labelledby="thanks">
<div class="success-icon" aria-hidden="true">${ok ? '✓' : '!'}</div>
<h2 id="thanks">${ok ? t[1] : t[5]}</h2>
<p>${ok ? t[2] : t[6]}</p>
${ok ? '<p class="next-steps">' + t[3] + '</p>' : ''}
<a class="return-link" href="${base}" target="_top">${t[4]}</a>
</section>
<footer>${footers[lang]}</footer>
</main></body></html>`;
  return HtmlService.createHtmlOutput(html).setTitle(t[0] + ' · EuMathClass');
}
