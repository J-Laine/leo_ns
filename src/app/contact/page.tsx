// File: app/contact/contact-page.tsx
export default function ContactPage() {
  return (
    <section className="space-y-8 animate-fade-in">
      <h2 className="text-4xl font-semibold">Ota yhteyttä</h2>
      <p>Email: leo.pessi@hieronta.fi<br />Puhelin: 040 123 4567</p>
      <form className="grid gap-4 max-w-md">
        <input type="text" placeholder="Nimi" className="input" required />
        <input type="email" placeholder="Sähköposti" className="input" required />
        <textarea placeholder="Viesti" rows={4} className="input" required />
        <button type="submit" className="btn-primary">Lähetä</button>
      </form>
    </section>
  );
}