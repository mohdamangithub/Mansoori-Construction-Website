import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true" className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <footer className="w-full bg-yellow-700 text-white py-6 mt-12">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
            <span className=" footer font-semibold leading-none ">
              M/S - Mansoori Construction Babina © Pvt Ltd.
              <br />
              <span className="address text-xs">ADDRESS: Near Siddhi Vinayak Marriage Hall, Babina, 284401</span>
              <br />
              <span className="text-xs">PHONE: +919651165982</span>
            </span>
            <span className="text-sm">Created by Mohammad Aman</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
