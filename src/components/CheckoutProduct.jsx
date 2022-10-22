import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

const CheckoutProduct = ({
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

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      rating,
      price,
      description,
      category,
      image,
      hasPrime,
      ratings,
    };

    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />

      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>

        <div className="flex">
          {Array(ratings)
            .fill()
            .map((_, i) => (
              <StarIcon key={i || id} height={20} color={"#FDD835"} />
            ))}
          <span className="text-xs text-gray-500 ml-1">({rating.count})</span>
        </div>

        <span className="my-2 line-clamp-3 text-gray-600 text-xs">
          {description}
        </span>

        <CurrencyFormat
          value={Math.round(price * 119)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"Ksh "}
          className="font-semibold"
        />

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              className="w-12"
              loading="lazy"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <span className="text-xs text-gray-500">
              FREE Next-day Delivery
            </span>
          </div>
        )}
      </div>

      {/* Add/Remove buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={addItemToBasket}>
          Add to Cart
        </button>
        <button className="button" onClick={removeItemFromBasket}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
