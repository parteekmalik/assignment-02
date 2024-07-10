import { animate } from "framer-motion";
import { useEffect } from "react";
import { PageWidthMain } from "../BgWidthFull";
import { Container } from "./Features/Features";

const End = () => {
  const scrollToTop = async () => {
    if (typeof window !== "undefined") {
      await animate(window.scrollY, 0, {
        duration: 1,
        onUpdate: (latest) => window.scrollTo(0, latest),
      });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleKeydown = (event: KeyboardEvent) => {
        if (event.ctrlKey && event.key === "Home") {
          scrollToTop().catch((err) => console.log(err));
        }
      };

      window.addEventListener("keydown", handleKeydown);

      return () => {
        window.removeEventListener("keydown", handleKeydown);
      };
    }
  }, []);

  return (
    <div className={`${PageWidthMain} flex flex-col gap-5`}>
      <p className="text-[2rem] font-semibold italic">
        Your <span className="text-mainPurple">Hobby,</span> Your{" "}
        <span className="text-sky-400">Community...</span>
      </p>
      <Container.Button type={2}>Get Started</Container.Button>
      <p className="m-2 ml-auto shrink border-mainBorder bg-white px-4 py-1 text-mainPurple">
        Go to Top (ctrl + home)
      </p>
      <img
        className="fixed bottom-10 right-10 z-50 rounded-full border border-mainBorder bg-white p-5 shadow-lg hover:cursor-pointer"
        src="/arrow_forward_ios_black_24dp 1.svg"
        onClick={scrollToTop}
        alt="Scroll to top"
      />
      <img src="/Group 99.svg" alt="Group graphic" />
    </div>
  );
};

export default End;
