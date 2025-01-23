"use client";

import Aboutus from "@/components/organisms/aboutus";
import Banner from "@/components/organisms/baner";
import Carousel from "@/components/organisms/carousel";
import ContactUs from "@/components/organisms/contactus";
import FeedProduct from "@/components/organisms/feedproduct";
import Footer from "@/components/organisms/footer";
import Navbar from "@/components/organisms/navbar";
import Product from "@/components/organisms/product";

const Page = () => {
  return (
    <div className="relative w-full bg-[#1b3b34] text-white">
      <Navbar />
      <section id="home">
        <Carousel />
      </section>
      <section id="aboutus">
        <Aboutus />
      </section>
      <section id="banner">
        <Banner />
      </section>
      <section id="menu">
        <Product />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <section id="feedproduct">
        <FeedProduct />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Page;
