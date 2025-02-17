import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Home/Navbar";
import Introduce from "@/Home/Introduce";
import KeyFeatures from "@/Home/KeyFeatures";
import LetsWork from "@/Home/LetsWork";




export const metadata: Metadata = {
  title: "HolisticMatch",
  description: "Perfect match by marraige experts!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
      <Introduce/>
      <KeyFeatures/>
      <LetsWork/>
        {children}
        
      </body>
    </html>
  );
}
