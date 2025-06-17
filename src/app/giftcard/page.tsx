// File: app/giftcard/gift-card-page.tsx
export default function GiftCardPage() {
  return (
    <section className="space-y-6 animate-fade-in">
      <h2 className="text-4xl font-semibold">Lahjakortti</h2>
      <p>Voit ostaa lahjakortin haluamallesi summalle tai palvelulle. Lahjakortit ovat voimassa 12 kuukautta ostopäivästä.</p>
      <a href="/contact" className="btn-primary">Kysy lisää tai tilaa lahjakortti</a>
    </section>
  );
}
