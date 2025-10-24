import { Metadata } from 'next';
import { generatePageMetadata } from '../../config/seo.config';
import { BreadcrumbJsonLd, AggregateRatingJsonLd } from '../../utils/jsonLd';
import { Testimonials } from '../../components/Testimonials';

export const metadata: Metadata = generatePageMetadata('/asiakkaiden-kokemuksia');

export default function AsiakkaidenKokemuksiaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Etusivu', item: 'https://hierontaleopessi.fi/' },
          { name: 'Asiakkaiden kokemuksia', item: 'https://hierontaleopessi.fi/asiakkaiden-kokemuksia' },
        ]}
      />
      <AggregateRatingJsonLd />
      <main className="min-h-screen">
        <h1 className="text-4xl font-bold text-center py-12">Asiakkaiden kokemuksia</h1>
        <Testimonials />
      </main>
    </>
  );
}