import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Head from "next/head"; // Import Head for meta tags

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Avadhesh",
  description: "Avadhesh by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Meta viewport tag for responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Title and description */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Favicon link */}
        <link rel="icon" href="/image_1.png" />
      </Head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
