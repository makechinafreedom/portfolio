import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="pt-10">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="stylesheet" href="/fonts/fonts.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed -right-20 -top-20" style={{ zIndex: -1 }}>
        <Image src="/images/flare.svg" height={800} width={800} />
      </div>
      <Header />
      <Hero />
      <main></main>

      <footer></footer>
    </div>
  );
}
