// File: app/services/services-page.tsx
export default function ServicesPage() {
  return (
    <section className="space-y-12 animate-fade-in">
      <h2 className="text-4xl font-semibold">Palvelut ja hinnasto</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <li className="card">30 min klassinen hieronta – 32€</li>
        <li className="card">45 min klassinen hieronta – 39€</li>
        <li className="card">60 min klassinen hieronta – 45€</li>
        <li className="card">90 min klassinen hieronta – 65€</li>
      </ul>
    </section>
  );
}
