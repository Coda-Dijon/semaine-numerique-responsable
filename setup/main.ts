import { defineAppSetup } from '@slidev/types'

// Préfixe un chemin de public/ par la base de déploiement (ex. /semaine-numerique-responsable/
// sur GitHub Pages). Vite ne réécrit pas les attributs des composants (poster, src de <SlideAudio>).
//   <SlidevVideo :poster="$asset('/videos/demo1-poster.png')">
export const asset = (path: string) => import.meta.env.BASE_URL + path.replace(/^\//, '')

export default defineAppSetup(({ app }) => {
  app.config.globalProperties.$asset = asset
})
