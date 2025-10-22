
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Order Irresistible South Indian Food in Mississauga",
  description: "Crackling dosas, aromatic biryanis, soulful curries. Order now — dine-in, pickup, or catering.",
};

export default function Home() {
  return (
    <>
      <section className="hero py-10 md:py-16">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block mb-3 badge">Fresh • Spicy • Comfort</div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Hungry? <span className="text-accent">Crackling Dosas</span> &
              <span className="text-accent"> Biryani</span> are waiting.
            </h1>
            <p className="mt-3 text-lg text-muted">
              From first-bite crunch to slow-cooked masalas — this is South Indian soul food, made fresh.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/contact#order" className="btn btn-primary">🔥 Order Now</Link>
              <Link href="/menu" className="btn btn-ghost">See Menu</Link>
              <Link href="/catering" className="btn btn-ghost">Catering</Link>
            </div>
            <ul className="mt-4 flex flex-wrap gap-3 text-sm text-muted">
              <li>Vegetarian & Non-Veg</li>
              <li>Halal-friendly options</li>
              <li>Takeout • Delivery • Dine-in</li>
            </ul>
          </div>
          <div className="relative">
            <Image src="/images/menu/biryani.svg" width={640} height={420} alt="Chicken biryani" className="rounded-2xl border shadow-soft" priority />
            <Image src="/images/menu/dosa.svg" width={260} height={180} alt="Ghee roast dosa" className="absolute -bottom-6 -left-6 rounded-2xl border shadow-soft hidden md:block" />
          </div>
        </div>
      </section>

      <section className="container py-6">
        <h2 className="text-2xl font-bold mb-3">Cravings Carousel</h2>
        <div className="overflow-x-auto hide-scrollbar">
          <div className="flex gap-4 min-w-max">
            <Image src="/images/menu/dosa.svg" alt="Ghee Roast Dosa" width={320} height={220} className="rounded-2xl border" />
            <Image src="/images/menu/biryani.svg" alt="Chicken Biryani" width={320} height={220} className="rounded-2xl border" />
            <Image src="/images/menu/parotta.svg" alt="Parotta" width={320} height={220} className="rounded-2xl border" />
            <Image src="/images/menu/curries.svg" alt="Chettinad Chicken" width={320} height={220} className="rounded-2xl border" />
            <Image src="/images/menu/sweets.svg" alt="Tirunelveli Halwa" width={320} height={220} className="rounded-2xl border" />
          </div>
        </div>
      </section>
    </>
  )
}
