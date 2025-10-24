import { Metadata } from 'next';
import { generatePageMetadata } from '../../config/seo.config';
import { BreadcrumbJsonLd } from '../../utils/jsonLd';
import { ServicesAndPrices } from '../../components/ServicesAndPrices';

export const metadata: Metadata = generatePageMetadata('/palvelut-hinnasto');

export default function PalvelutHinnastoPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Etusivu', item: 'https://hierontaleopessi.fi/' },
          { name: 'Palvelut ja hinnasto', item: 'https://hierontaleopessi.fi/palvelut-hinnasto' },
        ]}
      />
      <main className="min-h-screen">
        <h1 className="text-4xl font-bold text-center py-12">Palvelut ja hinnasto</h1>
        <ServicesAndPrices />
      </main>
    </>
  );
}