import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Jeff Codes",
  description: "Jeff Campbell - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className="flex flex-col h-screen w-screen bg-black">
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
