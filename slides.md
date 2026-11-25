---
theme: default
title: Tout en ligne, c'est forcément plus simple ?
info: |
  Séquence Coda de la conférence « Un service public numérique responsable :
  utile, accessible et de confiance ». Semaine du numérique responsable,
  Dijon métropole, 3 décembre 2026.
author: Coda
colorSchema: light
aspectRatio: 16/9
canvasWidth: 980
transition: slide-left
mdc: true
fonts:
  sans: Space Grotesk
  serif: Archivo Black
  mono: JetBrains Mono
  weights: '400,600,700'
layout: cover
---

<div class="kicker">Semaine du numérique responsable · Dijon métropole</div>

# Tout en ligne, c'est forcément plus simple ?

Simplicité des démarches, accessibilité, accompagnement des usagers

<div class="mt-8 flex gap-4">
  <Sticker color="lime" :rotate="-3">Séquence 1</Sticker>
  <Sticker color="blue" :rotate="2">10 minutes</Sticker>
  <Sticker color="magenta" :rotate="-1">Coda</Sticker>
</div>

<!--
⏱ 0:00 · Se présenter en une phrase : Coda, école du numérique à Dijon. Enchaîner directement sur le vote.
-->

---
layout: default
---

<div class="kicker">À main levée</div>

# « Tout en ligne, c'est forcément plus simple. »

<div class="grid3 mt-8">
<div class="card green vote">
<span class="big"><ph-thumbs-up-bold class="ico" aria-hidden="true" /></span>
<h3>D'accord</h3>
</div>
<div class="card accent vote">
<span class="big"><ph-thumbs-down-bold class="ico" aria-hidden="true" /></span>
<h3>Pas d'accord</h3>
</div>
<div class="card blue vote">
<span class="big"><ph-scales-bold class="ico" aria-hidden="true" /></span>
<h3>Ça dépend</h3>
</div>
</div>

<div class="callout blue mt-10" v-click>
Pas de bonne réponse à ce stade : on revote à la fin des 10 minutes.
</div>

