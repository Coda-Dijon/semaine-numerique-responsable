// Enregistre les démos 1 (clavier seul) et 3 (vieux smartphone, réseau lent)
// sur https://eservices.dijon.fr/Pages/mon-espace-citoyen-demarches
//
//   node scripts/record-demos.mjs [--only=1|3] [dossier-captures]
//
// --only=1 ou --only=3 ne réenregistre qu'une démo (les autres vidéos restent).
//
// Les vidéos sont écrites dans public/videos/. À relancer la veille de la
// conférence : le site évolue (blocs saisonniers).
import { chromium } from 'playwright-chromium'
import { mkdir, readdir, rename, rm } from 'node:fs/promises'
import path from 'node:path'

const URL = 'https://eservices.dijon.fr/Pages/mon-espace-citoyen-demarches'
const OUT = path.resolve('public/videos')
const args = process.argv.slice(2)
const ONLY = args.find(a => a.startsWith('--only='))?.split('=')[1]
const SHOTS = args.find(a => !a.startsWith('--')) // captures de contrôle (facultatif)
const run = n => !ONLY || ONLY === String(n)
const wait = ms => new Promise(r => setTimeout(r, ms))

// La démo 1 est jouée en accéléré ×2 : toutes ses pauses sont divisées par 2
const SPEED1 = 2
const wait1 = ms => wait(ms / SPEED1)

await mkdir(OUT, { recursive: true })
const browser = await chromium.launch()

async function finish(context, page, name) {
  const video = page.video()
  await context.close()
  const tmp = await video.path()
  await rename(tmp, path.join(OUT, name))
  console.log('✓', name)
}

async function shot(page, name) {
  if (SHOTS) await page.screenshot({ path: path.join(SHOTS, name) })
}

// Bandeau discret en bas d'écran, injecté dans chaque page
const overlayCss = `
  position: fixed; z-index: 2147483647; pointer-events: none;
  font: 700 18px/1.2 system-ui, sans-serif; color: #fff; background: #080331;
  border: 3px solid #ddf849; padding: 8px 14px;`

/* ---------------- Démo 1 : clavier seul (×2) ---------------- */
if (run(1)) {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    recordVideo: { dir: OUT, size: { width: 1280, height: 720 } },
    locale: 'fr-FR',
  })
  await context.addInitScript(css => {
    let tabs = 0
    const box = document.createElement('div')
    box.setAttribute('style', css + 'right: 16px; bottom: 16px;')
    box.textContent = 'Clavier seul · Tab × 0'
    document.addEventListener('keydown', e => {
      if (e.key === 'Tab') tabs++
      const keys = { Tab: 'Tab', ArrowRight: '→', ArrowDown: '↓', Enter: 'Entrée', ' ': 'Espace' }
      box.textContent = `Clavier seul · Tab × ${tabs}` + (e.key !== 'Tab' ? `  ·  ${keys[e.key] ?? e.key}` : '')
    }, true)
    const add = () => document.documentElement.appendChild(box)
    document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', add) : add()
  }, overlayCss)

  const page = await context.newPage()
  await page.goto(URL, { waitUntil: 'networkidle' })
  await page.screenshot({ path: path.join(OUT, 'demo1-poster.png') })
  await wait1(2500)

  // Objectif annoncé à l'oral : atteindre l'onglet « Culture - Sports »
  for (let i = 1; i <= 24; i++) {
    await page.keyboard.press('Tab')
    await wait1(i <= 11 ? 900 : 600)
    if (i === 6) await shot(page, 'demo1-tab06.png')
  }
  await shot(page, 'demo1-tab24.png')
  await wait1(1500)

  // Retour en haut, on tente les flèches et Entrée sur les onglets
  await page.keyboard.press('Shift+Tab')
  await page.evaluate(() => { document.activeElement.blur(); window.scrollTo(0, 0) })
  await wait1(1200)
  for (const k of ['Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab', 'ArrowRight', 'ArrowRight', 'ArrowDown', 'Tab']) {
    await page.keyboard.press(k)
    await wait1(800)
  }
  await shot(page, 'demo1-end.png')
  await wait1(2500)
  await finish(context, page, 'demo1-clavier.webm')
}

