import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rimay Relee",
  description: "Enseñanzas de Dios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`}>
        <Header />
        
        {/* Aquí irá el contenido central (el buscador y los módulos) */}
        <main className="flex-grow flex flex-col items-center w-full">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}