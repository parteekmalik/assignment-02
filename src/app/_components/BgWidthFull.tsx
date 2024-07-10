import { ReactNode } from "react";
export const PageWidthMain = " w-full max-w-[1440px] mx-auto   ";

function BgWidthFull({
  children,
  color = " bg-[#F7F5F9] ",
  className = " ",
  margin = "my-10",
}: {
  margin?: string;
  color?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={` flex w-full  justify-center ${color} `}>
      <div className={` ${PageWidthMain} ${className} ${margin}`}>{children}</div>
    </div>
  );
}

export default BgWidthFull;
