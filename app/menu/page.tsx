
import Image from "next/image";
import { MENU } from "@/app/data/menu";

export const metadata = {
  title: "Menu",
  description: "Dosa, Biryani, Tiffin, Curries, Parotta, Seafood, and Sweets — cooked fresh.",
};

export default function Page() {
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-extrabold mb-2">Our Menu</h1>
      <p className="text-muted mb-6">Hungry? Start with dosa crackle or biryani aroma. All dishes cooked fresh to order.</p>
      <div className="grid md:grid-cols-2 gap-6">
        {MENU.map(cat => (
          <div key={cat.id} className="card">
            <Image src={cat.img} alt={cat.title} width={640} height={420} className="rounded-xl mb-3" />
            <h2 className="text-xl font-bold">{cat.title}</h2>
            <ul className="mt-3">
              {cat.items.map((it, i) => (
                <li key={i} className="flex justify-between py-2 border-b last:border-b-0">
                  <span className="font-medium">{it.name}{it.veg ? " (V)" : ""}{it.desc ? <span className="text-muted block text-sm">{it.desc}</span> : null}</span>
                  <span className="text-accent font-bold">{it.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted mt-4">Photos are placeholders. Replace with your real dish photos at <code>/public/images/menu/</code>.</p>
    </section>
  );
}
