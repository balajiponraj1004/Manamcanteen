
import "./../styles/globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: { default: "Manam Canteen", template: "%s | Manam Canteen" },
  description: "South Indian soul food in Mississauga — dosa, biryani, meals & curries. Dine-in, takeout, delivery, catering.",
  openGraph: { type: "website", title: "Manam Canteen", images: ["/manam-logo.png"] },
  twitter: { card: "summary_large_image", title: "Manam Canteen", images: ["/manam-logo.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
