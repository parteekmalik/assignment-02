"use client";
import { useState } from "react";
import BgWidthFull from "../BgWidthFull";
import SignIn_Joinin from "../SignIn_Joinin/SignIn_Joinin";
import Search from "../svgs/search";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";

function Header({ isMenuOpen }: { isMenuOpen: boolean }) {
  const [isOpen, setisOpen] = useState(false);

  return (
    <BgWidthFull color=" bg-white " margin=" ">
      <header
        className={`  ${isOpen ? "fixed left-0 top-0 z-50 h-screen w-screen flex-col p-10 " : "   w-full   items-center  justify-between p-0 md:p-2 "} flex  bg-white  text-2xl  text-[0.875rem] `}
      >
        <div className="flex w-full justify-between gap-5">
          {isOpen || isMenuOpen ? (
            <img
              className="h-[2rem] md:h-[3.75rem] "
              src={"/HobbyCue Logo v2 2.png"}
              alt="company logo"
            />
          ) : (
            <img
              className="h-[2rem] md:h-[3.75rem] "
              src={"/2024-06-30 14-07-13.png"}
              alt="company logo"
            />
          )}
          <div
            className={`flex ${isMenuOpen ? "grow justify-end" : ""} items-center  gap-5`}
          >
            {!isOpen && (
              <>
                <SearchBar
                  ishide={true}
                  className={`${isMenuOpen ? "md:mr-auto" : ""} rounded-lg  `}
                >
                  <Search className="h-[1.25rem] w-[1.25rem]  xl:h-[1rem] xl:w-[1rem]" />
                </SearchBar>
                <div className="  hidden items-center gap-3 lg:flex lg:gap-5">
                  <Navigation />
                </div>
                <img
                  src="/notifications_black_24dp 1.png"
                  className=" h-[2rem] w-[2rem] items-center lg:hidden"
                />
              </>
            )}
            <button className=" h-[2rem] w-[2rem] items-center lg:hidden">
              {isOpen ? (
                <img
                  src="/close_black_24dp (2) 1.svg"
                  className="h-[2rem] w-[2rem] hover:cursor-pointer"
                  onClick={() => setisOpen(false)}
                ></img>
              ) : (
                <img
                  src="/menu_black_24dp 1.svg"
                  className="h-[2rem] w-[2rem] hover:cursor-pointer"
                  onClick={() => setisOpen(true)}
                ></img>
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="grow bg-white">
            <SignIn_Joinin
              primaryColor=" bg-white "
              secandryColor=" bg-[#F7F5F9] "
            />
          </div>
        )}
      </header>
    </BgWidthFull>
  );
}

export default Header;
