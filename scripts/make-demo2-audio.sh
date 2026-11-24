#!/bin/sh
# Démo 2 : restitution d'un lecteur d'écran sur https://www.sicemont.fr/
#
# Le texte reprend ce que le code de la page expose aux lecteurs d'écran
# (arbre d'accessibilité relevé le 24/11/2026), dans le style de VoiceOver :
#   1. navigation de lien en lien avec Tab : liens d'accès rapide, menu ;
#   2. rotor « Titres » : les « // » décoratifs sont lus comme du texte ;
#   3. une carte d'actualité = un seul long lien ;
#   4. « Prochains événements » : des liens nommés par une date seule.
# Voix de synthèse macOS « Thomas » (voix française par défaut de VoiceOver).
#
#   sh scripts/make-demo2-audio.sh
set -e
OUT=public/audio
mkdir -p "$OUT"
TMP=$(mktemp -d)

say -v Thomas -r 210 -o "$TMP/demo2.aiff" "
Lien d'accès rapide au menu, lien. [[slnc 500]]
Lien d'accès rapide au contenu principal, lien. [[slnc 700]]
Mairie de Sicemont tiret Accueil, lien. [[slnc 600]]
Sicemont, réduit, bouton. [[slnc 600]]
Ma mairie, lien. [[slnc 600]]
Suivez nous sur linkedine 2, lien. [[slnc 1400]]
Titres. [[slnc 400]]
Appel à Bénévoles, titre niveau 2. [[slnc 500]]
Mairie de Sicemont, titre niveau 1. [[slnc 500]]
barre oblique barre oblique Les nouvelles de Sicemont, titre niveau 2. [[slnc 500]]
barre oblique barre oblique Évènements, titre niveau 2. [[slnc 500]]
barre oblique barre oblique Accès Directs, titre niveau 2. [[slnc 1400]]
Maison de Santé Cette brochure a été élaborée par les Professionnels de la Maison de Santé de Sicemont pour permettre d'informer les patients, les usagers et leur entourage, sur les soins qui leur sont proposés. point point point Voir l'article, lien. [[slnc 1400]]
Prochains événements. [[slnc 500]]
20 mars 2021, lien. [[slnc 500]]
25 juin 2021, lien. [[slnc 500]]
7 octobre 2021, lien. [[slnc 500]]
14 octobre 2021, lien.
"
afconvert -f m4af -d aac -b 64000 "$TMP/demo2.aiff" "$OUT/demo2-lecteur-ecran.m4a"
afinfo "$OUT/demo2-lecteur-ecran.m4a" | grep duration
rm -rf "$TMP"
echo "✓ $OUT/demo2-lecteur-ecran.m4a"
