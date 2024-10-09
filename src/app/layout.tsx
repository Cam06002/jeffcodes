import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Jeff Codes",
  description: "Portfolio for Jeff Campbell",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen w-screen">
        <Header />
        <main className='flex flex-row flex-grow m-2 max-w-full max-h-full rounded overflow-auto [&::-webkit-scrollbar]:[width:10px]
            [&::-webkit-scrollbar-thumb]:bg-sky-300
            overflow-scroll"'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
