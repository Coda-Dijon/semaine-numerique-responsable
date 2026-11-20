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

<div class="grid3 mt-6">
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

On fait une vraie démarche sur le site de la Ville, dans trois conditions que rencontrent des habitants

---
layout: default
---

<div class="kicker">Démo</div>

# Les démarches en ligne de la Ville de Dijon

<div class="url mt-2">eservices.dijon.fr › Démarches en ligne</div>

<div class="grid3 mt-8">
<div class="card blue" v-click>
<span class="pill blue">1 · vidéo</span>
<h3><ph-keyboard-bold class="ico" aria-hidden="true" />Clavier seul</h3>
<ul>
<li>Pas de souris : <code>Tab</code>, <code>Entrée</code>, flèches</li>
<li>Où suis-je sur la page ?</li>
<li>Peut-on atteindre toutes les démarches ?</li>
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

<div class="kicker">Démo 1 · Clavier seul · aucune souris · vidéo accélérée ×2</div>

# Sans souris, jusqu'où va-t-on ?

<div class="demo-row mt-2">
<SlidevVideo autoplay controls muted :poster="$asset('/videos/demo1-poster.png')" class="demo-video demo-video-wide">
  <source src="/videos/demo1-clavier.webm" type="video/webm" />
</SlidevVideo>
<div class="demo-side">
<div class="questions">
<ul>
<li>Pas de souris : <code>Tab</code>, <code>Entrée</code>, flèches</li>
<li>Où suis-je sur la page ?</li>
<li>Peut-on atteindre toutes les démarches ?</li>
</ul>
</div>
<div class="lesson" v-click><span class="n">24</span><p>appuis sur <code>Tab</code> pour faire le tour de la page</p></div>
<div class="lesson" v-click><span class="n">0</span><p>onglet atteignable : ils ne répondent <strong>qu'à la souris</strong></p></div>
<div class="lesson" v-click><span class="n">4/5</span><p>thématiques hors d'atteinte : sport, culture, école, famille…</p></div>
</div>
</div>

<!--
⏱ 2:00 → 3:00 · vidéo d'environ 18 s, accélérée ×2 (le dire à la salle), compteur de touches en bas à droite. Les 3 enseignements apparaissent au clic : les révéler après la vidéo, ou au fil de ce qu'elle montre.

CE QUE MONTRE LA VIDÉO
- Objectif annoncé : atteindre une démarche de l'onglet « Culture - Sports » (Carte Culture, sport, conservatoire…).
- 24 appuis sur Tab font le tour complet de la page : logo, menu, connexion, les 5 cartes de « Citoyenneté », puis le pied de page.
- Les onglets « Culture - Sports », « Enfance - Scolarité », « Démarches Famille », « Vie quotidienne » ne reçoivent jamais le focus : ils ne réagissent qu'au clic de souris.
- Fin de la vidéo : on tente les flèches, rien ne bouge.
- Le repère de position, c'est le fin contour bleu par défaut du navigateur : facile à perdre.

À DIRE
- « Au clavier, seules les démarches du premier onglet existent. Inscriptions scolaires, centre de loisirs, sport, culture : inaccessibles. »
- « Sans souris, c'est le quotidien de personnes avec un handicap moteur, de personnes qui tremblent, ou qui pilotent leur ordinateur à la voix. »
- Ton : constat, pas reproche. C'est un défaut fréquent et simple à corriger.
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
<div class="lesson" v-click><span class="n">0</span><p>titre structuré : impossible de parcourir la page <strong>comme un sommaire</strong></p></div>
<div class="lesson" v-click><span class="n">\</span><p>un lien annoncé « barre oblique inversée », un autre « image » : <strong>où mènent-ils ?</strong></p></div>
<div class="lesson" v-click><span class="n">5</span><p>onglets lus comme du simple texte : rien n'indique qu'on peut <strong>les activer</strong></p></div>
</div>
</div>

<!--
⏱ 3:00 → 4:30 · l'enregistrement (31 s) se lance avec le bouton lecture du lecteur. Les 3 enseignements apparaissent au clic.

CE QUE FAIT ENTENDRE L'ENREGISTREMENT
Restitution simulée d'un lecteur d'écran, dans le style de VoiceOver, avec la voix de synthèse « Thomas » (la voix française par défaut de VoiceOver). Le texte reprend exactement ce que le code de la page annonce (arbre d'accessibilité relevé le 11/11/2026). À dire honnêtement si on le présente : « voici ce qu'entend un utilisateur de lecteur d'écran ».
1. Navigation de lien en lien (Tab) :
   - le premier logo n'a pas de texte alternatif → « lien, image » ;
   - le second a un texte alternatif « \ » → « barre oblique inversée, lien » ;
   - chaque carte de démarche est un seul long lien : titre + description lus d'un bloc.
2. Rotor « Titres » : aucun. « Mes services » est du texte simple, pas un titre.
3. Les 5 onglets : une liste de textes, sans rôle de bouton ou d'onglet.

POINT POSITIF À CITER (équilibre)
- Les liens des réseaux sociaux sont bien nommés (« Lien vers le compte Facebook (nouvelle fenêtre) ») : la bonne pratique existe déjà sur le site.

À DIRE
- « Une personne aveugle navigue par titres et par liens, comme on lirait un sommaire. Ici, pas de sommaire. »
- Révéler les enseignements un par un après l'écoute.

OPTIONS
- Démo en direct à la place : Mac VoiceOver (Cmd+F5), rotor VO+U ; Windows NVDA. Vérifier avant que le son du PC sort dans la sono.
- Régénérer l'audio : sh scripts/make-demo2-audio.sh
- Le navigateur peut bloquer le son avant toute interaction : avoir cliqué ou appuyé sur une touche avant suffit (c'est le cas en présentant). Sinon, bouton lecture.
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
<div class="lesson" v-click><span class="n">13 s</span><p>d'écran blanc avant le premier affichage</p></div>
<div class="lesson" v-click><span class="n">27 s</span><p>pour que la page soit <strong>complète</strong></p></div>
<div class="lesson" v-click><span class="n">1ʳᵉ</span><p>visite = la plus lente. C'est le cas d'une démarche faite <strong>une fois par an</strong></p></div>
</div>
</div>

<!--
⏱ 4:30 → 6:00 · vidéo d'environ 40 s, chronomètre en bas de l'écran. Les 3 enseignements apparaissent au clic.

CE QUE MONTRE LA VIDÉO
- Conditions simulées : écran de 360 px, débit 400 kbit/s, latence 400 ms, processeur ralenti ×4.
- Premier chargement de la page des démarches : écran blanc pendant environ 13 s (le bandeau affiche « chargement… »), puis la page s'affiche sans ses icônes ; elle est complètement chargée vers 27 s (enregistrement du 11/11/2026).
- On fait défiler, on touche « Acte d'état civil » : la page suivante arrive en 2 s, car les fichiers communs sont déjà en cache.
- Si la vidéo est réenregistrée, mettre à jour les chiffres 13 s et 27 s.

À DIRE
- Parler pendant l'attente : « Qui attendrait 27 secondes devant une page ? »
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

<div class="grid3 mt-6">
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
