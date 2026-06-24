import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = path.resolve(__dirname, '..')
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public')
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml')

const SITE_URL = 'https://dennis-r.vercel.app'
const TODAY = new Date().toISOString().split('T')[0]

async function generate() {
  const urls = [
    { loc: `${SITE_URL}/`, lastmod: TODAY, changefreq: 'weekly', priority: '1.0' },
  ]

  try {
    const projectsPath = path.join(PROJECT_ROOT, 'src', 'data', 'projects.js')
    const content = fs.readFileSync(projectsPath, 'utf-8')
    const slugMatches = Array.from(content.matchAll(/slug:\s*["']([^"']+)["']/g))
    for (const match of slugMatches) {
      urls.push({
        loc: `${SITE_URL}/project/${match[1]}`,
        lastmod: TODAY,
        changefreq: 'monthly',
        priority: '0.8',
      })
    }
    console.log(`Sitemap: found ${slugMatches.length} project slugs from data file`)
  } catch (e) {
    console.warn('Sitemap: could not read projects data, using static URLs only')
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`

  fs.writeFileSync(SITEMAP_PATH, xml, 'utf-8')
  console.log(`Sitemap generated: ${urls.length} URLs → ${SITEMAP_PATH}`)
}

generate()
