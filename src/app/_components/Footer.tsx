"use client";

import Link from "next/link";
import SearchBar from "./header/SearchBar";
import BgWidthFull, { PageWidthMain } from "./BgWidthFull";

const fotterLinks = [
  [
    { name: "Hobbycue", link: "#" },
    { name: "About us", link: "#" },
    { name: "Our Services", link: "#" },
    { name: "Our Services", link: "#" },
    { name: "Our Services", link: "#" },
    { name: "Our Services", link: "#" },
  ],
  [
    { name: "How Do i", link: "#" },
    { name: "About us", link: "#" },
    { name: "Our Services", link: "#" },
    { name: "Our Services", link: "#" },
    { name: "Our Services", link: "#" },
    { name: "Our Services", link: "#" },
    { name: "Our Services", link: "#" },
  ],
  [
    { name: "Quick Links", link: "#" },
    { name: "About us", link: "#" },
    { name: "Our Services", link: "#" },
    { name: "Our Services", link: "#" },
    { name: "Our Services", link: "#" },
  ],
];
const fotterSocialLink = [
  { imgURL: "/social/104498_facebook_icon 1.svg", link: "#" },
  { imgURL: "/social/843777_google_google+_plus_icon 1.svg", link: "#" },
  { imgURL: "/social/1564504_email_letter_mail_message_icon 1.svg", link: "#" },
  { imgURL: "/social/4375108_logo_telegram_icon 1.svg", link: "#" },
  { imgURL: "/social/4375133_logo_youtube_icon 1.svg", link: "#" },
  {
    imgURL:
      "/social/5279116_pin_pinterest_inspiration_pinterest logo_icon 1.svg",
    link: "#",
  },
  {
    imgURL: "/social/5296514_bird_tweet_twitter_twitter logo_icon 3.svg",
    link: "#",
  },
  {
    imgURL:
      "/social/5335781_camera_instagram_social media_instagram logo_icon 1.svg",
    link: "#",
  },
];
function Footer() {
  return (
    <footer className="w-full">
      <div
        className={`${PageWidthMain} flex w-full flex-col gap-5 p-10  lg:flex-row lg:justify-between `}
      >
        {fotterLinks.map((list, _) => {
          return (
            <div className="flex flex-col " key={_}>
              {list.map((item, i) => {
                return (
                  <Link href={item.link} key={item.link + _ + i}>
                    <span
                      className={
                        i === 0 ? " mb-3 text-[1.125rem] font-semibold " : ""
                      }
                    >
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          );
        })}

        <div className="flex flex-col gap-5">
          <div className="">
            <div className="mb-3 text-[1.125rem] font-semibold">
              Social Media
            </div>
            <div className="flex gap-5">
              {fotterSocialLink.map((item) => {
                return (
                  <div
                    className=" inline-block rounded-full bg-mainBorder p-1"
                    key={item.imgURL}
                  >
                    <Link href={item.link}>
                      <img src={item.imgURL} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="mb-3 text-[1.125rem] font-semibold">
              Social Media
            </div>
            <SearchBar className="  max-w-[fit-content] rounded-xl border-2 border-mainPurple ">
              Invite
            </SearchBar>
          </div>
        </div>
      </div>
      <BgWidthFull color=" bg-mainBorder " className="my-0">
        <div className=" flex w-full items-center justify-center ">
          <span>© Purple Cues Private Limited</span>
        </div>
      </BgWidthFull>
    </footer>
  );
}

export default Footer;
