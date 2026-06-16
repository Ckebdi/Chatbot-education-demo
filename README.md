## 🎓 Chatbot web “Klea” pour EPIE Formation

Assistant conversationnel front-end intégré au site de formation d’EPIE pour guider les visiteurs (formations, financement, contact, accessibilité).

### 🧠 Fonctionnalités principales

- Widget de chat complet en **HTML / CSS / JavaScript** :
  - icône flottante en bas à droite
  - fenêtre de chat ouvrable / refermable
  - zone de messages, champ de saisie, header avec titre et bouton de fermeture
- Interface **moderne et responsive** (desktop, tablette, mobile) avec :
  - couleurs conformes à la charte EPIE (`#00AEEF` et déclinaisons)
  - bulles de messages arrondies type Messenger
  - ombres, transitions douces, dark mode automatique

### 💬 Logique de conversation

- Gestion des **messages utilisateur / bot** avec horodatage.
- Effet “**Klea est en train d’écrire…**” pour simuler la frappe.
- Suggestions cliquables (formations, financement, contact, horaires, accessibilité…).
- Détection simple de mots-clés côté front (ex. “contact”, “horaires”, “CPF”…).

### 🌍 Multilingue

- Chatbot **bilingue FR / EN** :
  - sélecteur de langue dans le header
  - textes d’interface, suggestions et messages système entièrement traduits
  - langue par défaut : français, avec possibilité de basculer à tout moment

### 🎯 Expérience utilisateur avancée

- **Bannière d’accroche intelligente** :
  - apparition après quelques secondes et/ou scroll
  - bouton fermer ; si l’utilisateur ferme sans ouvrir, le chatbot se lance automatiquement plus tard
- **Boutons rapides & menu déroulant** :
  - accès direct aux pages de formations, contact, financement, etc.
  - menu compact sur mobile pour éviter de saturer l’écran
- Bouton **“Réinitialiser la conversation”** toujours accessible.

### 📄 Formulaire conversationnel

- Mini **formulaire guidé** directement dans le chat :
  - prénom, nom, e‑mail, téléphone, situation, formation souhaitée
  - validation légère (e‑mail, téléphone…) et messages d’erreur dédiés
- Sauvegarde locale dans `localStorage` des demandes.
- Prévu pour connexion ultérieure à **Formspree** ou autre backend (envoi automatique par e‑mail).

### 🔐 Transparence & conformité

- Message explicite indiquant que **Klea est un assistant automatisé** et non un humain.
- Mention **RGPD** en bas de la fenêtre (données protégées, pas d’IA externe par défaut).

### 🧩 Intégration

- Conçu comme **widget autonome** :
  - intégrable dans WordPress via bloc HTML + CSS + JS
  - structure claire : bannière, bouton launcher, fenêtre de chat, logique JS séparée
- Version prévue pour connexion à un backend **Rasa** via REST ou Socket.IO.

### 🚀 Résultat

Ce chatbot est aujourd’hui :
- **visuellement prêt pour la production** (UI moderne, responsive, dark mode)
- **pensé produit** (UX, bannière intelligente, multilingue, formulaire, reset)
- prêt à être connecté à :
  - un serveur **Rasa** pour des réponses NLU avancées
  - un système d’analytics pour suivre les clics et l’usage.
