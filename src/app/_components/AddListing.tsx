"use client";
import React from "react";
import BgWidthFull from "./BgWidthFull";
import { Container, FeaturesData } from "./Main/Features/Features";

function AddListing({
  setisMenuOpen,
}: {
  setisMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const onClick = () => setisMenuOpen(false);
  return (
    <div className="  flex h-full w-full grow items-center justify-center bg-[#F7F5F9]">
      <div className="min-w-0 max-w-[840px] bg-white p-5">
        <div className="flex items-center justify-center gap-5">
          <img src="/Add.svg" />
          <span className="text-bold text-[1.5rem]">Add Your Listing</span>
        </div>
        <div className="flex flex-wrap gap-4">
          {FeaturesData.map((item) => {
            return (
              <Container
                onClick={onClick}
                className={`group rounded-lg border-2  hover:text-white ${item.logoColor}`}
                key={item.name}
              >
                <Container.Title>
                  {item.logo}

                  <span className="text-xl font-bold">{item.name}</span>
                </Container.Title>
                <Container.P text="text-[0.875rem]">{item.discription}</Container.P>
              </Container>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AddListing;
