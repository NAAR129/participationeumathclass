'use strict';

const translations = {
  es: {
    thanks: "Gracias por su participación",
    received: "Hemos recibido su inscripción correctamente.",
    next: "Le enviaremos información sobre el proyecto EuMathClass y acceso a los materiales que vayamos creando.",
    uncertain: "No pudimos confirmar la recepción de su inscripción. Es posible que se haya guardado; evite enviarla nuevamente y consulte al equipo del proyecto.",

    unavailable: 'Las inscripciones estarán disponibles próximamente.',
    language: 'Idioma', title: 'Participación',
    intro: 'Inscríbete para recibir información sobre el proyecto EuMathClass y acceso a los materiales que vayamos creando.',
    name: 'Nombre', email: 'Correo electrónico', country: 'País', submit: 'Inscribirme',
    purpose: 'Al inscribirte, aceptas que utilicemos tu nombre, correo electrónico y país para enviarte información y materiales del proyecto EuMathClass.',
    sending: 'Enviando…', status: 'Estamos enviando su inscripción…',
    required: 'Completa este campo.',
    footer: 'Financiado por la Unión Europea (subvención n.º KA220-HED-000358034). Las opiniones y puntos de vista expresados son únicamente los de los autores y no reflejan necesariamente los de la Unión Europea ni los de la Agencia Nacional Erasmus+. Ni la Unión Europea ni la autoridad concedente pueden ser consideradas responsables de ellos.'
  },
  en: {
    thanks: "Thank you for your participation",
    received: "We have successfully received your registration.",
    next: "We will send you information about the EuMathClass project and access to the materials we develop.",
    uncertain: "We could not confirm receipt of your registration. It may have been saved; please avoid submitting it again and contact the project team.",

    unavailable: 'Registration will open soon.',
    language: 'Language', title: 'Participation',
    intro: 'Register to receive information about the EuMathClass project and access to the materials we develop.',
    name: 'Name', email: 'Email address', country: 'Country', submit: 'Register',
    purpose: 'By registering, you agree that we may use your name, email address and country to send you information and materials from the EuMathClass project.',
    sending: 'Sending…', status: 'We are sending your registration…',
    required: 'Please fill in this field.',
    footer: 'Funded by the European Union (grant no. KA220-HED-000358034). Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or Erasmus+ National Agency. Neither the European Union nor the granting authority can be held responsible for them.'
  },
  de: {
    thanks: "Vielen Dank für Ihre Teilnahme",
    received: "Wir haben Ihre Anmeldung erfolgreich erhalten.",
    next: "Wir senden Ihnen Informationen zum Projekt EuMathClass und Zugang zu den Materialien, die wir entwickeln.",
    uncertain: "Der Eingang Ihrer Anmeldung konnte nicht bestätigt werden. Sie wurde möglicherweise gespeichert; bitte senden Sie sie nicht erneut und wenden Sie sich an das Projektteam.",

    unavailable: 'Die Anmeldung ist in Kürze verfügbar.',
    language: 'Sprache', title: 'Teilnahme',
    intro: 'Melden Sie sich an, um Informationen zum Projekt EuMathClass und Zugang zu den Materialien zu erhalten, die wir entwickeln.',
    name: 'Name', email: 'E-Mail-Adresse', country: 'Land', submit: 'Anmelden',
    purpose: 'Mit Ihrer Anmeldung stimmen Sie zu, dass wir Ihren Namen, Ihre E-Mail-Adresse und Ihr Land verwenden, um Ihnen Informationen und Materialien zum Projekt EuMathClass zu senden.',
    sending: 'Wird gesendet…', status: 'Ihre Anmeldung wird gesendet…',
    required: 'Bitte füllen Sie dieses Feld aus.',
    footer: 'Finanziert von der Europäischen Union (Fördernummer KA220-HED-000358034). Die geäußerten Ansichten und Meinungen sind ausschließlich die der Autorinnen und Autoren und spiegeln nicht notwendigerweise die Ansichten der Europäischen Union oder der Nationalen Agentur für Erasmus+ wider. Weder die Europäische Union noch die Bewilligungsbehörde können dafür verantwortlich gemacht werden.'
  },
  it: {
    thanks: "Grazie per la tua partecipazione",
    received: "Abbiamo ricevuto correttamente la tua iscrizione.",
    next: "Ti invieremo informazioni sul progetto EuMathClass e l’accesso ai materiali che svilupperemo.",
    uncertain: "Non abbiamo potuto confermare la ricezione della tua iscrizione. Potrebbe essere stata salvata; evita di inviarla di nuovo e contatta il team del progetto.",

    unavailable: 'Le iscrizioni saranno disponibili a breve.',
    language: 'Lingua', title: 'Partecipazione',
    intro: 'Iscriviti per ricevere informazioni sul progetto EuMathClass e accedere ai materiali che svilupperemo.',
    name: 'Nome', email: 'Indirizzo e-mail', country: 'Paese', submit: 'Iscrivimi',
    purpose: 'Iscrivendoti, acconsenti all’utilizzo del tuo nome, indirizzo e-mail e paese per ricevere informazioni e materiali del progetto EuMathClass.',
    sending: 'Invio in corso…', status: 'Stiamo inviando la tua iscrizione…',
    required: 'Compila questo campo.',
    footer: 'Finanziato dall’Unione europea (sovvenzione n. KA220-HED-000358034). Le opinioni espresse appartengono esclusivamente agli autori e non riflettono necessariamente quelle dell’Unione europea o dell’Agenzia nazionale Erasmus+. Né l’Unione europea né l’autorità concedente possono essere ritenute responsabili.'
  },
  pt: {
  "thanks": "Obrigado pela sua participação",
  "received": "Recebemos a sua inscrição com sucesso.",
  "next": "Enviar-lhe-emos informações sobre o projeto EuMathClass e acesso aos materiais que formos desenvolvendo.",
  "uncertain": "Não foi possível confirmar a receção da sua inscrição. É possível que tenha sido guardada; evite enviá-la novamente e contacte a equipa do projeto.",
  "unavailable": "As inscrições estarão disponíveis em breve.",
  "language": "Idioma",
  "title": "Participação",
  "intro": "Inscreva-se para receber informações sobre o projeto EuMathClass e acesso aos materiais que formos desenvolvendo.",
  "name": "Nome",
  "email": "Endereço de e-mail",
  "country": "País",
  "submit": "Inscrever-me",
  "purpose": "Ao inscrever-se, aceita que utilizemos o seu nome, endereço de e-mail e país para lhe enviar informações e materiais do projeto EuMathClass.",
  "sending": "A enviar…",
  "status": "Estamos a enviar a sua inscrição…",
  "required": "Preencha este campo.",
  "footer": "Financiado pela União Europeia (subvenção n.º KA220-HED-000358034). Os pontos de vista e as opiniões expressos são exclusivamente dos autores e não refletem necessariamente os da União Europeia ou da Agência Nacional Erasmus+. Nem a União Europeia nem a entidade concedente podem ser responsabilizadas pelos mesmos."
},
  hr: {
  "thanks": "Hvala na sudjelovanju",
  "received": "Vaša je prijava uspješno zaprimljena.",
  "next": "Poslat ćemo vam informacije o projektu EuMathClass i omogućiti pristup materijalima koje budemo izrađivali.",
  "uncertain": "Nismo mogli potvrditi primitak vaše prijave. Moguće je da je spremljena; nemojte je ponovno slati i obratite se projektnom timu.",
  "unavailable": "Prijave će uskoro biti dostupne.",
  "language": "Jezik",
  "title": "Sudjelovanje",
  "intro": "Prijavite se kako biste primali informacije o projektu EuMathClass i pristupili materijalima koje budemo izrađivali.",
  "name": "Ime i prezime",
  "email": "Adresa e-pošte",
  "country": "Država",
  "submit": "Prijavi se",
  "purpose": "Prijavom pristajete na to da koristimo vaše ime, adresu e-pošte i državu kako bismo vam slali informacije i materijale projekta EuMathClass.",
  "sending": "Slanje…",
  "status": "Vaša se prijava šalje…",
  "required": "Ispunite ovo polje.",
  "footer": "Financira Europska unija (broj bespovratnih sredstava KA220-HED-000358034). Izneseni stavovi i mišljenja pripadaju isključivo autorima i ne odražavaju nužno stavove Europske unije ili nacionalne agencije za Erasmus+. Ni Europska unija ni tijelo koje dodjeljuje bespovratna sredstva ne mogu se smatrati odgovornima za njih."
},
  el: {
  "thanks": "Σας ευχαριστούμε για τη συμμετοχή σας",
  "received": "Λάβαμε επιτυχώς την εγγραφή σας.",
  "next": "Θα σας στέλνουμε πληροφορίες για το έργο EuMathClass και θα σας παρέχουμε πρόσβαση στο υλικό που θα δημιουργούμε.",
  "uncertain": "Δεν ήταν δυνατή η επιβεβαίωση της παραλαβής της εγγραφής σας. Ενδέχεται να έχει αποθηκευτεί· αποφύγετε την εκ νέου υποβολή και επικοινωνήστε με την ομάδα του έργου.",
  "unavailable": "Οι εγγραφές θα είναι σύντομα διαθέσιμες.",
  "language": "Γλώσσα",
  "title": "Συμμετοχή",
  "intro": "Εγγραφείτε για να λαμβάνετε πληροφορίες για το έργο EuMathClass και να έχετε πρόσβαση στο υλικό που θα δημιουργούμε.",
  "name": "Ονοματεπώνυμο",
  "email": "Διεύθυνση ηλεκτρονικού ταχυδρομείου",
  "country": "Χώρα",
  "submit": "Εγγραφή",
  "purpose": "Με την εγγραφή σας, συμφωνείτε να χρησιμοποιούμε το όνομα, τη διεύθυνση ηλεκτρονικού ταχυδρομείου και τη χώρα σας για να σας στέλνουμε πληροφορίες και υλικό του έργου EuMathClass.",
  "sending": "Αποστολή…",
  "status": "Η εγγραφή σας αποστέλλεται…",
  "required": "Συμπληρώστε αυτό το πεδίο.",
  "footer": "Χρηματοδοτείται από την Ευρωπαϊκή Ένωση (αριθμός επιχορήγησης KA220-HED-000358034). Οι απόψεις και οι γνώμες που εκφράζονται ανήκουν αποκλειστικά στους συγγραφείς και δεν αντανακλούν κατ’ ανάγκη τις απόψεις της Ευρωπαϊκής Ένωσης ή της Εθνικής Μονάδας Erasmus+. Ούτε η Ευρωπαϊκή Ένωση ούτε η αρχή που χορηγεί την επιχορήγηση μπορούν να θεωρηθούν υπεύθυνες για αυτές."
}
};

