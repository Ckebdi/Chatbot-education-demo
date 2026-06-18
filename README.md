# Klea : Chatbot EPIE Formation

Prototype de chatbot conversationnel conçu pour **EPIE Formation**.  
Ce projet a pour objectif de proposer une base de widget web intégrable sur un site WordPress afin d’orienter les utilisateurs, répondre aux questions fréquentes et faciliter la prise de contact.

## Statut du projet

Ce projet est **en cours de construction** et **n’est pas finalisé**.  
La version actuelle correspond à une base fonctionnelle front-end autonome en HTML, CSS et JavaScript, pensée pour une intégration WordPress.

## Démo en ligne

- Démo GitHub Pages : https://ckebdi.github.io/Chatbot-education-demo/
- Lien direct vers le widget : https://ckebdi.github.io/Chatbot-education-demo/chatbot/klea-widget.html

## Contenu du dépôt

- `chatbot/klea-widget.html` : version de démonstration du widget chatbot.
- `chatbot/klea.css` : styles du composant.
- `chatbot/klea.js` : logique conversationnelle du chatbot.
- `documents/wordpress-installation.md` : notes d’intégration WordPress.
- `documents/proposition_chatbot_epie_v2.html` : document de proposition / évolution conceptuelle, non finalisé et non mis en ligne.

## Fonctionnalités actuelles

- Widget chatbot autonome en HTML / CSS / JavaScript.
- Intégration prévue pour WordPress.
- Interface responsive desktop, tablette et mobile.
- Parcours conversationnel avec suggestions rapides.
- Formulaire conversationnel de contact.
- Préparation d’envoi via Formspree.
- Support multilingue FR / EN.
- Réponses basées sur une logique déterministe, sans IA externe dans la version actuelle.

## Important

Ce dépôt concerne **uniquement le projet chatbot**.  
Mon portfolio personnel est un **projet séparé** et n’est pas inclus ici.

## Proposition d’évolution

Une piste d’évolution du chatbot est présente dans `documents/proposition_chatbot_epie_v2.html`.  
Ce document correspond à une **proposition de conception** et non à une version en production. Il ne reflète pas un service déjà déployé. 

## Objectif

L’objectif de ce projet est de construire une expérience conversationnelle claire, accessible et utile pour accompagner les visiteurs d’EPIE Formation dans :
- la découverte des formations ;
- la compréhension des financements ;
- l’accès aux informations pratiques ;
- la prise de contact ou la pré-inscription.

## Installation locale

1. Cloner le dépôt.
2. Ouvrir `chatbot/klea-widget.html` dans un navigateur.
3. Relier si besoin le CSS et le JavaScript séparés pour une intégration plus propre.

## Intégration WordPress

La base actuelle a été pensée pour une intégration WordPress simple :
- le CSS peut être déplacé dans un fichier dédié ou dans le CSS additionnel ;
- le HTML du widget peut être injecté dans le thème ;
- le script peut être chargé séparément via l’enqueue WordPress.

## Documentation

- Wiki du projet : https://github.com/Ckebdi/Chatbot-education-demo/wiki
- Feuille de route : https://github.com/users/Ckebdi/projects

## Roadmap

- Nettoyer et modulariser les fichiers.
- Finaliser la structure du dépôt.
- Ajouter une documentation technique plus complète.
- Clarifier la séparation entre version actuelle et proposition d’évolution.
- Préparer une mise en ligne ou une démonstration propre.

## Avertissement

Certaines parties du projet, des contenus et des parcours conversationnels sont encore en cours d’ajustement.  
Les éléments présents dans ce dépôt ne doivent donc pas être considérés comme une version finale ou officiellement déployée.
