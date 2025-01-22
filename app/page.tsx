"use client";

import Aboutus from "@/components/organisms/aboutus";
import Banner from "@/components/organisms/baner";
import Carousel from "@/components/organisms/carousel";
import FeedProduct from "@/components/organisms/feedproduct";
import Navbar from "@/components/organisms/navbar";
import Product from "@/components/organisms/product";

const Page = () => {
  return (
    <div className="relative w-full h-screen bg-black text-white">
      <Navbar />
      <Carousel />
      <Aboutus />
      <Banner />
      <Product />
      <FeedProduct />
    </div>
  );
};

export default Page;
