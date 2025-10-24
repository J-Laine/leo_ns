export const siteConfig = {
  name: 'Koulutettu hieroja Leo Pessi',
  domain: 'https://hierontaleopessi.fi',
  defaultOgImage: '/og-default.jpg',
};

export const pageMetadata = {
  '/': {
    title: 'Hieronta Tampere | Koulutettu hieroja Leo Pessi',
    description: 'Huippuluokan hierontaa ja kehonkäsittelyä Tampereen keskustassa. Myös iltaisin ja viikonloppuisin!',
  },
  '/palvelut-hinnasto': {
    title: 'Palvelut ja hinnasto | Koulutettu hieroja Leo Pessi',
    description: 'Maksuvälineinä käyvät käteisen lisäksi yleisimmät pankki- ja luottokortit, ePassi, Smartum ja Edenred. Opiskelijat ja eläkeläiset -2€ normaalihinnoista.',
  },
  '/tietoa-minusta': {
    title: 'Tietoa minusta | Koulutettu hieroja Leo Pessi',
    description: 'Kuka olen?',
  },
  '/asiakkaiden-kokemuksia': {
    title: 'Asiakkaiden kokemuksia | Koulutettu hieroja Leo Pessi',
    description: 'Tutustu asiakkaani kokemuksiin palveluistani ja varaa aika kehonhuoltoon!',
  },
  '/lahjakortti': {
    title: 'Lahjakortti | Koulutettu hieroja Leo Pessi',
    description: 'Anna lahjaksi hyvinvointia!',
  },
  '/yrityksille': {
    title: 'Yrityksille | Koulutettu hieroja Leo Pessi',
    description: 'Hyvinvoiva työntekijä on yrityksen tärkein voimavara. Ota yhteyttä ja autan mielelläni räätälöimään palvelun juuri teidän tarpeisiinne!',
  },
};

export function generatePageMetadata(path: string) {
  const meta = pageMetadata[path as keyof typeof pageMetadata];
  const url = `${siteConfig.domain}${path}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: url,
      languages: {
        'fi-FI': url,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      url: url,
      images: [
        {
          url: `${siteConfig.domain}${siteConfig.defaultOgImage}`,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
      locale: 'fi_FI',
      siteName: siteConfig.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [`${siteConfig.domain}${siteConfig.defaultOgImage}`],
    },
  };
}