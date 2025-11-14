import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/*Logo*/}
        <Link href="/">
          {/* Desktop */}
          <h1 className=" text-2xl font-semibold">
            nusantara digital <span className="text-accent">integrator</span>
          </h1>
          {/* Mobile */}
          {/* <h1 className="xl:hidden text-2xl font-semibold">
            ndi<span className="text-accent">.</span>
          </h1> */}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Join Us!</Button>
          </Link>
        </div>

        {/* Mobile Navigation Placeholder */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
