import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Header } from "./components/header";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Landing",
  description: "Apenas testando",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
