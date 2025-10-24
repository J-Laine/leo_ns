import Script from 'next/script';

export function LocalBusinessJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MassageTherapist',
    name: 'Koulutettu hieroja Leo Pessi',
    url: 'https://hierontaleopessi.fi',
    image: 'https://hierontaleopessi.fi/profiilikuva.jpg',
    priceRange: '€€',
    telephone: '050 9183228',
    email: 'hieronta.lp@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Aleksanterinkatu 29 B18',
      addressLocality: 'Tampere',
      postalCode: '33100',
      addressCountry: 'FI',
    },
    areaServed: 'Tampere',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        opens: '12:00',
        closes: '16:00',
      },
    ],
    paymentAccepted: 'Cash, Credit Card, Debit Card, ePassi, Smartum, Edenred',
    sameAs: [],
  };

  return (
    <Script
      id="local-business-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: Array<{ name: string; item: string }> }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };

  return (
    <Script
      id="breadcrumb-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function AggregateRatingJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: 'Koulutettu hieroja Leo Pessi',
    },
    ratingValue: 'TODO-4.9',
    reviewCount: 'TODO-123',
  };

  return (
    <Script
      id="aggregate-rating-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}