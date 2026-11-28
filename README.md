# Festival Résonances

Intégration du site du festival Résonances : bibliothèque de composants en SCSS (SMACSS, BEM), puis assemblage de cinq pages, avec mode sombre.

## Site en ligne

https://css-avanc.vercel.app/

La bibliothèque de composants est sur https://css-avanc.vercel.app/composants.html

## Installation

```
npm install
```

## Compilation du SCSS

- `npm run sass:build` : compile `scss/main.scss` en `css/style.css`, lisible, une seule fois.
- `npm run sass:watch` : recompile à chaque modification des sources.
- `npm run sass:prod` : compile en CSS compressé, pour la mise en ligne.

`css/style.css` est généré : il n'est jamais modifié à la main.

## Pages

- `index.html` : accueil
- `programme.html` : programme par jour, avec filtres par scène
- `artiste.html` : fiche artiste (Ostra)
- `billetterie.html` : formules et formulaire de réservation
- `infos.html` : infos pratiques et questions fréquentes
- `composants.html` : bibliothèque de composants (guide de style)

## Structure

- `scss/` : sources SCSS, une couche CSS (`@layer`) par dossier
  - `abstracts/` : variables (jetons), fonction et mixins
  - `base/` : reset, jetons exposés en propriétés personnalisées, typographie
  - `layout/` : conteneur, sections, en-tête, pied de page, grilles (`l-`)
  - `modules/` : composants (un fichier par composant)
  - `state/` : états (`is-`)
  - `theme/` : thèmes de scène et mode sombre (`theme-`)
- `css/style.css` : fichier compilé
- `js/theme.js` : bascule du mode sombre
- `assets/img/` : images
- `NOMMAGE.md` : conventions de nommage

## Principes

- Les valeurs (couleurs, tailles, espacements) sont définies une seule fois dans `scss/abstracts/_variables.scss`, puis exposées en propriétés personnalisées.
- Pas d'`id` en CSS, pas d'`!important`, imbrication limitée à 3 niveaux.
- Le mode sombre remplace les propriétés personnalisées de couleur via la classe `theme-dark` sur `<html>`.
- La couleur de chaque scène vient des classes `theme-lake`, `theme-forest` et `theme-kiosk`.