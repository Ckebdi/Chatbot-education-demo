(function () {
'use strict';

/* ══════════════════════════════════════════
   BASE DE CONNAISSANCES
   → Mettre à jour avant mise en ligne
   ══════════════════════════════════════════ */
var KB = {
  tel:        '01 55 87 20 80',
  email:      'contact@epie-formation.fr',
  emailHandi: 'handi@epie-formation.fr',
  adresse:    '6 Rue Edouard Vaillant, 93200 Saint-Denis',
  horaires:   'Du lundi au vendredi, de 9h à 17h',
  mapsUrl:    'https://www.google.fr/maps/dir//E.P.I.E+Formation,+6+Rue+Edouard+Vaillant,+93200+Saint-Denis',
  certif:     'Certifié Qualiopi',
  formspreeUrl: 'https://formspree.io/f/VOTRE_ID',

  formations: {
    socle: {
      nom: 'Socle de compétences & CléA',
      desc: 'Compétences fondamentales pour l\'emploi : lecture, calcul, informatique, projet professionnel. Certification CléA RS7003 reconnue nationalement.',
      duree: '35 à 80h selon le parcours',
      fin: 'Pôle Emploi, CPF, OPCO',
      sessions: '9 juin · 1er juillet · 25 août 2025'
    },
    linguistique: {
      nom: 'Linguistique (FLE & Alphabétisation)',
      desc: 'Français Langue Étrangère, remise à niveau, alphabétisation. Adapté à tous les niveaux, du débutant au perfectionnement.',
      duree: 'Variable selon le niveau',
      fin: 'Pôle Emploi, plan de formation employeur',
      sessions: 'Sessions continues — nous contacter'
    },
    numerique: {
      nom: 'Numérique',
      desc: 'Du numérique fondamental à la certification CléA Numérique. Bureautique, e-mails, outils collaboratifs, cybersécurité basique.',
      duree: '35h (CléA Numérique)',
      fin: 'CPF, Pôle Emploi, OPCO',
      sessions: '9 juin · 1er juillet · 25 août 2025'
    },
    administratif: {
      nom: 'Administratif',
      desc: 'Gestion administrative professionnelle, maîtrise des outils bureautiques (Word, Excel), rédaction de documents professionnels.',
      duree: 'Variable selon le programme',
      fin: 'CPF, plan de formation employeur',
      sessions: 'Sur demande — nous contacter'
    }
  },

  financement: {
    de:  'En tant que demandeur(se) d\'emploi, votre formation peut être **prise en charge à 100 %** via Pôle Emploi. Notre équipe monte le dossier avec vous — vous n\'avez rien à gérer seul(e).',
    sal: 'En tant que salarié(e) : **CPF** (Mon Compte Formation), **plan de développement des compétences** de votre entreprise, ou financement **OPCO** selon votre secteur.',
    ind: 'En tant qu\'indépendant(e) / TNS : **CPF** et votre **OPCO** (ex. AGEFICE pour les travailleurs non-salariés). Contactez-nous pour un accompagnement personnalisé.',
    cpf: 'Le **CPF (Compte Personnel de Formation)** est alimenté chaque année par vos droits à la formation. Vérifiez votre solde sur **moncompteformation.gouv.fr**. Plusieurs de nos formations y sont éligibles.'
  }
};

/* ══════════════════════════════════════════
   TRADUCTIONS FR / EN
══════════════════════════════════════════ */
var TR = {
  fr: {
    greeting:    'Bonjour ! Je suis **Klea**, votre assistante EPIE Formation 🔑\n\nComment puis-je vous aider aujourd\'hui ?',
    status:      'Assistante EPIE Formation',
    typing:      'Klea écrit…',
    placeholder: 'Votre message…',
    footer:      '🤖 Assistante automatisée · Pas un humain · RGPD',
    banner:      '💬 Une question sur nos formations ?',
    langOk:      'Langue changée en français 🇫🇷',
    fallback:    'Je n\'ai pas bien compris votre demande 😊\nUtilisez les boutons ci-dessous ou appelez le **01 55 87 20 80**.',
    menu:        ['Nos formations', 'Financement & aides', 'Adresse & horaires', 'Nous contacter', 'Accessibilité'],
    menuIds:     ['formations', 'financement', 'adresse', 'contact', 'accessibilite'],
    back:        '← Retour au menu',
    backF:       '← Retour aux formations',
    reset:       '↺ Réinitialiser',

    fStart:      'Pour vous recontacter rapidement, j\'ai besoin de quelques informations.\n\nQuel est votre **prénom** ?',
    fNom:        'Merci %s ! Et votre **nom de famille** ?',
    fEmail:      'Votre **adresse e-mail** ?',
    fTel:        'Un numéro de **téléphone** ?\n_(Tapez "passer" si vous préférez)_',
    fSit:        'Quelle est votre **situation actuelle** ?',
    fFor:        'Quelle **formation** vous intéresse ?',
    fConfHdr:    '✅ Voici le récapitulatif de votre demande :',
    fConfOk:     '✅ Envoyer ma demande',
    fConfEdit:   '✏️ Corriger',
    fCancelled:  'Formulaire annulé. Comment puis-je vous aider ?',
    fSuccess:    '🎉 **Votre demande a bien été envoyée !**\n\nMerci **%s** ! Un conseiller EPIE vous contactera sous **48h ouvrées** à l\'adresse **%e**.\n\n📞 En cas d\'urgence : 01 55 87 20 80',
    fErrPrenom:  'Merci de saisir un prénom valide (au moins 2 lettres).',
    fErrNom:     'Merci de saisir un nom valide.',
    fErrEmail:   'Cet e-mail ne semble pas valide. Exemple : nom@gmail.com',
    fErrTel:     'Numéro invalide. Tapez "passer" pour ignorer.',
    fSitLabels:  ['Demandeur(se) d\'emploi', 'Salarié(e)', 'Indépendant(e) / TNS', 'Autre / Entreprise'],
    fForLabels:  ['Socle / CléA', 'Linguistique / FLE', 'Numérique', 'Administratif', 'À définir']
  },

  en: {
    greeting:    'Hello! I\'m **Klea**, your EPIE Formation assistant 🔑\n\nHow can I help you today?',
    status:      'EPIE Formation assistant',
    typing:      'Klea is typing…',
    placeholder: 'Your message…',
    footer:      '🤖 Automated assistant · Not a human · GDPR',
    banner:      '💬 Questions about our courses?',
    langOk:      'Language changed to English 🇬🇧',
    fallback:    'I didn\'t quite understand 😊\nUse the buttons below or call **01 55 87 20 80**.',
    menu:        ['Our courses', 'Funding & support', 'Address & hours', 'Contact us', 'Accessibility'],
    menuIds:     ['formations', 'financement', 'adresse', 'contact', 'accessibilite'],
    back:        '← Back to menu',
    backF:       '← Back to courses',
    reset:       '↺ Reset',

    fStart:      'To get back to you quickly, I need a few details.\n\nWhat is your **first name**?',
    fNom:        'Thanks %s! And your **last name**?',
    fEmail:      'Your **email address**?',
    fTel:        'A **phone number**?\n_(Type "skip" if you prefer)_',
    fSit:        'What is your **current situation**?',
    fFor:        'Which **course** interests you?',
    fConfHdr:    '✅ Here is a summary of your request:',
    fConfOk:     '✅ Send my request',
    fConfEdit:   '✏️ Correct',
    fCancelled:  'Form cancelled. How can I help?',
    fSuccess:    '🎉 **Your request has been sent!**\n\nThank you **%s**! An EPIE advisor will contact you within **48 business hours** at **%e**.\n\n📞 Urgent? Call: 01 55 87 20 80',
    fErrPrenom:  'Please enter a valid first name (at least 2 letters).',
    fErrNom:     'Please enter a valid last name.',
    fErrEmail:   'This email looks invalid. Example: name@gmail.com',
    fErrTel:     'Invalid number. Type "skip" to ignore.',
    fSitLabels:  ['Job seeker', 'Employee', 'Self-employed / freelance', 'Other / Company'],
    fForLabels:  ['Core skills / CléA', 'French language (FLE)', 'Digital / IT', 'Administrative', 'Not sure yet']
  }
};

/* ══════════════════════════════════════════
   ÉTAT
══════════════════════════════════════════ */
var lang        = 'fr';
var isOpen      = false;
var hasGreeted  = false;
var busy        = false;
var bannerShown = false;

var STEPS = ['prenom', 'nom', 'email', 'tel', 'situation', 'formation', 'confirm'];
var form = {
  active: false,
  step: null,
  data: { prenom:'', nom:'', email:'', tel:'', situation:'', formation:'' }
};

/* ══════════════════════════════════════════
   UTILITAIRES
══════════════════════════════════════════ */
function el(id) { return document.getElementById(id); }
function tr() { return TR[lang]; }

function now() {
  return new Date().toLocaleTimeString(lang === 'fr' ? 'fr-FR' : 'en-GB', {
    hour: '2-digit',
    minute: '2-digit'
  });
}

function md(txt) {
  return txt
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/_(.*?)_/g, '<em>$1</em>')
    .replace(/\n/g, '<br>');
}

function scrollEnd() {
  var m = el('klea-msgs');
  setTimeout(function () {
    m.scrollTop = m.scrollHeight;
  }, 60);
}

function validEmail(e) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);
}

