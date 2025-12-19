const siteUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://yourdomain.com';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

