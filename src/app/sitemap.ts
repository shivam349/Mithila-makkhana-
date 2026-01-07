import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mithilamakhana.com';

  // Static pages
  const staticPages = [
    '',
    '/products',
    '/about',
    '/blog',
    '/orders/track',
    '/cart',
    '/checkout',
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1.0 : 0.8,
  }));

  // In a real application, you would fetch products dynamically
  // For now, we'll return static URLs
  // Example:
  // const products = await fetchProducts();
  // const productUrls = products.map((product) => ({
  //   url: `${baseUrl}/products/${product.slug}`,
  //   lastModified: new Date(product.updatedAt),
  //   changeFrequency: 'daily' as const,
  //   priority: 0.7,
  // }));

  return staticUrls;
}
