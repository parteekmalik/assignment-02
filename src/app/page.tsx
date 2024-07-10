"use client";

import React, { useState } from "react";
import Home from "./_components/Main/Home";
import Features from "./_components/Main/Features/Features";
import Testimonials from "./_components/Main/Testimonials";
import Quotes from "./_components/Main/Quotes";
import End from "./_components/Main/End";
import Header from "./_components/header/Header";
import Footer from "./_components/Footer";
import AddListing from "./_components/AddListing";

function MainContent() {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  return (
    <main
      className={` flex  min-h-screen flex-col items-center justify-center px-[3rem] pt-[0.5rem] 2xl:px-[0]  `}
    >
      <Header isMenuOpen={isMenuOpen} />

      <main className={`relative w-full ${isMenuOpen ? "hidden" : " "} `}>
        <Home />
        <Features />
        <Testimonials setisMenuOpen={setisMenuOpen} />
        <Quotes />
        <End />
      </main>
      {isMenuOpen ? <AddListing setisMenuOpen={setisMenuOpen} /> : <Footer />}
    </main>
  );
}

export default MainContent;
