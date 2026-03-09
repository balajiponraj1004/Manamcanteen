
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About Manam Canteen - Authentic South Indian Restaurant in Mississauga",
  description: "Learn about Manam Canteen's story - bringing authentic South Indian flavors from Tamil Nadu to Mississauga with warmth, hospitality, and traditional cooking methods.",
  keywords: [
    "about Manam Canteen",
    "South Indian restaurant story",
    "Tamil Nadu cuisine Mississauga",
    "authentic South Indian food",
    "family-run restaurant Mississauga",
  ],
  openGraph: {
    title: "About Manam Canteen - Our South Indian Story",
    description: "Discover the warmth and hospitality of South Indian culture at Manam Canteen. Family-run kitchen serving authentic Tamil Nadu cuisine.",
    url: "https://manamcanteen.com/about",
    images: [
      {
        url: "/images/about-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Manam Canteen team and authentic South Indian cooking",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-spices.png')] opacity-5"></div>
        <div className="container relative text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            Family-Run • Authentic • Traditional
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Our South Indian</span>
            <br />
            <span className="text-orange-600">Story</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            From the vibrant streets of Tamil Nadu to the heart of Mississauga,
            we're bringing the authentic flavors and warm hospitality of South Indian culture to your table.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                From Tamil Nadu to Mississauga
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Manam Canteen was born from a deep love for the rich culinary traditions of Tamil Nadu.
                  Our founders, with roots in the coastal regions of South India, wanted to share the authentic
                  flavors that have been passed down through generations.
                </p>
                <p>
                  What started as a small family kitchen has grown into a beloved restaurant where every dish
                  tells a story of tradition, spice, and the warmth of South Indian hospitality. We cook like home
                  — fresh curry leaves, hand-ground masala, and unapologetic Tamil flavor.
                </p>
                <p>
                  Every dosa is crisped to perfection, every biryani layered with aromatic spices, and every curry
                  simmered slowly to bring out the deepest flavors. We believe that great food brings people together,
                  and we're honored to be part of your special moments.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/about-story.jpg"
                width={600}
                height={400}
                alt="Traditional South Indian cooking and family atmosphere"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years of Authentic Cooking</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-gray-50">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Commitment to Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We are committed to providing exceptional dining experiences with outstanding service that reflects
            the warmth and hospitality of South Indian culture. Our dedicated team ensures every guest feels
            welcomed and cherished.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Authentic Ingredients</h3>
              <p className="text-gray-600">
                We source the freshest ingredients, including imported spices and traditional South Indian staples,
                to ensure every dish captures the true essence of Tamil Nadu cuisine.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Family Atmosphere</h3>
              <p className="text-gray-600">
                Our restaurant feels like an extension of your home. Whether you're dining alone, with family,
                or celebrating special occasions, you'll experience genuine South Indian hospitality.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Quality Service</h3>
              <p className="text-gray-600">
                Our dedicated team is passionate about South Indian food and committed to providing exceptional
                service. Every guest is treated with the respect and warmth they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Family
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Behind every great South Indian meal is a team that cares deeply about tradition,
            quality, and creating memorable experiences for our guests.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-4xl font-bold">
                👨‍🍳
              </div>
              <h3 className="text-xl font-bold mb-2">Chef Kumar</h3>
              <p className="text-orange-600 font-medium mb-3">Master Chef</p>
              <p className="text-gray-600 text-sm">
                20+ years crafting authentic South Indian dishes with traditional techniques passed down from his Tamil Nadu ancestors.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-4xl font-bold">
                👩‍🍳
              </div>
              <h3 className="text-xl font-bold mb-2">Priya</h3>
              <p className="text-orange-600 font-medium mb-3">Sous Chef</p>
              <p className="text-gray-600 text-sm">
                Specializes in traditional vegetarian curries and ensures every spice blend tells the story of South Indian heritage.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-4xl font-bold">
                💼
              </div>
              <h3 className="text-xl font-bold mb-2">Rajesh</h3>
              <p className="text-orange-600 font-medium mb-3">Restaurant Manager</p>
              <p className="text-gray-600 text-sm">
                Ensures every guest experiences the warmth and hospitality that defines South Indian culture and Manam Canteen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience South Indian Hospitality
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Join us for an authentic South Indian dining experience that celebrates tradition,
            flavor, and the warmth of Tamil Nadu culture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              🍽️ Explore Our Menu
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              📞 Make a Reservation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
