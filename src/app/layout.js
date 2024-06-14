import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });
const sansation = localFont({
  src: [
    {
      path: "fonts/Sansation_Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Sansation_Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "fonts/Sansation_Light.ttf",
      weight: "200",
      style: "light",
    },
  ],
});

export const metadata = {
  title: "Mindslate",
  description: "CRAFTING PURPOSEFUL APPS FOR TOMORROW’S NEEDS",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={sansation.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
