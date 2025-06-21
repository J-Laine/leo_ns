import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hieronta Leo Pessi",
  description: "Hierontapalvelut Lappeenrannassa - Leo Pessi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi" className="scroll-smooth">
      <body className={`bg-white text-gray-900 dark:bg-zinc-900 dark:text-zinc-100 ${inter.className}`}>
        <Navbar />
        <main className="min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 py-8 space-y-32">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
