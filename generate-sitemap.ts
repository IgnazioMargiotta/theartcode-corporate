const fs = require('fs');
const path = require('path');

const generateSitemap = () => {
  const urls = ['/', '/it'];

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(url => `
          <url>
            <loc>${`https://vibra.studio${url}`}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <priority>0.7</priority>
          </url>
        `)
        .join('')}
    </urlset>
  `;

  fs.writeFileSync(path.resolve('./public/sitemap.xml'), sitemap);
};

generateSitemap();
