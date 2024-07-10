"use client";
import { LegacyRef, ReactNode, useLayoutEffect, useRef, useState } from "react";
import Arrow from "../svgs/Arrow";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const NavigationList = [
  {
    name: "Explore",
    imgURL: "/Explore.png",
    links: [
      { name: "People - Community", url: "#" },
      { name: "Places - Venues", url: "#" },
      { name: "Programs - Events", url: "#" },
      { name: "Products - Store", url: "#" },
      { name: "Blogs", url: "#" },
    ],
  },
  { name: "Hobbies", imgURL: "/Hobbies.png", links: [{ name: "", url: "" }] },
];

function Navigation() {
  return (
    <>
      {NavigationList.map((list, index) => {
        return (
          <ExpandableNavLink key={index} name={list.name} list={list.links}>
            <img src={list.imgURL} className="mr-2 h-[2rem] w-[2rem]" />
          </ExpandableNavLink>
        );
      })}

      <img src="/bookmark_black_24dp 1.png" className="h-[2rem] w-[2rem]" />
      <img
        src="/notifications_black_24dp 1.png"
        className="h-[2rem] w-[2rem]"
      />
      <img src="/Product 3.png" alt="" className="h-[2rem] w-[2rem]" />
      <button className="w-[fit-content] rounded-xl border border-mainPurple px-4 text-center font-semibold text-mainPurple hover:bg-mainPurple hover:text-white">
        Sign In
      </button>
    </>
  );
}

function ExpandableNavLink({
  children,
  name,
  list,
}: {
  children: ReactNode;
  name: string;
  list: { name: string; url: string }[];
}) {
  const [isOpened, setIsOpened] = useState(false);
  const MainRef = useRef<HTMLDivElement | null>(null);
  const LinksRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (MainRef.current && LinksRef.current) {
      const MainRect = MainRef.current.getBoundingClientRect();
      LinksRef.current.style.top = `${MainRect.height}px`;
      LinksRef.current.style.left = `${0}px`;
    }
  }, [isOpened]);

  return (
    <div className="relative">
      <div
        ref={MainRef}
        className="flex cursor-pointer items-center font-medium"
        onClick={() => setIsOpened((prev) => !prev)}
        onMouseEnter={() => setIsOpened(true)}
        onMouseLeave={() => setIsOpened(false)}
      >
        {children}
        {name}
        <motion.div
          className="flex h-[2rem] w-[2rem] items-center justify-center"
          animate={{ rotate: isOpened ? 0 : -90 }}
          transition={{ duration: 0.15 }}
        >
          <Arrow />
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{ maxHeight: 0, opacity: 0.3 }}
            animate={{ maxHeight: list.length * 50, opacity: 1 }}
            exit={{ maxHeight: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            ref={LinksRef}
            onMouseEnter={() => setIsOpened(true)}
            onMouseLeave={() => setIsOpened(false)}
            className="absolute z-50 flex w-[220px] flex-col items-start overflow-hidden bg-black text-[0.875rem] text-[#6D747A] shadow-sm"
          >
            {list.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="w-full bg-white p-2 pr-10"
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navigation;
