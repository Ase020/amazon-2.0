import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  XIcon,
} from "@heroicons/react/outline";

const Header = () => {
  const router = useRouter();
  const [ham, setHam] = useState(false);

  return (
    <header>
      {/* Top navbar */}
      <div className="flex items-center bg-amazon_blue px-1 py-2 flex-grow">
        {/* Logo */}
        <div
          className="mt-2 flex items-center flex-grow sm:flex-grow-0"
          onClick={() => router.push("/")}>
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer "
          />
        </div>

        {/* SearchBar */}
        <div className="bg-yellow-400 hover:bg-yellow-500 hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer">
          <input
            placeholder="Search items"
            type="text"
            className="h-full p-2 w-6 flex-grow flex-shrink rounded-r-none rounded-md focus:outline-none px-4"
          />
          <SearchIcon height={48} className="p-4" />
        </div>

        {/* Right */}
        <div className="flex items-center text-xs space-x-6 mx-6 text-white whitespace-nowrap">
          <div className="link">
            <p>Hello Felix Olali</p>
            <span className="font-extrabold md:text-sm">Account & Lists</span>
          </div>

          <div className="link">
            <p>Returns </p>
            <span className="font-extrabold md:text-sm">& Orders</span>
          </div>

          <div className="relative flex items-center link">
            <span className="absolute top-0 right-0 md:right-10 bg-yellow-400 h-4 w-4 rounded-full  text-center text-gray-800 font-bold">
              4
            </span>
            <ShoppingCartIcon height={40} className="" />
            <span className="hidden md:inline font-extrabold md:text-sm mt-2">
              Cart
            </span>
          </div>
        </div>
      </div>

      {/* Bottom navbar */}
      <div className="flex relative items-center bg-amazon_blue-light space-x-3 p-2 pl-6 text-white text-sm">
        <p
          className="flex lg:hidden items-center link"
          onClick={() => setHam(!ham)}>
          {!ham ? (
            <MenuIcon height={24} className="mr-1" />
          ) : (
            <XIcon height={24} className="mr-1" />
          )}
          All
        </p>

        {/* SearchBar */}
        <div className="bg-yellow-400 hover:bg-yellow-500 sm:hidden flex items-center h-8 rounded-md w-80 cursor-pointer text-gray-500">
          <input
            placeholder="Search items"
            type="text"
            className="h-full p-2 w-6 flex-grow flex-shrink rounded-r-none rounded-md focus:outline-none px-4"
          />
          <SearchIcon height={48} className="p-4" />
        </div>

        {ham && (
          <div className="absolute bg-amazon_blue lg:hidden flex flex-col top-10 left-0 p-8 space-y-4 rounded-b-lg z-10">
            <p className="inline-flex lg:hidden link">Prime Video</p>
            <p className="inline-flex lg:hidden link">Amazon Business</p>
            <p className="inline-flex lg:hidden link">Today's Deals</p>
            <p className="inline-flex lg:hidden link">Electronics</p>
            <p className="inline-flex lg:hidden link">Food & Grocery</p>
            <p className="inline-flex lg:hidden link">Price</p>
            <p className="inline-flex lg:hidden link">Buy Again</p>
            <p className="inline-flex lg:hidden link">Shopper Toolkit</p>
            <p className="inline-flex lg:hidden link">Health & Personal Care</p>
          </div>
        )}
        {!ham && (
          <div className="flex items-center space-x-3 p-2 pl-6 text-white text-sm h-6">
            <p className="hidden md:inline-flex link">Prime Video</p>
            <p className="hidden md:inline-flex link">Amazon Business</p>
            <p className="hidden md:inline-flex link">Today's Deals</p>{" "}
          </div>
        )}
        <p className="hidden lg:inline-flex link">Electronics</p>
        <p className="hidden lg:inline-flex link">Food & Grocery</p>
        <p className="hidden lg:inline-flex link">Price</p>
        <p className="hidden lg:inline-flex link">Buy Again</p>
        <p className="hidden lg:inline-flex link">Shopper Toolkit</p>
        <p className="hidden lg:inline-flex link">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
