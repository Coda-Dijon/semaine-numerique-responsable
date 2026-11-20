import { defineConfig } from 'vite'

// Le dossier contient « : » dans son chemin, ce qui perturbe le contrôle d'accès fichiers de Vite.
export default defineConfig({
  server: { fs: { strict: false } },
})
