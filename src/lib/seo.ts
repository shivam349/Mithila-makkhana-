import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

export function generateMetadata({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  noindex = false,
}: SEOProps): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mithilamakhana.com';
  const fullTitle = `${title} | Mithila Makhana`;
  const image = ogImage || `${baseUrl}/og-image.jpg`;

  return {
    title: fullTitle,
    description,
    keywords: keywords || 'mithila makhana, darbhanga makhana, bihar makhana, fox nut mithila',
    ...(canonical && { alternates: { canonical } }),
    ...(noindex && { robots: { index: false, follow: false } }),
    openGraph: {
      title: fullTitle,
      description,
      url: canonical || baseUrl,
      siteName: 'Mithila Makhana',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string[];
  price: number;
  currency?: string;
  availability?: 'InStock' | 'OutOfStock';
  rating?: {
    value: number;
    count: number;
  };
  brand?: string;
}

export function generateProductSchema({
  name,
  description,
  image,
  price,
  currency = 'INR',
  availability = 'InStock',
  rating,
  brand = 'Mithila Makhana',
}: ProductSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    brand: {
      '@type': 'Brand',
      name: brand,
    },
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: currency,
      availability: `https://schema.org/${availability}`,
    },
    ...(rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: rating.value,
        reviewCount: rating.count,
      },
    }),
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mithila Makhana',
    url: 'https://mithilamakhana.com',
    logo: 'https://mithilamakhana.com/logo.png',
    description: 'Premium quality Makhana (Fox Nuts) from Darbhanga, Bihar',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Darbhanga',
      addressRegion: 'Bihar',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-98765-43210',
      contactType: 'Customer Service',
      email: 'info@mithilamakhana.com',
    },
    sameAs: [
      // Add social media links here when available
    ],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
