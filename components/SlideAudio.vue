<script setup lang="ts">
// Lecteur audio lancé à la main (bouton lecture), arrêté et rembobiné
// quand on quitte la slide.
//   <SlideAudio src="/audio/fichier.m4a" />
import { ref } from 'vue'
import { asset } from '../setup/main'
import { onSlideLeave } from '@slidev/client'

const props = defineProps<{ src: string }>()
const el = ref<HTMLAudioElement>()

onSlideLeave(() => {
  if (!el.value) return
  el.value.pause()
  el.value.currentTime = 0
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
