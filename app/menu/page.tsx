
import Image from "next/image";
import Link from "next/link";
import { MENU } from "@/app/data/menu";

export const metadata = {
  title: "South Indian Menu - Dosa, Biryani & Authentic Curries | Manam Canteen Mississauga",
  description: "Explore our authentic South Indian menu in Mississauga. Fresh dosas, aromatic biryanis, traditional curries, and more. Order online for pickup, delivery, or dine-in. +1 905-238-0707",
  keywords: [
    "South Indian menu Mississauga",
    "dosa menu",
    "biryani menu Mississauga",
    "South Indian food menu",
    "authentic dosa Mississauga",
    "chicken biryani Mississauga",
    "Indian restaurant menu Ontario",
    "Manam Canteen menu",
  ],
  openGraph: {
    title: "South Indian Menu - Authentic Dosa & Biryani | Manam Canteen",
    description: "Fresh, authentic South Indian cuisine. From crackling dosas to aromatic biryanis - explore our complete menu.",
    url: "https://manamcanteen.com/menu",
    images: [
      {
        url: "/images/menu/menu-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Manam Canteen South Indian menu featuring dosas and biryanis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "South Indian Menu - Dosa & Biryani | Manam Canteen",
    description: "Authentic South Indian cuisine in Mississauga. Fresh dosas, biryanis, and traditional curries.",
    images: ["/images/menu/menu-hero.jpg"],
  },
};

export default function MenuPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-spices.png')] opacity-5"></div>
        <div className="container relative text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            Fresh • Authentic • Traditional
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Our South Indian</span>
            <br />
            <span className="text-orange-600">Menu</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            From the crackling perfection of ghee roast dosas to the aromatic symphony of our biryanis,
            every dish is crafted with traditional South Indian recipes and the freshest ingredients.
            Made fresh to order, just for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="tel:+19052380707"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              📞 Order by Phone
            </Link>
            <Link
              href="/contact#order"
              className="inline-flex items-center gap-2 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              🛒 Order Online
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-green-500">🟢</span>
              <span>Made Fresh Daily</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🚚</span>
              <span>Free Delivery Over $25</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⭐</span>
              <span>Halal & Vegetarian Options</span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each category tells a story of South Indian culinary tradition, made with love and authentic spices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MENU.map((category) => (
              <div key={category.id} className="group">
                {/* Category Card */}
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                  {/* Category Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={category.img}
                      alt={`${category.title} - authentic South Indian ${category.title.toLowerCase()} at Manam Canteen`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white mb-1">{category.title}</h3>
                      <p className="text-sm text-gray-200 opacity-90">
                        {category.title === "Dosas" && "Crispy, golden, soul-satisfying"}
                        {category.title === "Biryani" && "Aromatic rice perfection"}
                        {category.title === "Curries" && "Fiery masalas & rich gravies"}
                        {category.title === "Parotta" && "Flaky, buttery flatbread"}
                        {category.title === "Seafood" && "Fresh catch, coastal flavors"}
                        {category.title === "Sweets" && "Traditional desserts"}
                        {!["Dosas", "Biryani", "Curries", "Parotta", "Seafood", "Sweets"].includes(category.title) && "Authentic South Indian cuisine"}
                      </p>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="p-6">
                    <div className="space-y-3">
                      {category.items.slice(0, 4).map((item, index) => (
                        <div key={index} className="flex justify-between items-start py-2 border-b border-gray-100 last:border-b-0">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-gray-900">{item.name}</span>
                              {item.veg && (
                                <span className="inline-flex items-center justify-center w-5 h-5 bg-green-100 text-green-700 rounded-full text-xs font-bold">
                                  V
                                </span>
                              )}
                            </div>
                            {item.desc && (
                              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            )}
                          </div>
                          <div className="text-lg font-bold text-orange-600 ml-4">
                            {item.price}
                          </div>
                        </div>
                      ))}

                      {category.items.length > 4 && (
                        <div className="text-center pt-2">
                          <span className="text-sm text-gray-500">
                            +{category.items.length - 4} more items
                          </span>
                        </div>
                      )}
                    </div>

                    {/* View Full Category Button */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <button className="w-full bg-gray-50 hover:bg-orange-50 text-gray-700 hover:text-orange-700 py-3 px-4 rounded-lg font-medium transition-colors duration-200">
                        View Full {category.title} Menu →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Combos Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Combos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Perfect pairings that create unforgettable South Indian dining experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Combo 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🥞</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Dosa + Sambar Combo</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Crispy ghee roast dosa served with authentic sambar and coconut chutney
                </p>
                <div className="text-2xl font-bold text-orange-600 mb-4">$12.99</div>
                <Link
                  href="/contact#order"
                  className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Order Combo
                </Link>
              </div>
            </div>

            {/* Combo 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🍛</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Biryani + Raita Combo</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Fragrant chicken biryani with cooling cucumber raita and boiled egg
                </p>
                <div className="text-2xl font-bold text-orange-600 mb-4">$16.99</div>
                <Link
                  href="/contact#order"
                  className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Order Combo
                </Link>
              </div>
            </div>

            {/* Combo 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🍽️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Family Feast</h3>
                <p className="text-gray-600 text-sm mb-4">
                  2 Dosas, Chicken Biryani, 2 Curries, Parotta, and Sweets for 4 people
                </p>
                <div className="text-2xl font-bold text-orange-600 mb-4">$49.99</div>
                <Link
                  href="/contact#order"
                  className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Order Feast
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dietary Information */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Dietary Information
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We cater to all dietary preferences with authentic South Indian flavors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥬</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Vegetarian Options</h3>
              <p className="text-gray-600">
                Extensive vegetarian menu including dosas, idlis, curries, and traditional South Indian vegetarian dishes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐟</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Halal & Seafood</h3>
              <p className="text-gray-600">
                Halal-certified chicken and mutton options, plus fresh seafood dishes prepared with traditional coastal recipes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌶️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Spice Levels</h3>
              <p className="text-gray-600">
                Customize your spice level from mild to extra hot. Our chefs can adjust heat according to your preference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience South Indian Authenticity?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Order now and taste the difference that traditional recipes and fresh ingredients make.
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
              🛒 Order for Delivery
            </Link>
            <Link
              href="/catering"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
            >
              🎉 Book Catering
            </Link>
          </div>

          <div className="mt-8 text-sm opacity-75">
            <p>All dishes prepared fresh to order • Free delivery over $25 • Open daily 11AM-10PM</p>
          </div>
        </div>
      </section>
    </>
  );
}
