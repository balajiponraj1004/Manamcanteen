
export const metadata = { title: "About", description: "We cook like home — fresh curry leaves, hand-ground masala, unapologetic Tamil flavour." };

export default function Page() {
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-extrabold mb-2">About Manam Canteen</h1>
      <p>We’re a family-run kitchen from Tamil Nadu. Dosas crisped to perfection, biryani layered with spice, curries simmered slow. Welcome home.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <div>
          <h2 className="text-xl font-bold">Our Promise</h2>
          <ul className="list-disc pl-6">
            <li>Authenticity first</li>
            <li>Fresh, quality ingredients</li>
            <li>Warm hospitality</li>
          </ul>
        </div>
        <img src="/moodboard.png" alt="Manam Canteen moodboard" className="rounded-2xl border" />
      </div>
    </section>
  );
}
