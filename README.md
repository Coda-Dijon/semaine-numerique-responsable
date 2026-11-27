# Un service public numérique responsable

Slides de la conférence « Un service public numérique responsable : utile, accessible et de confiance », Semaine du numérique responsable, Dijon Métropole, 3 décembre 2026 : introduction de François Sarron-Pillot, puis trois interventions (Coda, David Fau pour Dijon Métropole, Mathias Murmylo pour l'ARNIA).

**Slides en ligne : https://coda-dijon.github.io/semaine-numerique-responsable/**

Réalisées avec [Slidev](https://sli.dev).

## Lancer en local

```bash
npm install
npm run dev      # présentation sur http://localhost:3030 (vue présentateur : /presenter)
npm run build    # site statique dans dist/
npm run export   # PDF : Coda-tout-en-ligne.pdf
```

## Organisation

| Chemin | Contenu |
| --- | --- |
| `slides.md` | Contenu des slides et notes de l'orateur |
| `components/` | Composants Vue (`Card`, `Sticker`, `SlideAudio`…) |
| `layouts/` | Layouts personnalisés |
| `styles/` | Thème graphique |
| `setup/main.ts` | Helper `$asset()` pour les fichiers de `public/` |
| `public/videos`, `public/audio` | Démos enregistrées |
| `scripts/` | Enregistrement des démos |

### Fichiers de `public/`

Le site est servi sous un sous-chemin (`/semaine-numerique-responsable/`). Pour les attributs de composants (ex. `poster` de `<SlidevVideo>`), passer par le helper :

```html
<SlidevVideo :poster="$asset('/videos/demo1-poster.png')">
```

`<SlideAudio src="/audio/…">` applique le préfixe tout seul.

## Réenregistrer les démos

Les démos portent sur https://www.sicemont.fr/. Le site évolue : relancer la veille de la conférence et reporter dans `slides.md` les chiffres affichés par le script (nombre de Tab, temps de chargement).

```bash
npx playwright install chromium   # une seule fois
node scripts/record-demos.mjs           # démos 1 et 3
node scripts/record-demos.mjs --only=1  # une seule démo
sh scripts/make-demo2-audio.sh          # audio de la démo 2 (macOS, voix « Thomas »)
```

## Déploiement

Chaque push sur `main` déclenche `.github/workflows/deploy.yml`, qui build les slides et les publie sur GitHub Pages.

À faire une seule fois : **Settings → Pages → Source : GitHub Actions**.
