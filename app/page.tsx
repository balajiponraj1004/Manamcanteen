
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Manam Canteen - Authentic South Indian Restaurant in Mississauga | Order Dosa & Biryani",
  description: "Experience authentic South Indian cuisine at Manam Canteen in Mississauga. Fresh dosas, aromatic biryanis, and traditional curries. Order online for pickup, delivery, or catering. +1 905-238-0707",
  keywords: "South Indian restaurant Mississauga, dosa Mississauga, biryani Mississauga, Tamil food Mississauga, Indian catering Mississauga, authentic South Indian food Ontario",
  openGraph: {
    title: "Manam Canteen - South Indian Restaurant Mississauga",
    description: "Craving authentic South Indian food? Order fresh dosas, biryanis, and curries from Manam Canteen in Mississauga.",
    url: "https://manamcanteen.com",
    siteName: "Manam Canteen",
    images: [
      {
        url: "/images/og-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Manam Canteen South Indian Restaurant Interior",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manam Canteen - Authentic South Indian Food in Mississauga",
    description: "Fresh dosas, biryanis, and traditional South Indian cuisine. Order now!",
    images: ["/images/twitter-hero.jpg"],
  },
  alternates: {
    canonical: "https://manamcanteen.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section - Premium & Appetizing */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-spices.png')] opacity-5"></div>
        <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              Fresh • Authentic • Soulful
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-gray-900">Craving South Indian</span>
              <br />
              <span className="text-orange-600">Magic in Mississauga?</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
              From crackling ghee roast dosas to slow-cooked Chettinad curries, experience the authentic flavors of South India. Made fresh daily with traditional recipes passed down through generations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="tel:+19052380707"
                className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                📞 Call to Order Now
              </Link>
              <Link
                href="/menu"
                className="inline-flex items-center justify-center gap-2 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
              >
                🍽️ Explore Our Menu
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-green-500">🟢</span>
                Open Daily 11AM-10PM
              </div>
              <div className="flex items-center gap-2">
                <span>🚚</span>
                Free Delivery Over $25
              </div>
              <div className="flex items-center gap-2">
                <span>⭐</span>
                4.8/5 Customer Rating
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/images/menu/dosa-hero.jpg"
                width={600}
                height={400}
                alt="Fresh ghee roast dosa with chutneys at Manam Canteen"
                className="rounded-2xl shadow-2xl border-4 border-white"
                priority
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 z-20">
              <Image
                src="/images/menu/biryani-small.jpg"
                width={120}
                height={80}
                alt="Aromatic chicken biryani"
                className="rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white rounded-xl shadow-lg p-4 z-20">
              <div className="text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes - Food-Focused Gallery */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Signature Dishes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each dish tells a story of South Indian tradition, made with love and the finest ingredients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Image
                  src="/images/menu/dosa-signature.jpg"
                  width={400}
                  height={300}
                  alt="Ghee roast dosa - crispy, golden, served with coconut chutney and sambar"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Ghee Roast Dosa</h3>
                  <p className="text-sm opacity-90">Crispy perfection with traditional chutneys</p>
                  <div className="text-lg font-semibold mt-1">$8.99</div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Image
                  src="/images/menu/biryani-signature.jpg"
                  width={400}
                  height={300}
                  alt="Chicken biryani - aromatic basmati rice with tender chicken and caramelized onions"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Chicken Biryani</h3>
                  <p className="text-sm opacity-90">Fragrant rice with tender spiced chicken</p>
                  <div className="text-lg font-semibold mt-1">$14.99</div>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Image
                  src="/images/menu/chettinad-signature.jpg"
                  width={400}
                  height={300}
                  alt="Chettinad chicken curry - fiery South Indian curry with roasted spices"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">Chettinad Chicken</h3>
                  <p className="text-sm opacity-90">Fiery curry with roasted spice blend</p>
                  <div className="text-lg font-semibold mt-1">$13.99</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              View Full Menu
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Trust Building */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Families Choose Manam Canteen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              More than just food — we're your South Indian kitchen away from home
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🍳</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Authentic Recipes</h3>
              <p className="text-gray-600">
                Traditional South Indian cooking methods passed down through generations, using only the finest spices and ingredients.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Made Fresh Daily</h3>
              <p className="text-gray-600">
                Everything prepared fresh in our kitchen. No frozen foods, no shortcuts — just pure, authentic South Indian flavors.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Family Atmosphere</h3>
              <p className="text-gray-600">
                Warm, welcoming environment where families gather. Perfect for celebrations, casual dinners, or quick takeout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Preview */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-lg text-gray-600">
              Real reviews from real South Indian food lovers in Mississauga
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {"★".repeat(5)}
                </div>
                <span className="ml-2 text-sm text-gray-600">Google Review</span>
              </div>
              <p className="text-gray-700 mb-4">
                "The ghee roast dosa here is absolutely incredible! Crispy, flavorful, and the chutneys are homemade. Best South Indian food in Mississauga!"
              </p>
              <div className="font-semibold">- Priya S.</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {"★".repeat(5)}
                </div>
                <span className="ml-2 text-sm text-gray-600">Yelp Review</span>
              </div>
              <p className="text-gray-700 mb-4">
                "Their biryani is restaurant-quality! Ordered for family gathering and everyone loved it. Fast delivery and great service."
              </p>
              <div className="font-semibold">- Rajesh K.</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {"★".repeat(5)}
                </div>
                <span className="ml-2 text-sm text-gray-600">Facebook Review</span>
              </div>
              <p className="text-gray-700 mb-4">
                "Authentic Tamil food that reminds me of home. The Chettinad chicken curry is a must-try! Clean restaurant with friendly staff."
              </p>
              <div className="font-semibold">- Lakshmi M.</div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/reviews"
              className="text-orange-600 hover:text-orange-700 font-semibold"
            >
              Read More Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for South Indian Comfort Food?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Order now for pickup, delivery, or catering. Fresh, authentic, and delivered with love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+19052380707"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              📞 Call +1 905-238-0707
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              📍 Visit Us Today
            </Link>
          </div>

          <div className="mt-8 text-sm opacity-75">
            <p>3415 Dixie Rd Unit 3B, Mississauga, ON L4Y 2B1 • Open Daily 11AM-10PM</p>
          </div>
        </div>
      </section>
    </>
  );
}
