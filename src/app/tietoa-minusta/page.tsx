import { Metadata } from 'next';
import { generatePageMetadata } from '../../config/seo.config';
import { BreadcrumbJsonLd } from '../../utils/jsonLd';
import { AboutMe } from '../../components/AboutMe';

export const metadata: Metadata = generatePageMetadata('/tietoa-minusta');

export default function TietoaMinustaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Etusivu', item: 'https://hierontaleopessi.fi/' },
          { name: 'Tietoa minusta', item: 'https://hierontaleopessi.fi/tietoa-minusta' },
        ]}
      />
      <main className="min-h-screen">
        <h1 className="text-4xl font-bold text-center py-12">Tietoa minusta</h1>
        <AboutMe />
      </main>
    </>
  );
}