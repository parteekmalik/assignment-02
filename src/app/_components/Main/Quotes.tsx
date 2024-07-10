import React from "react";
import { Container } from "./Features/Features";
import BgWidthFull from "../BgWidthFull";

function Quotes() {
  return (
    <BgWidthFull
      color=" "
      className=" flex flex-col gap-8 bg-[#F7F5F9]  p-10  "
    >
      <Container.Title>
        <img src="/quote.svg" alt="" />
        <span className="text-[1.5rem] font-bold">Testimonals</span>
      </Container.Title>
      <Container.P className="font-light text-center lg:text-left">
        In a fast growing and ever changing city like Bangalore, it sometimes
        becomes very difficult to find or connect with like minded people.
        Websites like hobbycue.com is a great service which helps me get in
        touch with, communicate, connect, and exchange ideas with other dancers.
        It also provides the extra benefit of finding products and services that
        I can avail, which I can be assured is going to be of great quality as
        it comes recommended by people of the hobbycue community. To have
        discussions, to get visibility, and to be able to safely explore various
        hobbies and activities in my city, all under one roof, is an excellent
        idea and I highly recommend it.
      </Container.P>
      <div className="flex flex-col justify-between xl:flex-row">
        <img src="/Audio Track.svg"></img>
        <div className="order-first flex items-center justify-center gap-5 px-5 xl:order-last">
          <img src="/Ellipse 12.png" alt="" />
          <div className="flex flex-col  justify-center text-[0.875rem]">
            <span className="text-[1.125rem] font-bold text-mainPurple">
              Shubha Nagarajan
            </span>
            <span className=" text-[#0096C8]">Classical Dancer</span>
          </div>
        </div>
      </div>
    </BgWidthFull>
  );
}

export default Quotes;