<!--
⏱ 0:00 → 1:00
- Un clic par réponse : faire lever les mains à chaque carte qui apparaît.
- Annoncer la répartition à voix haute (« plutôt d'accord dans la salle… ») et la noter : on y revient à la fin.
-->

---
layout: default
---

<div class="kicker">Qui fait la démarche ?</div>

# Derrière l'écran, des situations très différentes

<div class="grid3 mt-4">
<div class="card blue" v-click>
<div class="big">15 %</div>
<p>des 15 ans et plus en <strong>illectronisme</strong> : pas d'usage d'internet ou pas les compétences de base</p>
<p class="small mt-2">Insee Première n° 1953, 2023 (données 2021)</p>
</div>
<div class="card green" v-click>
<div class="big">1 sur 7</div>
<p>parmi les 15 ans et plus vit avec un <strong>handicap</strong>, soit 7,6 millions de personnes, souvent invisible</p>
<p class="small mt-2">DREES, Études et résultats n° 1254, 2023 (données 2021)</p>
</div>
<div class="card accent" v-click>
<div class="big">Tous</div>
<p>un jour : un bras dans le plâtre, un écran cassé, une zone blanche, un formulaire en français administratif</p>
<p class="small mt-2">handicap temporaire ou de situation</p>
</div>
</div>

<div class="callout mt-8" v-click>
L'accessibilité ne concerne pas « quelques personnes » : elle concerne <strong>tout le monde, à un moment</strong>.
</div>

<!--
⏱ 1:00 → 1:45

SOURCES
- Illectronisme : Insee Première n° 1953, juin 2023, enquête TIC ménages 2021. 15,4 % des 15 ans ou plus vivant en logement ordinaire (13,9 % n'ont pas utilisé internet dans les 3 derniers mois, 1,5 % l'ont utilisé sans les compétences de base). 62 % des 75 ans ou plus, 2 % des 15-24 ans.
  https://www.insee.fr/fr/statistiques/7633654
- Handicap : DREES, Études et résultats n° 1254, février 2023, enquête Vie quotidienne et santé 2021. 14 % des 15 ans ou plus vivant à domicile, soit 7,6 millions de personnes, déclarent une limitation sévère (motrice, sensorielle ou cognitive) ou une forte restriction dans les activités du quotidien.
  https://drees.solidarites-sante.gouv.fr/publications/etudes-et-resultats/en-france-une-personne-sur-sept-de-15-ans-ou-plus-est-handicapee
- Ne pas citer « 12 millions » : chiffre souvent repris, mais sans source statistique récente.

À DIRE
- Insister sur la 3e carte : ça fait passer de « eux » à « nous ».
-->

---
layout: section
num: 1
color: lime
duration: 4 minutes
objective: Ressentir, pas auditer
---

# Démo vécue

On se rend sur le site d'une commune, dans trois conditions que rencontrent des habitants

---
layout: default
---

<div class="kicker">Démo</div>

# Le site de la mairie de Sicemont

<div class="url mt-2">sicemont.fr › Accueil</div>

<div class="grid3 mt-8">
<div class="card blue" v-click>
<span class="pill blue">1 · vidéo</span>
<h3><ph-keyboard-bold class="ico" aria-hidden="true" />Clavier seul</h3>
<ul>
<li>Pas de souris : <code>Tab</code>, <code>Entrée</code>, flèches</li>
<li>Où suis-je sur la page ?</li>
<li>Combien de touches pour prendre rendez-vous ?</li>
</ul>
</div>
<div class="card green" v-click>
<span class="pill green">2 · en direct</span>
<h3><ph-speaker-high-bold class="ico" aria-hidden="true" />Lecteur d'écran</h3>
<ul>
<li>Écran éteint, on écoute</li>
<li>Les titres, les liens, les cartes sont-ils annoncés clairement ?</li>
<li>Comprend-on où cliquer ?</li>
</ul>
</div>
<div class="card accent" v-click>
<span class="pill accent">3 · vidéo</span>
<h3><ph-device-mobile-bold class="ico" aria-hidden="true" />Vieux smartphone, réseau lent</h3>
<ul>
<li>Petit écran, connexion 3G</li>
<li>Combien de temps avant de pouvoir agir ?</li>
<li>Que fait-on pendant qu'on attend ?</li>
</ul>
</div>
</div>

<div class="small mt-6">On ne cherche pas les fautes : on regarde ce que vit l'habitant.</div>

<!--
⏱ 1:45 → 2:00 · Un clic par situation, une phrase chacune, puis enchaîner.
Les vidéos sont dans public/videos/. Pour les réenregistrer la veille (le site évolue) : node scripts/record-demos.mjs
-->

---
layout: default
---

<div class="kicker">Démo 1 · Clavier seul · aucune souris · vidéo accélérée ×4</div>

# Sans souris, jusqu'où va-t-on ?

<div class="demo-row mt-2">
<SlidevVideo autoplay controls muted :poster="$asset('/videos/demo1-poster.png')" class="demo-video demo-video-wide">
  <source src="/videos/demo1-clavier.webm" type="video/webm" />
</SlidevVideo>
<div class="demo-side">
<div class="questions">
<ul>
<li>Pas de souris : <code>Tab</code>, <code>Entrée</code>, <code>Échap</code></li>
<li>Où suis-je sur la page ?</li>
<li>Combien de touches pour prendre rendez-vous ?</li>
</ul>
</div>
<div class="lesson" v-click><span class="n">124</span><p>appuis sur <code>Tab</code> pour atteindre « Rendez-vous en ligne »</p></div>
<div class="lesson" v-click><span class="n">1</span><p>fenêtre qui s'ouvre <strong>toute seule</strong> en plein parcours et prend le clavier</p></div>
<div class="lesson" v-click><span class="n">21</span><p>liens d'actualités pour 9 articles : les <strong>copies cachées</strong> du carrousel</p></div>
</div>
</div>

<!--
⏱ 2:00 → 3:00 · vidéo d'environ 30 s, accélérée ×4 (le dire à la salle), compteur de touches en bas à droite. Les 3 enseignements apparaissent au clic : les révéler après la vidéo, ou au fil de ce qu'elle montre.

CE QUE MONTRE LA VIDÉO (enregistrement du 24/11/2026)
- Objectif annoncé : prendre rendez-vous en ligne, depuis l'accueil, sans souris.
- Le bandeau cookies garde le focus : 2 Tab et Entrée sur « Tout refuser ». C'est le bon comportement pour une fenêtre modale.
- Le menu déroulant s'ouvre au passage du clavier : on traverse un à un ses ~30 sous-liens avant d'atteindre la page.
- Au 56ᵉ Tab, la fenêtre « S'abonner aux notifications » s'ouvre d'elle-même et capture le clavier. On tourne dedans, Échap la ferme, on reprend là où on était.
- Le carrousel des actualités : 9 articles, mais 21 liens au clavier (les copies cachées servent à l'animation). Les flèches « Précédent » et « Suivant » du grand carrousel n'ont aucun contour de focus.
- 124 Tab au total pour arriver sur « Rendez-vous en ligne », dans les Accès directs.

POINTS POSITIFS À CITER (équilibre)
- Des liens d'accès rapide en tout début de page (« contenu principal », « recherche ») : un habitant qui les connaît évite le menu.
- Le focus est visible presque partout.

À DIRE
- « 124 touches pour prendre rendez-vous. Et en chemin, une fenêtre qui s'ouvre toute seule. »
- « Sans souris, c'est le quotidien de personnes avec un handicap moteur, de personnes qui tremblent, ou qui pilotent leur ordinateur à la voix. »
- Ton : constat, pas reproche. Ce sont des défauts fréquents, et le site a déjà de bonnes bases.
- Si le site évolue : relancer node scripts/record-demos.mjs et reporter les chiffres qu'il affiche.
-->

---
layout: default
---

<div class="kicker">Démo 2 · Lecteur d'écran</div>

# On éteint l'écran, on écoute

<div class="demo-row mt-2">
<div class="demo-main">
<div class="questions">
<span class="pill green">Enregistrement · voix de synthèse</span>
<ul>
<li>Écran éteint, on écoute</li>
<li>Les titres, les liens, les cartes sont-ils annoncés clairement ?</li>
<li>Comprend-on où cliquer ?</li>
</ul>
</div>
<SlideAudio src="/audio/demo2-lecteur-ecran.m4a" />
<div class="callout green">
Une personne aveugle ne voit pas la mise en page : elle n'a que <strong>ce que le code annonce</strong>.
</div>
</div>
<div class="demo-side">
<div class="lesson" v-click><span class="n">//</span><p>8 titres annoncés « barre oblique barre oblique » : le <strong>décor</strong> est lu comme du texte</p></div>
<div class="lesson" v-click><span class="n">1</span><p>carte d'actualité = un seul long lien : titre, résumé et « Voir l'article » <strong>d'un bloc</strong></p></div>
<div class="lesson" v-click><span class="n">10</span><p>liens nommés par une date seule : « 20 mars 2021, lien ». <strong>Vers quoi ?</strong></p></div>
</div>
</div>

<!--
⏱ 3:00 → 4:30 · l'enregistrement (45 s) se lance avec le bouton lecture du lecteur. Les 3 enseignements apparaissent au clic.

CE QUE FAIT ENTENDRE L'ENREGISTREMENT
Restitution simulée d'un lecteur d'écran, dans le style de VoiceOver, avec la voix de synthèse « Thomas » (la voix française par défaut de VoiceOver). Le texte reprend ce que le code de la page d'accueil de sicemont.fr annonce (arbre d'accessibilité relevé le 24/11/2026). À dire honnêtement si on le présente : « voici ce qu'entend un utilisateur de lecteur d'écran ».
1. Navigation de lien en lien (Tab) : les liens d'accès rapide, le logo, le menu. « Suivez nous sur linkedin2 » : le « 2 » est dans le nom du lien.
2. Rotor « Titres » : la hiérarchie existe (un titre de niveau 1, des niveaux 2 et 3), mais le premier titre annoncé est celui du carrousel, qui change toutes les quelques secondes, et les « // » décoratifs font partie du texte des titres.
3. Une carte d'actualité : titre, résumé, « ... » et « Voir l'article » forment un seul lien.
4. « Prochains événements » : 10 liens dont le seul nom est une date.

POINTS POSITIFS À CITER (équilibre)
- Des liens d'accès rapide en début de page, un vrai titre de niveau 1, des titres hiérarchisés : la base est là.
- Le logo a un texte alternatif et les liens des réseaux sociaux sont nommés.

À DIRE
- « Une personne aveugle navigue par titres et par liens, comme on lirait un sommaire. Le sommaire existe, mais il est bruité. »
- Révéler les enseignements un par un après l'écoute.

OPTIONS
- Démo en direct à la place : Mac VoiceOver (Cmd+F5), rotor VO+U ; Windows NVDA. Vérifier avant que le son du PC sort dans la sono.
- Régénérer l'audio : sh scripts/make-demo2-audio.sh
- Le son ne part qu'avec le bouton lecture : appuyer dessus dans la fenêtre projetée, pas dans la vue présentateur.
-->

---
layout: default
---

<div class="kicker">Démo 3 · Vieux smartphone, réseau lent</div>

# Première visite, en 3G

<div class="demo-row mt-2">
<SlidevVideo autoplay controls muted :poster="$asset('/videos/demo3-poster.png')" class="demo-video demo-video-tall">
  <source src="/videos/demo3-mobile-3g.webm" type="video/webm" />
</SlidevVideo>
<div class="demo-side">
<div class="questions">
<ul>
<li>Petit écran (360 px), connexion 3G lente (400 kbit/s), processeur d'entrée de gamme</li>
<li>Combien de temps avant de pouvoir agir ?</li>
<li>Que fait-on pendant qu'on attend ?</li>
</ul>
</div>
<div class="lesson" v-click><span class="n">26 s</span><p>d'écran blanc avant le premier affichage</p></div>
<div class="lesson" v-click><span class="n">42 s</span><p>pour que la page soit chargée, et le carrousel <strong>reste vide</strong></p></div>
<div class="lesson" v-click><span class="n">1ʳᵉ</span><p>visite = la plus lente. C'est le cas d'une démarche faite <strong>une fois par an</strong></p></div>
</div>
</div>

<!--
⏱ 4:30 → 6:00 · vidéo d'environ 55 s, chronomètre en bas de l'écran. Les 3 enseignements apparaissent au clic.

CE QUE MONTRE LA VIDÉO (enregistrement du 24/11/2026)
- Conditions simulées : écran de 360 px, débit 400 kbit/s, latence 400 ms, processeur ralenti ×4.
- Premier chargement de l'accueil de sicemont.fr : écran blanc pendant environ 26 s (le bandeau affiche « chargement… »), page chargée à 42 s.
- On fait défiler puis on remonte : le grand carrousel en haut de page n'est toujours qu'un cadre rose vide, ses images arrivent encore.
- La page continue de télécharger après son chargement (environ 2 Mo au chargement, près de 3 Mo 40 s plus tard).
- Si la vidéo est réenregistrée, reporter les chiffres affichés par le script (26 s, 42 s).

À DIRE
- Parler pendant l'attente : « Qui attendrait 26 secondes devant un écran blanc ? »
- « Une démarche administrative, on la fait une ou deux fois par an : c'est presque toujours une première visite, donc le cas le plus lent. »
- « Tout le monde n'a pas un téléphone récent ni un forfait illimité, et la couverture réseau n'est pas la même partout. »
- Faire le lien avec le fil rouge : moins de poids = plus rapide = fonctionne sur du vieux matériel.
-->

---
layout: default
---

<div class="kicker">Décryptage 1/2</div>

# En ligne ≠ accessible

<div class="grid2 mt-8">
<div class="card green" v-click>
<h3><ph-thumbs-up-bold class="ico" aria-hidden="true" />Pour beaucoup d'habitants</h3>
<p>Un service en ligne <strong>simplifie la vie</strong> : pas de déplacement, disponible le soir et le week-end.</p>
</div>
<div class="card accent" v-click>
<h3><ph-wall-bold class="ico" aria-hidden="true" />Pour d'autres</h3>
<p>Il la complique, souvent pour ceux qui ont <strong>le plus besoin</strong> du service public.</p>
</div>
</div>

<div class="callout green mt-8" v-click>
Le Défenseur des droits le rappelle : la dématérialisation doit toujours laisser <strong>une autre voie d'accès</strong>.
</div>

<!--
⏱ 6:00 → 6:30
- Rester bienveillant : le site rend service à des milliers de familles. Le sujet, c'est ce qu'on prévoit dès la conception.
- Ne pas revenir sur les défauts vus en démo : la salle les a vus, on passe au constat général.
-->

---
layout: default
---

<div class="kicker">Décryptage 2/2</div>

# Ce n'est pas optionnel

<div class="grid3 mt-8">
<div class="card blue" v-click>
<h3><ph-scales-bold class="ico" aria-hidden="true" />La loi</h3>
<p>Depuis 2005, les services en ligne publics doivent être <strong>accessibles</strong> à tous.</p>
</div>
<div class="card blue" v-click>
<h3><ph-list-checks-bold class="ico" aria-hidden="true" />Le référentiel</h3>
<p>Le <strong>RGAA</strong> dit précisément ce qu'il faut vérifier.</p>
</div>
<div class="card blue" v-click>
<h3><ph-megaphone-bold class="ico" aria-hidden="true" />La transparence</h3>
<p>Chaque site publie une <strong>déclaration d'accessibilité</strong> et un schéma pluriannuel.</p>
</div>
</div>

<!--
⏱ 6:30 → 7:00
- Loi n° 2005-102 du 11 février 2005, article 47 ; RGAA (référentiel général d'amélioration de l'accessibilité) ; déclaration d'accessibilité et schéma pluriannuel obligatoires.
- Message : l'accessibilité n'est pas un bonus, c'est une obligation du service public.
-->

---
layout: default
---

<div class="kicker">Ce que chacun peut faire</div>

# 4 pistes, sans être informaticien

<div class="grid2 mt-4">
<div class="card green" v-click>
<h3><ph-pencil-line-bold class="ico" aria-hidden="true" />Écrire en langage clair</h3>
<ul>
<li>Phrases courtes, un verbe d'action par bouton</li>
<li>Pas de sigles ni de jargon administratif</li>
<li>Le <strong>FALC</strong> (Facile à lire et à comprendre) pour les documents clés : phrases simples, une idée par phrase, des images pour illustrer</li>
</ul>
</div>
<div class="card blue" v-click>
<h3><ph-file-text-bold class="ico" aria-hidden="true" />Produire des documents accessibles</h3>
<ul>
<li>Styles de titres dans Word, pas du gras à la main</li>
<li>Texte alternatif sur les images</li>
<li>Un PDF issu d'un traitement de texte, <strong>jamais un scan</strong></li>
</ul>
</div>
<div class="card accent" v-click>
<h3><ph-handshake-bold class="ico" aria-hidden="true" />Garder une alternative humaine</h3>
<ul>
<li>Accueil physique, téléphone, France services</li>
<li>L'indiquer clairement sur chaque démarche en ligne</li>
</ul>
</div>
<div class="card" v-click>
<h3><ph-clipboard-text-bold class="ico" aria-hidden="true" />L'exiger dans les cahiers des charges</h3>
<ul>
<li>Conformité <strong>RGAA</strong> et écoconception <strong>RGESN</strong></li>
<li>Tests avec de vrais usagers, pas seulement un audit</li>
</ul>
</div>
</div>

<!--
⏱ 7:00 → 8:30
- Ces 4 pistes peuvent rejoindre le guide de bonnes pratiques construit pendant la semaine.
- Si le temps manque, c'est le décryptage qu'on raccourcit, jamais cette slide.
-->

---
layout: default
---

<div class="kicker">Fil rouge · environnement</div>

# Plus simple, c'est aussi plus sobre

<div class="chain mt-8">
<div class="card green" v-click="1">
<h3>Page légère</h3>
<p>Peu d'images, de scripts, pas de vidéos inutiles</p>
</div>
<div class="arrow" v-click="2">→</div>
<div class="card blue" v-click="2">
<h3>Accessible au plus grand nombre</h3>
<p>Fonctionne en 3G, sur un vieux téléphone, avec un lecteur d'écran</p>
</div>
<div class="arrow" v-click="3">→</div>
<div class="card accent" v-click="3">
<h3>Matériel gardé plus longtemps</h3>
<p>Pas besoin d'un téléphone neuf pour faire sa démarche</p>
</div>
</div>

<div v-click="4">
<div class="callout blue mt-10">
L'essentiel de l'empreinte du numérique vient de la <strong>fabrication des équipements</strong>, pas de leur usage. Un service qui marche sur du vieux matériel évite d'en racheter.
</div>

<div class="small mt-2">ADEME · Arcep, évaluation de l'impact environnemental du numérique en France</div>
</div>

<!--
⏱ 8:30 → 9:30
- Chiffre ADEME/Arcep : les terminaux pèsent environ 3/4 à 4/5 de l'empreinte carbone du numérique, surtout à cause de leur fabrication. Vérifier la valeur exacte (étude 2022, mise à jour 2025) avant de la citer à l'oral.
- Message : accessibilité et sobriété vont dans le même sens. C'est le fil rouge que reprendront David (données) et l'ARNIA (cybersécurité).
-->

---
layout: cover
---

# Alors, c'est plus simple ?

<div class="grid3 mt-4">
<Card title="D'accord" color="lime"><template #icon><ph-thumbs-up-bold class="ico" aria-hidden="true" /></template>

Pour beaucoup d'habitants, **oui**

</Card>
<Card title="Pas d'accord" color="magenta"><template #icon><ph-thumbs-down-bold class="ico" aria-hidden="true" /></template>

Pour d'autres, c'est **un mur**

</Card>
<Card title="Ça dépend" color="blue"><template #icon><ph-scales-bold class="ico" aria-hidden="true" /></template>

De ce qu'on **prévoit dès le départ**

</Card>
</div>

<div class="mt-8 flex gap-4" v-click>
  <Sticker color="lime" :rotate="-2">Simplifier, c'est aussi demander moins</Sticker>
  <Sticker color="blue" :rotate="2">→ les données, avec David</Sticker>
</div>

<!--
⏱ 9:30 → 10:00
- Refaire lever les mains rapidement : est-ce que ça a bougé ?
- Transition : « Simplifier une démarche, c'est aussi demander moins d'informations à l'habitant… Est-ce que plus on collecte de données, meilleur est le service ? David ? »
- Ajuster la phrase après la réunion de coordination du 24/11.
-->

---
layout: default
---

<div class="kicker">David · 01 / Nos usages quotidiens</div>

# Plus on collecte de données, meilleur est le service ?

<div class="grid2 mt-8">
<div class="card blue" v-click>
<span class="pill blue">01</span>
<h3><ph-database-bold class="ico" aria-hidden="true" />Collecter utile</h3>
<ul>
<li>À quoi sert cette donnée ?</li>
<li>Existe-t-elle déjà ?</li>
<li>À quelle fréquence est-elle nécessaire ?</li>
</ul>
</div>
<div class="card green" v-click>
<span class="pill green">02</span>
<h3><ph-share-network-bold class="ico" aria-hidden="true" />Partager au bon endroit</h3>
<ul>
<li><strong>Fichier local</strong> : brouillon ponctuel</li>
<li><strong>Mail</strong> : transmettre une version figée</li>
<li><strong>OneDrive</strong> : travail individuel et partage ponctuel</li>
<li><strong>Teams</strong> : collaborer sur un document commun</li>
</ul>
</div>
</div>

<div class="callout green mt-8" v-click>
La bonne donnée, pour le bon usage, <strong>au bon endroit</strong>.
</div>

<!--
Vote initial : d'accord / pas d'accord / ça dépend. Collecter au juste besoin du service ; vérifier les données existantes et les droits de réutilisation. Pour collaborer, privilégier un lien vers un document de référence plutôt que multiplier les pièces jointes. Respecter les règles internes de sécurité et de conservation.

SOURCES
- Programme de la conférence du 3 décembre 2026, p. 2–3 ; repères d'usage proposés pour cette intervention.
-->

---
layout: default
---

<div class="kicker">David · 02 / De la charte à l'action</div>

# La sobriété, c'est aussi savoir arrêter

Data Lake OnDijon : une plateforme sans usage identifié

<div class="grid2 mt-6">
<div class="card blue" v-click>
<span class="big" style="font-size: 3.2rem"><ph-hard-drives-bold class="ico" aria-hidden="true" /> 6</span>
<h3>serveurs libérés à terme</h3>
</div>
<div class="card blue" v-click>
<span class="big" style="font-size: 3.2rem"><ph-database-bold class="ico" aria-hidden="true" /> 9 To</span>
<h3>de stockage libéré à terme</h3>
</div>
</div>

<div class="callout green mt-6" v-click>
Les données utiles <strong>restent disponibles</strong> dans les applications.
</div>

<div class="small mt-4">Charte de la donnée · juin 2025 · articles I.1 et I.3 : une collecte nécessaire et des ressources numériques optimisées.</div>

<!--
Arrêt en cours. 9 To correspondent approximativement à 3 millions de photos de 3 Mo. Ne pas assimiler les serveurs à des machines physiques éteintes ni annoncer une économie énergétique non mesurée. Vérifier les obligations de conservation avant suppression.
Transition : mieux connaître et maîtriser les données et outils peut faciliter leur protection ; la sobriété ne garantit pas à elle seule la sécurité.

SOURCES
- Chiffres et état du Data Lake OnDijon fournis par l'intervenant. Charte de la donnée de Dijon Métropole, juin 2025, p. 2, articles I.1 et I.3.
-->

---
layout: default
---

<div class="kicker">David · 03 / Ordres de grandeur</div>

# 9 To, ça représente quoi ?

<div class="grid3 mt-4">
<div class="card blue" v-click>
<span class="big" style="font-size: 2.4rem"><ph-camera-bold class="ico" aria-hidden="true" /> 3</span>
<h3>millions de photos</h3>
<p class="small">de 3 Mo chacune</p>
</div>
<div class="card green" v-click>
<span class="big" style="font-size: 2.4rem"><ph-device-mobile-bold class="ico" aria-hidden="true" /> 70</span>
<h3>smartphones pleins</h3>
<p class="small">de 128 Go chacun</p>
</div>
<div class="card accent" v-click>
<span class="big" style="font-size: 2.4rem"><ph-film-strip-bold class="ico" aria-hidden="true" /> 4 mois</span>
<h3>de films en continu</h3>
<p class="small">3 000 heures de vidéo HD, jour et nuit</p>
</div>
<div class="card accent" v-click>
<span class="big" style="font-size: 2.4rem"><ph-music-notes-bold class="ico" aria-hidden="true" /> 17 ans</span>
<h3>de musique non-stop</h3>
<p class="small">9 millions de minutes en MP3</p>
</div>
<div class="card blue" v-click>
<span class="big" style="font-size: 2.4rem"><ph-disc-bold class="ico" aria-hidden="true" /> 2,30 m</span>
<h3>de DVD empilés</h3>
<p class="small">plus de 1 900 DVD de 4,7 Go</p>
</div>
<div class="card green" v-click>
<span class="big" style="font-size: 2.4rem"><ph-book-open-bold class="ico" aria-hidden="true" /> 9</span>
<h3>millions de livres numériques</h3>
<p class="small">d'environ 1 Mo chacun</p>
</div>
</div>

<div class="small mt-4">Ordres de grandeur, 1 To = 1 000 Go. Ils parlent de volume stocké, pas de consommation d'énergie.</div>

<!--
Ordres de grandeur pour rendre « 9 To » concret. Ce sont des volumes de stockage : ne pas les traduire en énergie ou en CO₂ (rien n'a été mesuré, cf. note de la slide précédente).

HYPOTHÈSES DE CALCUL (1 To = 1 000 Go = 1 000 000 Mo)
- Photos : 9 000 000 Mo ÷ 3 Mo = 3 millions (chiffre de l'intervenant).
- Smartphones : 9 000 Go ÷ 128 Go ≈ 70.
- Vidéo HD : environ 3 Go par heure (ordre de grandeur des plateformes de streaming en HD) → 3 000 h ≈ 125 jours ≈ 4 mois sans interruption.
- Musique : MP3 à 128 kbit/s ≈ 1 Mo par minute → 9 millions de minutes ≈ 17 ans d'écoute continue.
- DVD : 9 000 Go ÷ 4,7 Go ≈ 1 915 DVD ; boîtier nu de 1,2 mm d'épaisseur → pile d'environ 2,30 m.
- Livres numériques : un ePub de roman pèse environ 1 Mo → 9 millions.

À DIRE
- En choisir une ou deux à l'oral, pas les six : les photos et la pile de DVD parlent à tout le monde.
-->
