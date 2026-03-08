
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-16">
      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/manam-logo.png"
                width={48}
                height={48}
                alt="Manam Canteen logo"
                className="rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold">Manam Canteen</h3>
                <p className="text-orange-400 text-sm">South Indian Cuisine</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Authentic South Indian flavors made fresh daily. From crackling dosas to aromatic biryanis,
              experience the warmth of traditional Tamil cooking in Mississauga.
            </p>
            <div className="flex gap-4">
              <Link
                href="tel:+19052380707"
                className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                <span>📞</span>
                <span>Call Now</span>
              </Link>
              <Link
                href="/contact#order"
                className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                <span>🍽️</span>
                <span>Order Online</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-orange-400 transition-colors">
                  🍽️ Our Menu
                </Link>
              </li>
              <li>
                <Link href="/catering" className="text-gray-300 hover:text-orange-400 transition-colors">
                  🎉 Catering Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors">
                  ℹ️ About Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-300 hover:text-orange-400 transition-colors">
                  ⭐ Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">
                  📞 Contact & Reservations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Visit Us</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <span className="text-orange-400 mt-1">📍</span>
                <div>
                  <p className="font-medium">Address</p>
                  <p>Unit 3B, 3415 Dixie Rd</p>
                  <p>Mississauga, ON L4Y 2B1</p>
                  <p>Canada</p>
                  <Link
                    href="https://maps.google.com/?q=3415+Dixie+Rd+Unit+3B+Mississauga+ON+L4Y+2B1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-400 hover:text-orange-300 text-sm"
                  >
                    Get Directions →
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400">📞</span>
                <div>
                  <p className="font-medium">Phone</p>
                  <Link
                    href="tel:+19052380707"
                    className="text-orange-400 hover:text-orange-300"
                  >
                    +1 905-238-0707
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400">✉️</span>
                <div>
                  <p className="font-medium">Email</p>
                  <Link
                    href="mailto:manamcanteen@gmail.com"
                    className="text-orange-400 hover:text-orange-300"
                  >
                    manamcanteen@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-gray-300 mb-6">
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

            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Link
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Follow us on Facebook"
              >
                <span className="text-lg">📘</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Follow us on Instagram"
              >
                <span className="text-lg">📷</span>
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Follow us on Google"
              >
                <span className="text-lg">⭐</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Manam Canteen. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-orange-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-orange-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="hover:text-orange-400 transition-colors">
                Accessibility
              </Link>
            </div>
            <div className="text-gray-400 text-sm">
              Made with ❤️ for South Indian food lovers in Mississauga
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-lg transition-colors z-50 hidden md:flex items-center justify-center"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}
