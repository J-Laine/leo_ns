import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Providers } from "../components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hieronta Leo Pessi",
  description: "Hierontapalvelut Lappeenrannassa - Leo Pessi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi" className="scroll-smooth" suppressHydrationWarning>
      <body className={`bg-white text-gray-900 dark:bg-zinc-900 dark:text-zinc-100 ${inter.className}`}>
        <Providers>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
