# Conventions de nommage

## Règles
- Langue des noms : anglais, en minuscules, avec tirets.
- Syntaxe BEM : `block`, `block__element`, `block--modifier`.

## Préfixes
- Mise en page : `l-` (`l-header`, `l-footer`, `l-grid`, `l-grid--cards`)
- État : `is-` (`is-active`, `is-open`, `is-error`)
- Thème : `theme-` (`theme-lake`, `theme-forest`, `theme-kiosk`, `theme-dark`)

Les couleurs de scène des cartes viendront des thèmes (étape 8), via la propriété `--scene-color`.

## Composants (modules)
- `button` : éléments `__icon`, `__counter` ; modificateurs `--primary`, `--secondary`, `--outline`, `--light`, `--small`, `--large`, `--icon-only`
- `badge` : modificateurs `--lake`, `--forest`, `--kiosk`, `--new`, `--few-left`, `--sold-out`, `--small`, `--large`, `--outline`, `--square`
- `card` : éléments `__image`, `__body`, `__title`, `__info`, `__text`, `__link`, `__footer` ; modificateurs `--featured`, `--compact`, `--horizontal`, `--text-only`
- `pass` : éléments `__badge`, `__title`, `__price`, `__list`, `__item`, `__action` ; modificateur `--featured`
- `scene-banner` : éléments `__title`, `__style`, `__link`
- `info-block` : éléments `__number`, `__title`, `__text`
- `field` : état `is-error`
- `filter` : état `is-active`
- `faq` : éléments `__question`, `__answer` ; état `is-open`
- `swatch` : éléments `__color`, `__name` ; le modificateur de `__color` suit le nom de chaque couleur (`--primary`, `--lake`…), uniquement pour la page des composants
- `showcase` : modificateur `--dark`, uniquement pour la page des composants