/* ---------------- Démo 3 : vieux smartphone, réseau lent ---------------- */
if (run(3)) {
  const context = await browser.newContext({
    viewport: { width: 360, height: 740 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent: 'Mozilla/5.0 (Linux; Android 9; SM-J530F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0 Mobile Safari/537.36',
    // Taille vidéo = viewport : Playwright ne met pas à l'échelle en mode mobile
    recordVideo: { dir: OUT, size: { width: 360, height: 740 } },
    locale: 'fr-FR',
  })
  // Chronomètre de chargement, remis à zéro à chaque page
  // Tailles en vw : tant que la balise viewport de la page n'est pas lue, le
  // navigateur met en page sur 980 px puis réduit. Les vw gardent la même
  // taille visible avant et après le premier rendu.
  await context.addInitScript(() => {
    const box = document.createElement('div')
    box.setAttribute('style', `
      position: fixed; z-index: 2147483647; pointer-events: none;
      left: 2.2vw; right: 2.2vw; bottom: 2.2vw; text-align: center;
      font: 700 4.4vw/1.2 system-ui, sans-serif; color: #fff; background: #080331;
      border: 0.8vw solid #ddf849; padding: 2.2vw 3.3vw;`)
    // Page vide de départ. Un chronomètre y resterait figé : dès que la vraie
    // page prend la main, celle-ci n'est plus repeinte, et la vraie page
    // n'affiche rien avant son premier rendu. On affiche donc un texte fixe ;
    // le chronomètre apparaît au premier rendu avec le temps réel écoulé.
    if (location.href === 'about:blank') {
      box.textContent = '3G lente · prêt'
      const put = () => document.documentElement.appendChild(box)
      document.documentElement ? put() : document.addEventListener('readystatechange', put, { once: true })
      window.__go = () => { box.textContent = '3G lente · chargement…' }
      return
    }
    let done = false
    const tick = () => {
      if (done) return
      box.textContent = `3G lente · chargement… ${(performance.now() / 1000).toFixed(1).replace('.', ',')} s`
      requestAnimationFrame(tick)
    }
    const add = () => { document.documentElement.appendChild(box); tick() }
    document.documentElement ? add() : document.addEventListener('readystatechange', add, { once: true })
    window.addEventListener('load', () => {
      done = true
      box.textContent = `3G lente · page prête en ${(performance.now() / 1000).toFixed(1).replace('.', ',')} s`
    })
  })

  const page = await context.newPage()
  const cdp = await context.newCDPSession(page)
  await cdp.send('Network.enable')
  await cdp.send('Network.emulateNetworkConditions', {
    offline: false,
    latency: 400, // ms
    downloadThroughput: (400 * 1024) / 8, // 400 kbit/s
    uploadThroughput: (400 * 1024) / 8,
  })
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 }) // processeur d'entrée de gamme

  await page.goto('about:blank')
  await wait(1000)
  await page.evaluate(() => window.__go())
  await page.goto(URL, { waitUntil: 'load', timeout: 120000 })
  await shot(page, 'demo3-loaded.png')
  await page.screenshot({ path: path.join(OUT, 'demo3-poster.png') })
  await wait(2500)

  // On fait défiler jusqu'à la démarche
  for (let i = 0; i < 4; i++) {
    await page.mouse.wheel(0, 220)
    await wait(700)
  }
  const link = page.locator('a[href*="demande-d-acte"]').first()
  await link.scrollIntoViewIfNeeded()
  await wait(1200)
  await shot(page, 'demo3-before-tap.png')
  await Promise.all([page.waitForLoadState('load'), link.tap()])
  await page.waitForURL(/demande-d-acte/, { timeout: 120000 })
  await page.waitForLoadState('load', { timeout: 120000 })
  await shot(page, 'demo3-acte.png')
  await wait(3000)
  await finish(context, page, 'demo3-mobile-3g.webm')
}

await browser.close()

// Nettoyage des vidéos temporaires éventuelles
for (const f of await readdir(OUT)) if (!f.startsWith('demo')) await rm(path.join(OUT, f))
