import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { Header, Footer, CheckoutProduct } from "../components";
import { selectItems, selectTotal } from "../slices/basketSlice";

const Checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Check-out by aseDesign </title>
        <link rel="icon" href="/amazon.ico" />
      </Head>

      <Header />

      <main className="lg:flex max-w-screen-xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-2xl border-b pb-4">
              {items.length === 0
                ? "Your Shopping Basket is Empty"
                : "Shopping Basket"}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct
                key={item.i}
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
              />
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length}) items:{" "}
                <span>
                  <CurrencyFormat
                    value={Math.round(total * 119)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"Ksh "}
                    className="font-bold"
                  />
                </span>
              </h2>

              <button
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
                disabled={!session}>
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
