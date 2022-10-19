import Head from "next/head";
import { Banner, Footer, Header, ProductFeed } from "../components";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0 by aseDesign</title>
        <link rel="icon" href="/amazon.ico" />
      </Head>

      {/* Header */}
      <Header />

      <main className="max-w-screen-xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* ProductFeed */}
        <ProductFeed products={products} />
      </main>

      <footer className="w-screen">
        <Footer />
      </footer>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
};
