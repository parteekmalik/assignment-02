import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      //   screens: {
      //     mobile: "0px",
      //     tablet: "600px",
      //     laptop: "960px",
      //     desktop: "1280px",
      // },
      colors: {
        mainPurple: "#8064A2",
        mainBorder: "#CED4DA",
      },
    },
  },
  plugins: [],
} satisfies Config;
