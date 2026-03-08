
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Contact Manam Canteen - Order, Reserve Table & Catering | Mississauga",
  description: "Contact Manam Canteen for South Indian food orders, table reservations, and catering services. Located at 3415 Dixie Rd, Mississauga. Call +1 905-238-0707",
  keywords: [
    "Manam Canteen contact",
    "South Indian restaurant Mississauga contact",
    "order South Indian food Mississauga",
    "table reservation Mississauga",
    "Indian catering Mississauga",
    "3415 Dixie Rd Mississauga",
  ],
  openGraph: {
    title: "Contact Manam Canteen - Order South Indian Food",
    description: "Order authentic South Indian cuisine, reserve a table, or book catering. Call +1 905-238-0707",
    url: "https://manamcanteen.com/contact",
    images: [
      {
        url: "/images/contact-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Manam Canteen restaurant interior and contact information",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-spices.png')] opacity-5"></div>
        <div className="container relative text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            Open Daily • Fast Service • Authentic Flavors
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Get Your South Indian</span>
            <br />
            <span className="text-orange-600">Cravings Delivered</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Whether you want to order for pickup, reserve a table for a special dinner,
            or book catering for your event — we're here to make your South Indian food experience unforgettable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+19052380707"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              📞 Call +1 905-238-0707
            </Link>
            <Link
              href="#order"
              className="inline-flex items-center gap-2 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              🛒 Order Online
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Order Now */}
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🍽️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Order for Pickup/Delivery</h3>
              <p className="text-gray-600 mb-6">
                Fresh South Indian food ready in minutes. Call us or use our delivery partners.
              </p>
              <div className="space-y-3">
                <Link
                  href="tel:+19052380707"
                  className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors w-full justify-center"
                >
                  📞 Call to Order
                </Link>
                <div className="text-sm text-gray-500">Delivery partners coming soon</div>
              </div>
            </div>

            {/* Reserve Table */}
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🪑</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Reserve a Table</h3>
              <p className="text-gray-600 mb-6">
                Book your table for dine-in experience. Perfect for families and special occasions.
              </p>
              <Link
                href="#reserve"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors w-full justify-center"
              >
                📅 Make Reservation
              </Link>
            </div>

            {/* Catering */}
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎉</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Event Catering</h3>
              <p className="text-gray-600 mb-6">
                Authentic South Indian catering for weddings, corporate events, and celebrations.
              </p>
              <Link
                href="#catering"
                className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors w-full justify-center"
              >
                📧 Catering Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Map */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Visit Manam Canteen</h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                    <p className="text-gray-600 mb-3">
                      Unit 3B, 3415 Dixie Rd<br />
                      Mississauga, ON L4Y 2B1<br />
                      Canada
                    </p>
                    <Link
                      href="https://maps.google.com/?q=3415+Dixie+Rd+Unit+3B+Mississauga+ON+L4Y+2B1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
                    >
                      Get Directions →
                    </Link>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <Link
                      href="tel:+19052380707"
                      className="text-2xl font-bold text-orange-600 hover:text-orange-700"
                    >
                      +1 905-238-0707
                    </Link>
                    <p className="text-gray-600 mt-1">Call for orders, reservations, or inquiries</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Hours</h3>
                    <div className="space-y-1 text-gray-600">
                      <div className="flex justify-between">
                        <span>Monday - Thursday</span>
                        <span>11:00 AM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Friday - Saturday</span>
                        <span>11:00 AM - 11:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>11:00 AM - 10:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <Link
                      href="mailto:manamcanteen@gmail.com"
                      className="text-orange-600 hover:text-orange-700 font-medium"
                    >
                      manamcanteen@gmail.com
                    </Link>
                    <p className="text-gray-600 mt-1">For catering inquiries and special requests</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Find Us</h2>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <iframe
                  title="Map to Manam Canteen"
                  className="w-full h-96"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=3415+Dixie+Rd,+Mississauga,+ON+L4Y+4J6&output=embed"
                  style={{ border: 0 }}
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">
                  Easy access from major highways • Ample parking available • Wheelchair accessible
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section id="reserve" className="py-16 bg-white">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Reserve Your Table
            </h2>
            <p className="text-lg text-gray-600">
              Book your table for an authentic South Indian dining experience
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
            <form className="space-y-6" name="reserve" action="/api/form" method="POST">
              <input type="hidden" name="form-name" value="reserve" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="+1 (905) 238-0707"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Time *
                  </label>
                  <select
                    name="time"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="">Select time</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="13:30">1:30 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="14:30">2:30 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="15:30">3:30 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="16:30">4:30 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="21:30">9:30 PM</option>
                    <option value="22:00">10:00 PM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Guests *
                  </label>
                  <select
                    name="guests"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  >
                    <option value="">Select guests</option>
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                    <option value="5">5 people</option>
                    <option value="6">6 people</option>
                    <option value="7">7 people</option>
                    <option value="8">8 people</option>
                    <option value="9">9 people</option>
                    <option value="10">10+ people</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  name="specialRequests"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="Birthday celebration, dietary restrictions, etc."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Catering Inquiry */}
      <section id="catering" className="py-16 bg-gray-50">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Catering Services
            </h2>
            <p className="text-lg text-gray-600">
              Bring authentic South Indian flavors to your special event
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">What We Offer</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                <ul className="space-y-1">
                  <li>✓ Traditional South Indian curries</li>
                  <li>✓ Fresh dosas and idlis</li>
                  <li>✓ Aromatic biryanis</li>
                  <li>✓ Vegetarian & non-vegetarian options</li>
                </ul>
                <ul className="space-y-1">
                  <li>✓ Custom spice levels</li>
                  <li>✓ Halal-certified meats</li>
                  <li>✓ Setup and serving staff</li>
                  <li>✓ Dietary accommodation</li>
                </ul>
              </div>
            </div>

            <form className="space-y-6" name="catering" action="/api/form" method="POST">
              <input type="hidden" name="form-name" value="catering" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="+1 (905) 238-0707"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Date
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Event Details *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="Tell us about your event: number of guests, type of event, dietary requirements, preferred dishes, delivery/setup time, etc."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Send Catering Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-16 bg-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Order?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Call us now for quick pickup or delivery. Fresh South Indian food made just for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="tel:+19052380707"
              className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              📞 Call +1 905-238-0707
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              🍽️ View Full Menu
            </Link>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-4">Delivery Partners</h3>
            <p className="text-gray-600 text-sm mb-4">
              We're working with popular delivery apps. Check back soon for direct ordering!
            </p>
            <div className="flex justify-center gap-4 opacity-50">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-lg">🚚</span>
                </div>
                <div className="text-xs text-gray-500">Uber Eats</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-lg">🚚</span>
                </div>
                <div className="text-xs text-gray-500">SkipTheDishes</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-lg">🚚</span>
                </div>
                <div className="text-xs text-gray-500">DoorDash</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