function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

function updateProgress() {
  var prog = el('klea-prog');
  var bar  = el('klea-prog-bar');
  if (!form.active) {
    prog.style.display = 'none';
    return;
  }
  var idx = STEPS.indexOf(form.step);
  var pct = Math.round(((idx + 1) / STEPS.length) * 100);
  prog.style.display = 'block';
  bar.style.width = pct + '%';
}

/* ══════════════════════════════════════════
   MESSAGES
══════════════════════════════════════════ */
function addMsg(text, who, type) {
  var msgs = el('klea-msgs');
  var row  = document.createElement('div');
  row.className = 'krow ' + who;

  var av = document.createElement('div');
  av.className = 'kav ' + who;
  av.textContent = who === 'b' ? 'KL' : '👤';

  var wrap = document.createElement('div');
  wrap.className = 'kwrap';

  var bub = document.createElement('div');
  bub.className = 'kbub ' + (type || who);
  bub.innerHTML = md(text);

  var ts = document.createElement('div');
  ts.className = 'kts';
  ts.textContent = now();

  wrap.appendChild(bub);
  wrap.appendChild(ts);
  row.appendChild(av);
  row.appendChild(wrap);
  msgs.appendChild(row);

  scrollEnd();
}

/* ══════════════════════════════════════════
   TYPING + RÉPONSE BOT
══════════════════════════════════════════ */
function showTyping() {
  el('klea-typ').style.display = 'flex';
  el('ktlbl').textContent = tr().typing;
  scrollEnd();
}

