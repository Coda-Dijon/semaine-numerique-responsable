#!/bin/sh
# Démo 2 : restitution d'un lecteur d'écran sur
# https://eservices.dijon.fr/Pages/mon-espace-citoyen-demarches
#
# Le texte reprend ce que le code de la page expose aux lecteurs d'écran
# (arbre d'accessibilité relevé le 11/11/2026), dans le style de VoiceOver :
#   1. navigation de lien en lien avec Tab ;
#   2. rotor « Titres » : la page n'a aucun titre structuré ;
#   3. lecture des onglets : simple texte, aucun rôle de bouton ou d'onglet.
# Voix de synthèse macOS « Thomas » (voix française par défaut de VoiceOver).
#
#   sh scripts/make-demo2-audio.sh
set -e
OUT=public/audio
mkdir -p "$OUT"
TMP=$(mktemp -d)

say -v Thomas -r 210 -o "$TMP/demo2.aiff" "
Dijon point f r, Services en ligne. [[slnc 900]]
lien, image. [[slnc 700]]
Démarches en ligne, lien. [[slnc 500]]
Mes démarches, lien. [[slnc 500]]
Mon foyer, lien. [[slnc 700]]
barre oblique inversée, lien. [[slnc 700]]
Connexion, lien. [[slnc 700]]
Titres d'identité Prise de rendez-vous pour les titres d'identité tels que la carte d'identité et ou le passeport, lien. [[slnc 600]]
Mon bureau de vote Indication du bureau de vote le plus proche de votre logement, lien. [[slnc 1400]]
Titres. [[slnc 300]] Aucun. [[slnc 1400]]
liste, 5 éléments. [[slnc 400]]
Citoyenneté. [[slnc 500]]
Culture tiret Sports. [[slnc 500]]
Enfance tiret Scolarité. [[slnc 500]]
Démarches Famille. [[slnc 500]]
Vie quotidienne. [[slnc 400]]
fin de liste.
"
afconvert -f m4af -d aac -b 64000 "$TMP/demo2.aiff" "$OUT/demo2-lecteur-ecran.m4a"
rm -rf "$TMP"
echo "✓ $OUT/demo2-lecteur-ecran.m4a"
