
export const metadata = { title: "Catering", description: "Corporate, weddings, house parties — live dosa stations, biryani bulk orders, veg & non-veg combos." };

export default function Page() {
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-extrabold mb-2">Catering</h1>
      <p className="text-muted">Bring bold South Indian flavour to your guests. We customize menus for all preferences.</p>
      <h2 className="text-xl font-bold mt-6">Why choose us</h2>
      <ul className="list-disc pl-6">
        <li>Live dosa & parotta stations</li>
        <li>Bulk biryani orders</li>
        <li>Veg & Non-Veg combos</li>
        <li>Delivery & on-site setup options</li>
      </ul>
      <a className="btn btn-primary mt-4 inline-block" href="/contact#catering">Get a Catering Quote</a>
    </section>
  );
}
