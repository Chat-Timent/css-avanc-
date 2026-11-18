# Conventions de nommage

## Règles
- Langue des noms : français, sans accent, en minuscules avec tirets.
- Syntaxe BEM : `bloc`, `bloc__element`, `bloc--modificateur`.

## Préfixes
- Mise en page : `l-` (ex. `l-entete`, `l-grille-programme`)
- État : `is-` (ex. `is-active`, `is-ouvert`, `is-erreur`)
- Thème : `theme-` (ex. `theme-lac`, `theme-foret`, `theme-kiosque`, `theme-sombre`)

## Composants (modules)

### bouton
- Elements : aucun
- Modificateurs : `bouton--principal`, `bouton--secondaire`, `bouton--contour`

### badge
- Elements : aucun
- Modificateurs : `badge--lac`, `badge--foret`, `badge--kiosque`, `badge--selection`

### filtre
- Elements : aucun
- Modificateurs : aucun (l'état sélectionné se note avec `is-active`)

### champ
- Elements : `champ__label`, `champ__saisie`, `champ__message`
- Modificateurs : aucun (l'état d'erreur se note avec `is-erreur`)

### carte-artiste
- Elements : `carte-artiste__image`, `carte-artiste__titre`, `carte-artiste__infos`, `carte-artiste__lien`
- Modificateurs : `carte-artiste--tete-affiche`

### carte-pass
- Elements : `carte-pass__titre`, `carte-pass__prix`, `carte-pass__liste`, `carte-pass__action`
- Modificateurs : `carte-pass--mise-en-avant`

### faq
- Elements : `faq__question`, `faq__reponse`
- Modificateurs : aucun (l'état ouvert se note avec `is-ouvert`)

### bandeau
- Elements : `bandeau__texte`, `bandeau__action`
- Modificateurs : aucun

### fil-ariane
- Elements : `fil-ariane__lien`
- Modificateurs : aucun