function hideTyping() {
  el('klea-typ').style.display = 'none';
}

function botSay(text, delay, chips, type) {
  busy = true;
  showTyping();

  setTimeout(function () {
    hideTyping();
    addMsg(text, 'b', type || 'b');
    buildChips(chips);
    updateProgress();
    busy = false;
    scrollEnd();
  }, delay || 900);
}

/* ══════════════════════════════════════════
   CHIPS / SUGGESTIONS
══════════════════════════════════════════ */
function buildChips(list) {
  var box = el('klea-chips');
  box.innerHTML = '';

  if (list && list.length) {
    list.forEach(function (c) {
      var b = document.createElement('button');
      b.className = 'chip' + (c.cls ? ' ' + c.cls : '');
      b.textContent = c.lbl;
      b.onclick = function () { act(c.id); };
      box.appendChild(b);
    });
  }

  var rst = document.createElement('button');
  rst.id = 'klea-reset-btn';
  rst.textContent = tr().reset;
  rst.setAttribute('aria-label', 'Réinitialiser la conversation');
  rst.onclick = function () { act('reset'); };
  box.appendChild(rst);
}

function mainMenu() {
  return tr().menu.map(function (lbl, i) {
    return { lbl: lbl, id: tr().menuIds[i] };
  });
}

/* ══════════════════════════════════════════
   FORMULAIRE CONVERSATIONNEL
══════════════════════════════════════════ */
function startForm(formationPre) {
  form.active = true;
  form.step   = 'prenom';
  form.data   = {
    prenom: '',
    nom: '',
    email: '',
    tel: '',
    situation: '',
    formation: formationPre || ''
  };
  el('klea-chips').innerHTML = '';
  botSay(tr().fStart, 700);
}

