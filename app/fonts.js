import { Oswald, Urbanist } from "next/font/google";

export const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});
export const urbanist = Urbanist({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
