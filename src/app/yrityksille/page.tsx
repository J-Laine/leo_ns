import { Metadata } from 'next';
import { generatePageMetadata } from '../../config/seo.config';
import { BreadcrumbJsonLd } from '../../utils/jsonLd';
import { Business } from '../../components/Business';

export const metadata: Metadata = generatePageMetadata('/yrityksille');

export default function YrityksillePagePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Etusivu', item: 'https://hierontaleopessi.fi/' },
          { name: 'Yrityksille', item: 'https://hierontaleopessi.fi/yrityksille' },
        ]}
      />
      <main className="min-h-screen">
        <h1 className="text-4xl font-bold text-center py-12">Yrityksille</h1>
        <Business />
      </main>
    </>
  );
}