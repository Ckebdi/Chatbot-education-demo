# Klea - Chatbot EPIE Formation

Prototype de chatbot conversationnel conçu pour **EPIE Formation**.  
Ce projet a pour objectif de proposer une base de widget web intégrable sur un site WordPress afin d’orienter les utilisateurs, répondre aux questions fréquentes et faciliter la prise de contact. [file:21]

## Statut du projet

Ce projet est **en cours de construction** et **n’est pas finalisé**. [file:21]  
La version actuelle correspond à une base fonctionnelle front-end autonome en HTML, CSS et JavaScript, pensée pour une intégration WordPress. [file:21]

## Contenu du dépôt

- `src/klea-widget-demo.html` : version de démonstration du widget chatbot. [file:21]
- `src/klea.css` : styles du composant. [file:21]
- `src/klea.js` : logique conversationnelle du chatbot. [file:21]
- `docs/wordpress-installation.md` : notes d’intégration WordPress. [file:21]
- `docs/proposition-chatbot-pi.html` : document de proposition / évolution conceptuelle, non finalisé et non mis en ligne. [file:22]

## Fonctionnalités actuelles

- Widget chatbot autonome en HTML / CSS / JavaScript. [file:21]
- Intégration prévue pour WordPress. [file:21]
- Interface responsive desktop, tablette et mobile. [file:21]
- Parcours conversationnel avec suggestions rapides. [file:21]
- Formulaire conversationnel de contact. [file:21]
- Préparation d’envoi via Formspree. [file:21]
- Support multilingue FR / EN. [file:21]
- Réponses basées sur une logique déterministe, sans IA externe dans la version actuelle. [file:21]

## Important

Ce dépôt concerne **uniquement le projet chatbot**.  
Mon portfolio personnel est un **projet séparé** et n’est pas inclus ici. [file:21]

## Proposition d’évolution

Une piste d’évolution du chatbot est présente dans `docs/proposition-chatbot-pi.html`. [file:22]  
Ce document correspond à une **proposition de conception** et non à une version en production. Il ne reflète pas un service déjà déployé. [file:22]

## Objectif

L’objectif de ce projet est de construire une expérience conversationnelle claire, accessible et utile pour accompagner les visiteurs d’EPIE Formation dans :
- la découverte des formations ; [file:21]
- la compréhension des financements ; [file:21]
- l’accès aux informations pratiques ; [file:21]
- la prise de contact ou la pré-inscription. [file:21]

## Installation locale

1. Cloner le dépôt.
2. Ouvrir `src/klea-widget-demo.html` dans un navigateur. [file:21]
3. Extraire ou relier le CSS et le JavaScript si nécessaire pour une intégration plus propre. [file:21]

## Intégration WordPress

La base actuelle a été pensée pour une intégration WordPress simple :  
- le CSS peut être déplacé dans un fichier dédié ou dans le CSS additionnel ; [file:21]
- le HTML du widget peut être injecté dans le thème ; [file:21]
- le script peut être chargé séparément via l’enqueue WordPress. [file:21]

## Roadmap

- Nettoyer et modulariser les fichiers. [file:21]
- Finaliser la structure du dépôt. [file:21]
- Ajouter une documentation technique plus complète. [file:21]
- Clarifier la séparation entre version actuelle et proposition d’évolution. [file:21][file:22]
- Préparer une mise en ligne ou une démonstration propre. [file:21]

## Avertissement

Certaines parties du projet, des contenus et des parcours conversationnels sont encore en cours d’ajustement. [file:21][file:22]  
Les éléments présents dans ce dépôt ne doivent donc pas être considérés comme une version finale ou officiellement déployée. [file:21][file:22]
