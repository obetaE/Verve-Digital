import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Merriweather } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriWeather = Merriweather({
  subsets: ["latin"],
  weight: [ "300", "400", "700", "900"]
});

export const metadata = {
  title: "Verve Digital",
  description: "Bringing the Best Of Rock to you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${merriWeather.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
