
export default function Footer() {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="container grid md:grid-cols-3 gap-6 py-10">
        <div>
          <h4 className="font-bold text-lg">Manam Canteen</h4>
          <p>Authentic South Indian flavours in Mississauga.</p>
          <p className="mt-2"><strong>Address:</strong> Unit 3B, 3415 Dixie Rd, Mississauga, ON L4Y 4J6, Canada</p>
          <p><strong>Order Hotline:</strong> <a className="text-accent font-semibold" href="tel:+19052380707">+1 905-238-0707</a></p>
        </div>
        <div>
          <h4 className="font-bold text-lg">Hours</h4>
          <ul className="text-sm text-muted">
            <li>Mon–Thu: 11:00–22:00</li>
            <li>Fri–Sat: 11:00–23:00</li>
            <li>Sun: 11:00–22:00</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg">Links</h4>
          <ul className="space-y-1">
            <li><a href="/menu">Menu</a></li>
            <li><a href="/catering">Catering</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/reviews">Reviews</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="container flex items-center justify-between py-4 text-sm text-muted">
        <small>© {new Date().getFullYear()} Manam Canteen. All rights reserved.</small>
        <small>Made with ❤️ in Mississauga.</small>
      </div>
    </footer>
  );
}
