# Conventions de nommage

## Règles
- Langue des noms : anglais, en minuscules, avec tirets.
- Syntaxe BEM : `block`, `block__element`, `block--modifier`.

## Préfixes
- Mise en page : `l-` (`l-container`, `l-section`, `l-split`, `l-grid`, `l-header`, `l-footer`), définis dans `scss/layout/`
  - `l-container` : conteneur nommé `page` pour les règles `@container`
  - `l-section` : éléments `__head`, `__link`, `__note`
  - `l-grid` : modificateurs `--cards`, `--column`
  - `l-header` : éléments `__inner`, `__logo`, `__mark`, `__name`, `__tagline`, `__nav`, `__link`, `__actions` ; état `is-active` sur `__link`
  - `l-footer` : éléments `__inner`, `__col`, `__title`, `__text`, `__list`, `__link`, `__legal`
- État : `is-` (`is-active`, `is-open`, `is-error`, `is-loading`), définis dans `scss/state/`
- Thème : `theme-`, définis dans `scss/theme/`
  - `theme-lake`, `theme-forest`, `theme-kiosk` : se posent sur un composant (carte, bandeau de scène, bandeau de page) et définissent `--scene-color` et `--scene-text`
  - `theme-dark` : se pose sur `<html>` et remplace les couleurs de surface et de texte

## Couches CSS (`@layer`)
Ordre, de la moins à la plus prioritaire : `reset`, `base`, `layout`, `modules`, `state`, `theme`.
Chaque dossier de `scss/` correspond à une couche, chargée dans `scss/main.scss`.

## Attributs `data-`
- `data-theme-toggle` : bouton qui bascule le mode sombre (utilisé par `js/theme.js`)
- `data-total` : total de la réservation (réservé pour un futur calcul en JS)

## Composants (modules)
- `button` : éléments `__icon`, `__counter` ; modificateurs `--primary`, `--secondary`, `--outline`, `--light`, `--small`, `--large`, `--icon-only` ; état `is-loading`
- `badge` : modificateurs `--lake`, `--forest`, `--kiosk`, `--new`, `--few-left`, `--sold-out`, `--small`, `--large`, `--outline`, `--square`
- `card` : éléments `__image`, `__body`, `__title`, `__info`, `__text`, `__link`, `__footer` ; modificateurs `--featured`, `--compact`, `--horizontal`, `--text-only`
- `pass` : éléments `__badge`, `__title`, `__price`, `__list`, `__item`, `__action` ; modificateur `--featured`
- `scene-banner` : éléments `__title`, `__style`, `__link`
- `info-block` : éléments `__number`, `__title`, `__text`
- `field` : éléments `__label`, `__input`, `__help` ; état `is-error`
- `checkbox` : élément `__input`
- `filter` : état `is-active`
- `faq` : éléments `__question`, `__icon`, `__answer` ; état `is-open`
- `hero` : éléments `__image`, `__content`, `__eyebrow`, `__title`, `__text`, `__actions`
- `page-head` : éléments `__crumbs`, `__link`, `__title`, `__text` ; modificateur `--scene`
- `stat` : éléments `__value`, `__label`
- `form` : éléments `__head`, `__title`, `__intro`, `__grid`, `__footer`, `__total`
- `contact-box` : éléments `__title`, `__text`
- `details` : éléments `__term`, `__value`
- `media` : image de contenu aux coins arrondis
- `swatch` : éléments `__color`, `__name` ; le modificateur de `__color` suit le nom de chaque couleur (`--primary`, `--lake`…), uniquement pour la page des composants
- `showcase` : modificateur `--dark`, uniquement pour la page des composants