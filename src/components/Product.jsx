import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";

const Product = ({
  id,
  title,
  rating,
  price,
  description,
  category,
  image,
}) => {
  const [ratings] = useState(Math.round(rating.rate));
  const [hasPrime] = useState(ratings > 3);

  return (
    <div className="relative cursor-pointer flex flex-col bg-white m-5 p-10 z-20 rounded-md shadow-sm">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400 capitalize cursor-pointer">
        {category}
      </p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4 className="my-3">{title}</h4>

      <div className="flex items-center ">
        {Array(ratings)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} height={20} color={"#FDD835"} />
          ))}
        <span className="text-xs text-gray-500 ml-1">({rating.count})</span>
      </div>

      <span className="text-xs my-2 line-clamp-2">{description}</span>

      <div className="mb-5">
        <CurrencyFormat
          value={Math.round(price * 119)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"Ksh "}
        />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <span className="text-xs text-gray-500">FREE Next-day Delivery</span>
        </div>
      )}

      <button className="mt-auto button">Add to Cart</button>
    </div>
  );
};

export default Product;
