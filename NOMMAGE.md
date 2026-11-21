# Conventions de nommage

## Règles
- Langue des noms : anglais, en minuscules, avec tirets.
- Syntaxe BEM : `block`, `block__element`, `block--modifier`.

## Préfixes
- Mise en page : `l-` (`l-header`, `l-footer`, `l-grid`)
- État : `is-` (`is-active`, `is-open`, `is-error`)
- Thème : `theme-` (`theme-lake`, `theme-forest`, `theme-kiosk`, `theme-dark`)

## Composants (modules)
- `button` : éléments `__icon`, `__counter` ; modificateurs `--primary`, `--secondary`, `--outline`, `--light`, `--small`, `--large`, `--icon-only`
- `badge` : modificateurs `--lake`, `--forest`, `--kiosk`, `--new`, `--few-left`, `--sold-out`, `--small`, `--large`, `--outline`, `--square`
- `card` : modificateurs `--featured`, `--compact`, `--horizontal`
- `pass` : modificateur `--featured`
- `field` : état `is-error`
- `filter` : état `is-active`
- `faq` : éléments `__question`, `__answer` ; état `is-open`
- `info-block` : sans modificateur
- `swatch` : éléments `__color`, `__name` ; le modificateur de `__color` suit le nom de chaque couleur (`--primary`, `--lake`…), uniquement pour la page des composants
- `showcase` : modificateur `--dark`, uniquement pour la page des comp