function handleFormStep(txt) {
  var v = txt.trim();

  if (/^(annuler|cancel|stop|quitter|quit)$/i.test(v)) {
    form.active = false;
    form.step = null;
    el('klea-prog').style.display = 'none';
    botSay(tr().fCancelled, 500, mainMenu());
    return;
  }

  switch (form.step) {
    case 'prenom':
      if (v.length < 2) {
        botSay(tr().fErrPrenom, 600);
        return;
      }
      form.data.prenom = cap(v);
      form.step = 'nom';
      botSay(tr().fNom.replace('%s', '**' + form.data.prenom + '**'), 650);
      break;

    case 'nom':
      if (v.length < 2) {
        botSay(tr().fErrNom, 600);
        return;
      }
      form.data.nom = cap(v);
      form.step = 'email';
      botSay(tr().fEmail, 650);
      break;

    case 'email':
      if (!validEmail(v)) {
        botSay(tr().fErrEmail, 600);
        return;
      }
      form.data.email = v.toLowerCase();
      form.step = 'tel';
      botSay(tr().fTel, 650);
      break;

    case 'tel':
      if (/^(passer|skip|non|no|-)$/i.test(v) || !v) {
        form.data.tel = '';
      } else {
        var clean = v.replace(/[\s.\-()+ ]/g, '');
        if (!/^\d{8,15}$/.test(clean)) {
          botSay(tr().fErrTel, 600);
          return;
        }
        form.data.tel = v;
      }
      form.step = 'situation';
      botSay(
        tr().fSit,
        650,
        tr().fSitLabels.map(function (lbl, i) {
          return { lbl: lbl, id: '_fs_' + i };
        })
      );
      break;

    case 'formation':
      form.data.formation = v;
      showConfirm();
      break;
  }
}

function setSituation(label) {
  form.data.situation = label;

  if (form.data.formation) {
    showConfirm();
  } else {
    form.step = 'formation';
    botSay(
      tr().fFor,
      650,
      tr().fForLabels.map(function (lbl, i) {
        return { lbl: lbl, id: '_ff_' + i };
      })
    );
  }
}

function setFormation(label) {
  form.data.formation = label;
  showConfirm();
}

function showConfirm() {
  form.step = 'confirm';
  var d  = form.data;
  var fr = (lang === 'fr');

  botSay(
    tr().fConfHdr + '\n\n' +
    (fr ? 'Prénom' : 'First name') + ' : **' + d.prenom + '**\n' +
    (fr ? 'Nom' : 'Last name') + ' : **' + d.nom + '**\n' +
    'E-mail : **' + d.email + '**\n' +
    (fr ? 'Téléphone' : 'Phone') + ' : ' + (d.tel || '—') + '\n' +
    'Situation : ' + (d.situation || '—') + '\n' +
    (fr ? 'Formation' : 'Course') + ' : ' + (d.formation || '—'),
    950,
    [
      { lbl: tr().fConfOk, id: '_fok', cls: 'gold' },
      { lbl: tr().fConfEdit, id: '_fedit', cls: 'sec' }
    ]
  );
}

