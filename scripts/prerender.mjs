// Injects the server-rendered app into dist/index.html and writes sitemap.xml and robots.txt
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { loadEnv } from 'vite'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const env = loadEnv('production', root, 'VITE_')
const siteUrl = env.VITE_SITE_URL

const { render } = await import(pathToFileURL(path.join(root, 'dist-ssr/entry-server.js')).href)
const htmlPath = path.join(dist, 'index.html')
const html = fs.readFileSync(htmlPath, 'utf8')
if (!html.includes('<div id="root"></div>')) throw new Error('Root placeholder not found in dist/index.html')
fs.writeFileSync(htmlPath, html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`))

const today = new Date().toISOString().slice(0, 10)
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${siteUrl}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>1.0</priority></url>
</urlset>
`,
)
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}sitemap.xml\n`)

// Branded 404 for GitHub Pages, kept out of the index
fs.writeFileSync(
  path.join(dist, '404.html'),
  `<!doctype html>
<html lang="es-MX">
<head>
<meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="robots" content="noindex" /><title>Página no encontrada · Juan Pablo Dionicio</title>
<link rel="icon" type="image/svg+xml" href="${siteUrl}favicon.svg" />
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;600&display=swap" rel="stylesheet" />
<style>
  body{margin:0;min-height:100svh;display:flex;align-items:center;justify-content:center;background:#000;color:#fff;font-family:Geist,system-ui,sans-serif;padding:16px}
  main{max-width:680px}
  p.k{font-family:ui-monospace,monospace;font-size:14px;color:#34D399;margin:0 0 16px}
  h1{font-size:48px;line-height:1;letter-spacing:-0.03em;margin:0 0 16px;text-wrap:balance}
  p{color:#a3a3a3;font-size:18px;line-height:28px;margin:0 0 32px}
  a{display:inline-block;background:#fff;color:#000;border-radius:999px;padding:12px 24px;font-weight:600;text-decoration:none}
  a:focus-visible{outline:2px solid #34D399;outline-offset:2px}
</style>
</head>
<body><main>
  <p class="k">Error 404</p>
  <h1>Esta página no existe</h1>
  <p>Puede que el enlace esté mal escrito o que la página se haya movido. El sitio completo está a un clic.</p>
  <a href="${siteUrl}">Volver al inicio</a>
</main></body>
</html>
`,
)

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`Prerendered index.html, sitemap.xml and robots.txt for ${siteUrl}`)
