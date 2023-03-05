import Head from "next/head";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amejid&apos;s Portfolio</title>
      </Head>
      <Header />
      <section id="hero"></section>
    </>
  );
}
