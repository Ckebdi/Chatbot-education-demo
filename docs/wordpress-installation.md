# Installation WordPress du chatbot

Ce document explique comment intégrer le chatbot EPIE Formation dans un site WordPress à partir de la base actuelle du projet. [file:21]

## Pré-requis

- Un site WordPress accessible en administration.
- Le code source actuel du widget chatbot.
- Un compte Formspree si vous souhaitez recevoir les demandes par e-mail. [file:21]

## Structure recommandée

Séparer le projet en 3 parties :

- `klea.css` : tous les styles du widget.
- `klea-widget.html` : le HTML du widget.
- `klea.js` : toute la logique conversationnelle. [file:21]

## Étape 1 — Ajouter le CSS

Copier les styles du widget dans :
- soit `Apparence > Personnaliser > CSS additionnel`,
- soit un fichier `klea.css` chargé par le thème. [file:21]

## Étape 2 — Ajouter le HTML du widget

Copier uniquement le HTML du widget dans le thème WordPress, idéalement juste avant la balise `</body>`. [file:21]

Cela peut être fait :
- dans `footer.php`,
- ou via un plugin d’injection de code. [file:21]

## Étape 3 — Ajouter le JavaScript

Copier le script dans un fichier `klea.js`, puis le charger dans WordPress. [file:21]

Exemple dans `functions.php` :

```php
function epie_enqueue_chatbot_assets() {
    wp_enqueue_style(
        'epie-klea-style',
        get_stylesheet_directory_uri() . '/assets/css/klea.css',
        array(),
        '1.0.0'
    );

    wp_enqueue_script(
        'epie-klea-script',
        get_stylesheet_directory_uri() . '/assets/js/klea.js',
        array(),
        '1.0.0',
        true
    );
}
add_action('wp_enqueue_scripts', 'epie_enqueue_chatbot_assets');
```

## Étape 4 — Configurer Formspree

Le script actuel prévoit une URL Formspree dans la base de connaissances JavaScript. [file:21]

Procédure :
1. Créer un compte sur Formspree.
2. Créer un nouveau formulaire.
3. Copier l’URL du type `https://formspree.io/f/XXXXXX`.
4. Remplacer la valeur `KB.formspreeUrl` dans `klea.js`. [file:21]

## Étape 5 — Vérifier les contenus métier

Avant mise en ligne, il faut relire :
- le téléphone,
- les e-mails,
- l’adresse,
- les horaires,
- les sessions,
- les financements,
- les formations. [file:21]

## Étape 6 — Tests

Tester :
- desktop,
- tablette,
- mobile,
- ouverture / fermeture du widget,
- changement de langue,
- formulaire conversationnel,
- envoi Formspree,
- bouton de réinitialisation. [file:21]

## Important

Le projet actuel est une base fonctionnelle en cours de structuration, pas encore une version finale industrialisée. [file:21]