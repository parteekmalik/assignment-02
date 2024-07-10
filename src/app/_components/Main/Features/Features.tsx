import { MouseEventHandler, ReactNode } from "react";
import { PageWidthMain } from "../../BgWidthFull";
import Groups_black_24dp from "../../svgs/groups_black_24dp";
import Location_on_black_24d from "../../svgs/location_on_black_24dp";
import Program from "../../svgs/Program";
import Shopping_basket_black_24d from "../../svgs/shopping_basket_black_24dp";
import Link from "next/link";

export const FeaturesData = [
  {
    name: "People",
    logoColor: "border-mainPurple hover:bg-mainPurple",
    logo: (
      <Groups_black_24dp className=" text-mainPurple group-hover:text-white " />
    ),

    link: "#",
    discription:
      "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.",
  },
  {
    name: "Product",
    logoColor: "border-[#C0504D] hover:bg-[#C0504D]",
    logo: (
      <Shopping_basket_black_24d className=" text-[#C0504D] group-hover:text-white " />
    ),
    link: "#",
    discription:
      "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.",
  },
  {
    name: "Place",
    logoColor: "border-[#77933C] hover:bg-[#77933C]",
    logo: (
      <Location_on_black_24d className=" text-[#77933C] group-hover:text-white " />
    ),
    link: "#",
    discription:
      "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.",
  },
  {
    name: "Program",
    logoColor: "border-[#0096C8] hover:bg-[#0096C8]",
    logo: <Program className="text-[#0096C8] group-hover:text-white " />,
    link: "#",
    discription:
      "Find events, meetups and workshops related to your hobby. Register or buy tickets online.",
  },
];
function Features() {
  return (
    <div className={`${PageWidthMain} py-[3rem]`}>
      <div className="flex flex-wrap gap-4 ">
        {FeaturesData.map((item) => {
          return (
            <Container
              className="rounded-sm border border-mainBorder"
              key={item.name}
            >
              <Container.Title>
                {item.logo}

                <span className="text-xl font-bold">{item.name}</span>
              </Container.Title>
              <Container.P className="text-center lg:text-left">{item.discription}</Container.P>
              <Link href={item.link}>
                <Container.Button>Connect</Container.Button>
              </Link>
            </Container>
          );
        })}
      </div>
    </div>
  );
}

export default Features;

function Container({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div
      className={` min-w-0 flex-shrink grow   lg:basis-[49%] `}
      onClick={onClick}
    >
      <div
        className={` flex flex-col gap-3  h-full  bg-white  p-4 shadow-md ${className} `}
      >
        {children}
      </div>
    </div>
  );
}

Container.Button = function Button({
  children,
  type = 1,
  onClick,
}: {
  children: ReactNode;
  type?: 1 | 2;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className={
        "mr-auto rounded-lg border border-mainPurple  px-4 py-2  shadow-md " +
        (type === 1
          ? "bg-white text-mainPurple hover:bg-mainPurple hover:text-white"
          : " bg-mainPurple text-white hover:bg-white hover:text-mainPurple")
      }
    >
      {children}
    </button>
  );
};
Container.P = function P({
  children,
  className,
  text = "text-[1.125rem]",
}: {
  text?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={" min-w-0 text-wrap  font-light " + text + " " + className}>
      {children}
    </p>
  );
};
Container.Title = function Title({ children }: { children: ReactNode }) {
  return <div className="flex items-center  gap-2">{children}</div>;
};
export { Container };
