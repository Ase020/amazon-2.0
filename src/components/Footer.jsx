import React from "react";
import BackToTop from "react-back-to-top-button";
import { ArrowCircleUpIcon } from "@heroicons/react/solid";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <BackToTop
        showOnScrollUp
        showAt={100}
        speed={2000}
        easing="easeOutSine"
        style={{ zIndex: 30 }}>
        <ArrowCircleUpIcon z={50} style={{ color: "#FDD835" }} height={60} />
      </BackToTop>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-amazon_blue-light text-white">
        <div className="space-y-4 text-xs text-white">
          <h5 className="font-bold uppercase">Get to know us</h5>

          <p>Careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Investor Relations</p>
          <p>Amazon Devices</p>
          <p>Amazon Science</p>
        </div>

        <div className="space-y-4 text-xs text-white">
          <h5 className="font-bold uppercase">make money with us</h5>

          <p>Sell products on Amazon</p>
          <p>Sell on Amazon Business</p>
          <p>Sell apps on Amazon</p>
          <p>Become an Affiliate</p>
          <p>Advertise Your Products</p>
          <p>Self-Publish with Us</p>
          <p>Host an Amazon Hub</p>
          <p>›See More Make Money with Us</p>
        </div>

        <div className="space-y-4 text-xs text-white">
          <h5 className="font-bold uppercase">Amazon Payment Products</h5>

          <p> Amazon Business Card</p>
          <p>Shop with Points</p>
          <p>Reload Your Balance</p>
          <p>Amazon Currency Converter</p>
        </div>

        <div className="space-y-4 text-xs text-white">
          <h5 className="font-bold uppercase">Let Us Help You</h5>

          <p>Amazon and COVID-19</p>
          <p>Your Account</p>
          <p>Your Orders</p>
          <p>Shipping Rates & Policies</p>
          <p>Returns & Replacements</p>
          <p>Manage Your Content and Devices</p>
          <p>Amazon Assistant</p>
          <p>Help</p>
        </div>
      </div>

      <span className="text-center bg-amazon_blue-light text-white text-md font-thin">
        Made with ❤ aseDesign ©2022
      </span>
    </div>
  );
};

export default Footer;
