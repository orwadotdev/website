import { AnimatedLink } from "@/components/ui/animated-link";
import { FlippingLink } from "@/components/ui/flipping-link";

import { Pattaya } from "next/font/google";
import Link from "next/link";

const pattaya = Pattaya({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <nav
      className="py-4  fixed  w-full left-0   flex justify-center   z-20 "
      aria-label="Main Navigation"
    >
      <div className="flex items-center justify-center w-fit gap-16 border p-3 border-light/10 backdrop-blur-sm bg-dark/60 rounded-lg">
        <Link
          href={"/"}
          className={`${pattaya.className} text-3xl tracking-tight `}
        >
          orwa.
        </Link>

        <div className="flex items-center gap-4 text-sm">
          <AnimatedLink href="#services">
            <p>Services</p>
          </AnimatedLink>

          <AnimatedLink href="#services">
            <p>About</p>
          </AnimatedLink>

          <AnimatedLink href="#services">
            <p>Work</p>
          </AnimatedLink>

          <AnimatedLink href="#services">
            <p>Blog</p>
          </AnimatedLink>

          <FlippingLink href={"#contact-us"}>Contact Us</FlippingLink>
        </div>
      </div>
    </nav>
  );
}
