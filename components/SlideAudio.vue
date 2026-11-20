<script setup lang="ts">
// Lecteur audio qui démarre à l'arrivée sur la slide et s'arrête en la quittant.
//   <SlideAudio src="/audio/fichier.m4a" />
// Il ne joue que dans la vue principale : ni dans la vue présentateur
// (sinon le son serait doublé), ni dans l'aperçu ou l'export.
import { ref } from 'vue'
import { asset } from '../setup/main'
import { onSlideEnter, onSlideLeave, useSlideContext } from '@slidev/client'

const props = defineProps<{ src: string }>()
const el = ref<HTMLAudioElement>()
const { $renderContext } = useSlideContext()

onSlideEnter(() => {
  if ($renderContext.value !== 'slide' || !el.value) return
  el.value.currentTime = 0
  // Le navigateur peut refuser la lecture sans interaction préalable :
  // le bouton lecture reste alors disponible.
  el.value.play().catch(() => {})
})

onSlideLeave(() => {
  el.value?.pause()
})
</script>

<template>
  <audio ref="el" class="nb-audio" :src="asset(props.src)" controls preload="auto" />
</template>

<style scoped>
.nb-audio {
  display: block;
  width: 100%;
  border: var(--nb-border);
  box-shadow: var(--nb-shadow);
  border-radius: 0;
  background: var(--nb-white);
}
</style>
