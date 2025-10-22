
export const metadata = { title: "Contact & Reservations", description: "Address, phone, reservation & catering forms — and fast ordering." };

export default function Page() {
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-extrabold mb-4">Contact & Reservations</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 id="reserve" className="text-xl font-bold">Reserve a Table</h2>
          <form className="mt-3 grid gap-3" name="reserve" action="/api/form" method="POST">
            <input type="hidden" name="form-name" value="reserve" />
            <label className="grid gap-1">Name<input className="border rounded-xl p-2" name="name" required /></label>
            <label className="grid gap-1">Phone<input className="border rounded-xl p-2" name="phone" required /></label>
            <label className="grid gap-1">Date<input className="border rounded-xl p-2" type="date" name="date" required /></label>
            <label className="grid gap-1">Time<input className="border rounded-xl p-2" type="time" name="time" required /></label>
            <label className="grid gap-1">Guests<input className="border rounded-xl p-2" type="number" name="guests" min="1" max="20" required /></label>
            <button className="btn btn-primary" type="submit">Book Now</button>
          </form>

          <h2 id="order" className="text-xl font-bold mt-8">Order Now</h2>
          <p>Quick pickup? Call us at <a href="tel:+19052380707" className="text-accent font-bold">+1 905-238-0707</a></p>
          <p className="text-sm text-muted">Delivery apps coming soon. If you already have links, replace the <code>#</code> below:</p>
          <div className="flex flex-wrap gap-3 mt-2">
            <a className="btn btn-primary" href="#" aria-disabled>Uber Eats</a>
            <a className="btn btn-primary" href="#" aria-disabled>SkipTheDishes</a>
            <a className="btn btn-primary" href="#" aria-disabled>DoorDash</a>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">Visit Us</h2>
          <p><strong>Address:</strong> Unit 3B, 3415 Dixie Rd, Mississauga, ON L4Y 4J6, Canada</p>
          <iframe title="Map to Manam Canteen" style={{border:0,width:"100%",height:300}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=3415+Dixie+Rd,+Mississauga,+ON+L4Y+4J6&output=embed"></iframe>

          <h2 id="catering" className="text-xl font-bold mt-8">Catering Enquiries</h2>
          <form className="mt-3 grid gap-3" name="catering" action="/api/form" method="POST">
            <input type="hidden" name="form-name" value="catering" />
            <label className="grid gap-1">Name<input className="border rounded-xl p-2" name="name" required /></label>
            <label className="grid gap-1">Email<input className="border rounded-xl p-2" type="email" name="email" required /></label>
            <label className="grid gap-1">Phone<input className="border rounded-xl p-2" name="phone" /></label>
            <label className="grid gap-1">Event Date<input className="border rounded-xl p-2" type="date" name="eventDate" /></label>
            <label className="grid gap-1">Message<textarea className="border rounded-xl p-2" name="message" rows={5}></textarea></label>
            <button className="btn btn-primary" type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