function submitForm() {
  busy = true;
  showTyping();

  var d = form.data;
  form.active = false;
  form.step = null;
  el('klea-prog').style.display = 'none';

  try {
    var leads = JSON.parse(localStorage.getItem('klea_leads') || '[]');
    leads.push({
      date: new Date().toISOString(),
      prenom: d.prenom,
      nom: d.nom,
      email: d.email,
      tel: d.tel,
      situation: d.situation,
      formation: d.formation
    });
    localStorage.setItem('klea_leads', JSON.stringify(leads));
  } catch (e) {}

  var url    = KB.formspreeUrl;
  var isReal = url && url.indexOf('VOTRE_ID') === -1 && url.indexOf('formspree.io') !== -1;

  function onDone() {
    hideTyping();
    var msg = tr().fSuccess
      .replace('%s', d.prenom)
      .replace('%e', d.email);
    addMsg(msg, 'b', 'ok');
    buildChips(mainMenu());
    busy = false;
  }

  if (isReal) {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        prenom: d.prenom,
        nom: d.nom,
        email: d.email,
        telephone: d.tel || '—',
        situation: d.situation,
        formation: d.formation,
        source: 'Chatbot Klea',
        date: new Date().toLocaleString('fr-FR')
      })
    }).then(onDone).catch(onDone);
  } else {
    setTimeout(onDone, 1200);
  }
}

/* ══════════════════════════════════════════
   DÉTECTION D'INTENTION
══════════════════════════════════════════ */
function detect(raw) {
  var s = raw.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  if (/clea|cle a|socle|competence/.test(s)) return 'f_socle';
  if (/numerique|num.r|informatique|digital|ordinateur/.test(s)) return 'f_num';
  if (/linguistique|fle|fran.ais langue|alphab/.test(s)) return 'f_ling';
  if (/administratif|bureautique|word|excel|redact/.test(s)) return 'f_admin';
  if (/formation|cours|apprendre|qualifier|certif/.test(s)) return 'formations';
  if (/cpf|compte personnel/.test(s)) return 'fi_cpf';
  if (/pole emploi|demandeur|ch.mage|france travail/.test(s)) return 'fi_de';
  if (/salari|employeur|opco|plan de form/.test(s)) return 'fi_sal';
  if (/independant|auto.entrepr|freelance|tns/.test(s)) return 'fi_ind';
  if (/financ|aide|bours|gratuit|prix|tarif|cout/.test(s)) return 'financement';
  if (/adresse|localisation|o.est|trouver|venir/.test(s)) return 'adresse';
  if (/horaire|ouvert|heure|quand/.test(s)) return 'horaires';
  if (/transport|metro|rer|bus|parking/.test(s)) return 'transports';
  if (/contact|appeler|telephone|joindre|parler|humain/.test(s)) return 'contact';
  if (/handicap|accessib|pmr/.test(s)) return 'accessibilite';
  if (/inscri|candidat|dossier|commencer/.test(s)) return 'inscription';
  if (/qualiopi|certif qualit/.test(s)) return 'qualiopi';
  if (/merci|bonjour|bonsoir|hello|salut/.test(s)) return 'salut';
  if (/reset|recommenc|nouveau|effac|restart/.test(s)) return 'reset';

  return 'fallback';
}

