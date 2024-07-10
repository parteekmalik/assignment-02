import React from "react";
import BgWidthFull from "../BgWidthFull";
import { Container } from "./Features/Features";
import Link from "next/link";

function Testimonials({
  setisMenuOpen,
}: {
  setisMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const onClick = () => setisMenuOpen(true);
  return (
    <BgWidthFull color="bg-[#F7FDFF]">
      <div className="flex flex-col gap-5 rounded-md border border-mainBorder bg-white p-10  shadow-sm">
        <Container.Title>
          <img src="/Add.svg"></img>
          <span className="text-[1.5rem] font-bold">Add your own</span>
        </Container.Title>
        <Container.P>
          Are you a teacher or expert? Do you sell or rent out equipment, venue
          or event tickets? Or, you know someone who should be on hobbycue? Go
          ahead and Add your Own page
        </Container.P>

        <Container.Button onClick={onClick}>Add new</Container.Button>
      </div>
    </BgWidthFull>
  );
}

export default Testimonials;
