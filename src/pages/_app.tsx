// src/pages/_app.tsx
import type { AppProps } from "next/app";
import Head from "next/head";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import "@/app/globals.css"; // reusing css from app router; may change later

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Luna Tours - Discover Japan</title>
        <meta
          name="description"
          content="Discover breathtaking destinations in Japan with Luna Tours."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