/* ══════════════════════════════════════════
   ACTIONS / RÉPONSES
══════════════════════════════════════════ */
function act(id) {
  if (busy) return;

  var box = el('klea-chips');
  box.innerHTML = '';
  var fr = (lang === 'fr');

  if (id.indexOf('_fs_') === 0) {
    var is = parseInt(id.replace('_fs_', ''), 10);
    setSituation(tr().fSitLabels[is]);
    return;
  }

  if (id.indexOf('_ff_') === 0) {
    var ifo = parseInt(id.replace('_ff_', ''), 10);
    setFormation(tr().fForLabels[ifo]);
    return;
  }

  switch (id) {
    case 'salut':
      botSay(
        fr ? 'Bonjour ! Comment puis-je vous aider ? 😊' : 'Hello! How can I help you? 😊',
        550,
        mainMenu()
      );
      break;

    case 'reset':
      el('klea-msgs').innerHTML = '';
      form.active = false;
      form.step = null;
      el('klea-prog').style.display = 'none';
      botSay(tr().greeting, 400, mainMenu());
      break;

    case '_fok':
      submitForm();
      break;

    case '_fedit':
      form.active = false;
      form.step = null;
      el('klea-prog').style.display = 'none';
      botSay(tr().fCancelled, 500, mainMenu());
      break;

    case 'formations':
      botSay(
        fr
          ? 'EPIE Formation propose **4 domaines de formation**.\nLequel vous intéresse ?'
          : 'EPIE Formation offers **4 training areas**.\nWhich one interests you?',
        750,
        [
          { lbl: fr ? 'Socle de compétences' : 'Core skills (CléA)', id: 'f_socle' },
          { lbl: fr ? 'Linguistique / FLE' : 'French language', id: 'f_ling' },
          { lbl: fr ? 'Numérique' : 'Digital / IT', id: 'f_num' },
          { lbl: fr ? 'Administratif' : 'Administrative', id: 'f_admin' },
          { lbl: tr().back, id: '_back', cls: 'sec' }
        ]
      );
      break;

    case 'f_socle':
    case 'f_ling':
    case 'f_num':
    case 'f_admin': {
      var map = {
        f_socle: 'socle',
        f_ling: 'linguistique',
        f_num: 'numerique',
        f_admin: 'administratif'
      };
      var f = KB.formations[map[id]];
      form.data.formation = f.nom;

      botSay(
        '**' + f.nom + '**\n\n' + f.desc +
        '\n\n⏱ ' + (fr ? 'Durée' : 'Duration') + ' : ' + f.duree +
        '\n💰 ' + (fr ? 'Financement' : 'Funding') + ' : ' + f.fin +
        '\n📅 ' + (fr ? 'Prochaines sessions' : 'Next sessions') + ' : ' + f.sessions,
        1050,
        [
          { lbl: fr ? 'S\'inscrire à cette formation' : 'Register', id: 'inscription' },
          { lbl: fr ? 'Voir les financements' : 'Funding', id: 'financement' },
          { lbl: tr().backF, id: 'formations', cls: 'sec' }
        ]
      );
      break;
    }

    case 'financement':
      botSay(
        fr
          ? 'Quelle est votre situation ? Je vous oriente vers le bon dispositif 🎯'
          : 'What is your situation? I\'ll guide you to the right funding 🎯',
        750,
        [
          { lbl: fr ? 'Demandeur(se) d\'emploi' : 'Job seeker', id: 'fi_de' },
          { lbl: fr ? 'Salarié(e)' : 'Employee', id: 'fi_sal' },
          { lbl: fr ? 'Indépendant(e) / TNS' : 'Self-employed', id: 'fi_ind' },
          { lbl: fr ? 'C\'est quoi le CPF ?' : 'What is CPF?', id: 'fi_cpf' },
          { lbl: tr().back, id: '_back', cls: 'sec' }
        ]
      );
      break;

    case 'fi_de':
      botSay(
        '**' + (fr ? 'Demandeur(se) d\'emploi' : 'Job seeker') + '** ✅\n\n' + KB.financement.de,
        1100,
        [
          { lbl: fr ? 'Voir les formations' : 'See courses', id: 'formations' },
          { lbl: fr ? 'M\'inscrire' : 'Register', id: 'inscription' },
          { lbl: tr().back, id: '_back', cls: 'sec' }
        ]
      );
      break;

    case 'fi_sal':
      botSay(
        '**' + (fr ? 'Salarié(e)' : 'Employee') + '** 💼\n\n' + KB.financement.sal,
        1100,
        [
          { lbl: fr ? 'Le CPF, c\'est quoi ?' : 'What is CPF?', id: 'fi_cpf' },
          { lbl: fr ? 'Nous contacter' : 'Contact us', id: 'contact' },
          { lbl: tr().back, id: '_back', cls: 'sec' }
        ]
      );
      break;

    case 'fi_ind':
      botSay(
        '**' + (fr ? 'Indépendant(e) / TNS' : 'Self-employed') + '** 🏢\n\n' + KB.financement.ind,
        1100,
        [
          { lbl: fr ? 'Le CPF, c\'est quoi ?' : 'What is CPF?', id: 'fi_cpf' },
          { lbl: fr ? 'Nous contacter' : 'Contact us', id: 'contact' },
          { lbl: tr().back, id: '_back', cls: 'sec' }
        ]
      );
      break;

    case 'fi_cpf':
      botSay(
        '**CPF — Compte Personnel de Formation** 📘\n\n' + KB.financement.cpf,
        1200,
        [
          { lbl: fr ? 'Formations éligibles CPF' : 'CPF-eligible courses', id: 'formations' },
          { lbl: tr().back, id: '_back', cls: 'sec' }
        ]
      );
      break;

    case 'adresse':
      botSay(
        '**📍 EPIE Formation**\n' + KB.adresse +
        '\n\n🕒 **' + (fr ? 'Horaires' : 'Hours') + '** : ' + KB.horaires +
        '\n🚇 **' + (fr ? 'Transports' : 'Transport') + '** : M13 · RER D · T1 · T5 (station _Basilique de Saint-Denis_)' +
        '\n🅿️ **Parking** : ' + (fr ? 'Vinci Basilique St Denis (gratuit 1h30)' : 'Vinci Basilique St Denis (free 1h30)'),
        900,
        [
          { lbl: fr ? 'Voir sur Google Maps' : 'Open Google Maps', id: 'maps' },
          { lbl: tr().back, id: '_back', cls: 'sec' }
        ]
      );
      break;

    case 'maps':
      window.open(KB.mapsUrl, '_blank');
      botSay(
        fr ? 'Google Maps ouvert dans un nouvel onglet 🗺️' : 'Google Maps opened in a new tab 🗺️',
        400,
        mainMenu()
      );
      break;

    case 'horaires':
      botSay(
        '**🕒 ' + (fr ? 'Horaires d\'ouverture' : 'Opening hours') + '**\n\n' + KB.horaires +
        '\n\n' + (fr
          ? 'Des créneaux en **soirée (18h–21h)** et le **samedi matin** sont disponibles pour certaines formations.'
          : 'Evening **(6pm–9pm)** and **Saturday morning** slots are available for some courses.'),
        800,
        mainMenu()
      );
      break;

    case 'transports':
      botSay(
        (fr ? 'Comment nous rejoindre' : 'How to reach us') + '\n\n' +
        (fr
          ? 'Métro **M13** — station _Basilique de Saint-Denis_\nRER **D** — station _Saint-Denis_\nTram **T1** — station _Basilique de Saint-Denis_\nTram **T5** — station _Gare de Saint-Denis_\nBus **153, 253, 239** — arrêt _Basilique de Saint-Denis_'
          : 'Metro **M13** — stop _Basilique de Saint-Denis_\nRER **D** — stop _Saint-Denis_\nTram **T1** — stop _Basilique de Saint-Denis_\nTram **T5** — stop _Gare de Saint-Denis_\nBus **153, 253, 239** — stop _Basilique de Saint-Denis_') +
        '\n\n🅿️ ' + (fr ? 'Parking Vinci Basilique Saint-Denis (gratuit 1h30)' : 'Vinci Basilique Saint-Denis parking (free 1h30)'),
        850,
        mainMenu()
      );
      break;

    case 'contact':
    case 'email':
      botSay(
        '**📞 ' + (fr ? 'Nos coordonnées' : 'Contact us') + '**\n\n' +
        (fr ? 'Téléphone' : 'Phone') + ' : **' + KB.tel + '**\n' +
        'E-mail : **' + KB.email + '**\n\n' +
        (fr
          ? 'Vous préférez être **rappelé(e)** ? Je peux prendre vos coordonnées en 1 minute.'
          : 'Prefer a **call-back**? I can take your details in under a minute.'),
        900,
        [
          { lbl: fr ? 'Laisser mes coordonnées' : 'Leave my details', id: 'inscription' },
          { lbl: fr ? 'Appeler directement' : 'Call directly', id: '_tel' },
          { lbl: tr().back, id: '_back', cls: 'sec' }
        ]
      );
      break;

    case '_tel':
      botSay(
        (fr ? 'Notre numéro direct :' : 'Our direct number:') +
        '\n\n📞 **' + KB.tel + '**\n\n' +
        (fr ? 'Disponible du lundi au vendredi de **9h à 17h**.' : 'Available Mon–Fri, **9am–5pm**.'),
        500,
        mainMenu()
      );
      break;

    case 'accessibilite':
      botSay(
        '**♿ ' + (fr ? 'Accessibilité' : 'Accessibility') + '**\n\n' +
        (fr
          ? 'Nos locaux sont **accessibles aux personnes en situation de handicap** (PMR).\n\nRéférent handicap : **' + KB.emailHandi + '**\n\nNous adaptons les parcours de formation selon les besoins individuels.'
          : 'Our premises are **accessible to people with disabilities** (wheelchair access).\n\nDisability coordinator: **' + KB.emailHandi + '**\n\nWe adapt programmes to individual needs.'),
        950,
        mainMenu()
      );
      break;

    case 'inscription':
      startForm(form.data.formation || '');
      break;

    case 'qualiopi':
      botSay(
        '**' + KB.certif + ' ✅**\n\n' +
        (fr
          ? 'EPIE Formation est certifié Qualiopi — certification qualité reconnue par l\'État, obligatoire pour accéder aux financements publics (CPF, Pôle Emploi, OPCO).'
          : 'EPIE Formation holds Qualiopi certification — state-recognised quality standard required for public funding (CPF, Pôle Emploi, OPCO).'),
        900,
        mainMenu()
      );
      break;

    case '_back':
      buildChips(mainMenu());
      break;

    default:
      botSay(tr().fallback, 700, mainMenu());
  }
}

