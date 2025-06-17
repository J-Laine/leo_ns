// components/Card.tsx
export function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm opacity-80">{text}</p>
    </div>
  );
}