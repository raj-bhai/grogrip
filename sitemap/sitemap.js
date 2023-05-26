const fs = require('fs');
const path = require('path');
const axios = require('axios');
const he = require('he');

// async function getDynamicRouteParams() {
//   try {
//     const response = await axios.get('https://fakestoreapi.com/products');
//     const products = response.data;

//     const dynamicParams = products.map((product) => ({
//       pid: product.id,
//       name: product.title,
//     }));

//     return dynamicParams;
//   } catch (error) {
//     console.error('Error retrieving dynamic parameters:', error);
//     return [];
//   }
// }

async function generateSitemap() {
  const staticRoutes = [
    '/',
  ];

//   const dynamicParams = await getDynamicRouteParams();

//   const dynamicURLs = dynamicParams.map((params) => {
//     const { pid, name } = params;
//     const route = `/productdetail/${pid}/${name}`;
//     return route;
//   });

//   const allRoutes = [...staticRoutes, ...dynamicURLs];
  const allRoutes = [...staticRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allRoutes
        .map((route) => {
          const encodedRoute = he.encode(route);
          const loc = `https://www.grogrip.com${encodedRoute}`;
          const lastmod = new Date().toISOString();

          return `<url>
            <loc>${loc}</loc>
            <lastmod>${lastmod}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>1.0</priority>
          </url>`;
        })
        .join('\n')}
    </urlset>`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap();
