# Festival Résonances

Intégration du site du festival Résonances : bibliothèque de composants en SCSS, puis assemblage des pages.

## Site en ligne

https://css-avanc.vercel.app/

La page des composants est disponible sur https://css-avanc.vercel.app/composants.html

## Installation

```
npm install
```

## Compilation du SCSS

- `npm run sass:build` : compile `scss/main.scss` en `css/style.css`, une seule fois.
- `npm run sass:watch` : recompile à chaque modification des sources.

## Structure

- `scss/` : sources SCSS (abstracts, base, layout, modules, state, theme)
- `css/style.css` : fichier compilé, jamais modifié à la main
- `NOMMAGE.md` : conventions de nommage (préfixes, blocs BEM)
- `composants.html` : bibliothèque de composants