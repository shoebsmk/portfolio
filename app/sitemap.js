const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://yourdomain.com';

export default function sitemap() {
  const routes = [
    '',
    '/blog',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '/blog' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}

