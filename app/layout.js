import { Inter } from "next/font/google";
import "./globals.css";
import Menubar from "@/components/Landing Page 1/Menubar/Menubar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bike Bazaar - Buy and Sell Bikes Online",
  description:
    "Discover the best deals on new and used bikes. Buy or sell your bike with ease at Bike Bazaar. Find your perfect ride today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menubar />
        {children}
      </body>
    </html>
  );
}