/* ══════════════════════════════════════════
   ENVOI UTILISATEUR
══════════════════════════════════════════ */
function send() {
  if (busy) return;

  var input = el('klea-input');
  var txt   = input.value.trim();
  if (!txt) return;

  addMsg(txt, 'u', 'u');
  input.value = '';
  el('klea-chips').innerHTML = '';

  if (form.active) {
    handleFormStep(txt);
    return;
  }

  setTimeout(function () {
    act(detect(txt));
  }, 80);
}

/* ══════════════════════════════════════════
   OUVRIR / FERMER
══════════════════════════════════════════ */
function openChat() {
  isOpen = true;
  el('klea-win').classList.remove('closed');
  el('klea-btn').classList.add('open');
  el('klea-btn').setAttribute('aria-expanded', 'true');
  el('klea-banner').style.display = 'none';
  el('klea-input').focus();

  if (!hasGreeted) {
    hasGreeted = true;
    botSay(tr().greeting, 600, mainMenu());
  }
}

function closeChat() {
  isOpen = false;
  el('klea-win').classList.add('closed');
  el('klea-btn').classList.remove('open');
  el('klea-btn').setAttribute('aria-expanded', 'false');
}

/* ══════════════════════════════════════════
   LANGUE
══════════════════════════════════════════ */
function changeLang(l) {
  lang = l;
  el('klea-input').placeholder  = tr().placeholder;
  el('ktlbl').textContent       = tr().typing;
  el('klea-foot').textContent   = tr().footer;
  el('klea-status').textContent = tr().status;

  if (el('klea-reset-btn')) {
    el('klea-reset-btn').textContent = tr().reset;
  }

  botSay(tr().langOk, 400, mainMenu());
}

/* ══════════════════════════════════════════
   BANNIÈRE
══════════════════════════════════════════ */
setTimeout(function () {
  if (!isOpen && !bannerShown) {
    bannerShown = true;
    el('kbn-txt').textContent = tr().banner;
    el('klea-banner').style.display = 'flex';
  }
}, 7000);

/* ══════════════════════════════════════════
   ÉVÉNEMENTS
══════════════════════════════════════════ */
el('klea-btn').addEventListener('click', function () {
  isOpen ? closeChat() : openChat();
});

el('klea-btn').addEventListener('keydown', function (e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    isOpen ? closeChat() : openChat();
  }
});

el('klea-send').addEventListener('click', send);

el('klea-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') send();
});

el('klea-lang').addEventListener('change', function (e) {
  changeLang(e.target.value);
});

el('klea-banner').addEventListener('click', function (e) {
  if (e.target.id !== 'kbn-x') openChat();
});

el('kbn-x').addEventListener('click', function (e) {
  e.stopPropagation();
  el('klea-banner').style.display = 'none';
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && isOpen) closeChat();
});

})();