const selector = document.getElementById('language');
const form = document.getElementById('registration');
const button = form.querySelector('button');
const endpoint = String(window.EUMATHCLASS_REGISTRATION_URL || '').trim();
const configured = /^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(endpoint);
if (configured) form.action = endpoint;
const status = document.getElementById('status');
const confirmation = document.getElementById('confirmation');
let outcome = 'idle';
let submitting = false;
let language;

function detectLanguage() {
  let saved;
  try { saved = localStorage.getItem('eumathclass-participation-language'); } catch (_) {}
  if (Object.hasOwn(translations, saved)) return saved;
  for (const locale of navigator.languages || [navigator.language]) {
    const candidate = String(locale).toLowerCase().split(/[-_]/)[0];
    if (Object.hasOwn(translations, candidate)) return candidate;
  }
  return 'en';
}

function setLanguage(value) {
  language = Object.hasOwn(translations, value) ? value : 'en';
  const copy = translations[language];
  document.documentElement.lang = language;
  document.title = `${copy.title} · EuMathClass`;
  document.querySelector('meta[name="description"]').content = copy.intro;
  document.querySelectorAll('[data-key]').forEach(element => {
    element.textContent = copy[element.dataset.key];
  });
  if (!configured) { status.hidden = false; status.textContent = copy.unavailable; }
  selector.value = language;
  document.getElementById('submission-language').value = language;
  form.querySelectorAll('input:not([type=hidden])').forEach(input => input.setCustomValidity(''));
  if (outcome === 'uncertain') status.textContent = copy.uncertain;
  if (submitting && outcome === 'sending') {
    button.textContent = copy.sending;
    status.textContent = copy.status;
  }
}

selector.addEventListener('change', () => {
  setLanguage(selector.value);
  try { localStorage.setItem('eumathclass-participation-language', language); } catch (_) {}
});

form.querySelectorAll('input:not([type=hidden])').forEach(input => {
  input.addEventListener('input', () => input.setCustomValidity(''));
});

form.addEventListener('submit', event => {
  if (!configured) { event.preventDefault(); return; }
  if (submitting) { event.preventDefault(); return; }
  for (const input of form.querySelectorAll('input:not([type=hidden])')) {
    input.value = input.value.trim();
    input.setCustomValidity(input.value ? '' : translations[language].required);
  }
  if (!form.reportValidity()) { event.preventDefault(); return; }
  // Submit normally so Apps Script displays its translated HTML confirmation.
  // A saved registration does not depend on reading a cross-origin fetch response.
  submitting = true;
  outcome = 'sending';
  button.disabled = true;
  button.textContent = translations[language].sending;
  status.hidden = false;
  status.textContent = translations[language].status;
});

window.addEventListener('pageshow', () => {
  outcome = 'idle';
  submitting = false;
  button.disabled = !configured;
  status.hidden = true;
  setLanguage(language || detectLanguage());
});
setLanguage(detectLanguage());
