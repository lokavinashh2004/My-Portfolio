import Container from "../ui/Container";
import DesktopNavMenu from "./DesktopNavMenu";
import MobileNavMenu from "./MobileNavMenu";

const Navbar = () => {
  return (
    <Container as="header" className="">
      <nav className="flex w-full items-center justify-between gap-3 bg-none px-8 py-10 transition-all duration-200 md:px-10">
        <div className="flex items-center gap-8 xl:basis-1/2">
          <h1
            className="cursor-pointer select-none text-3xl font-extrabold text-white bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent hover:from-purple-400 hover:via-cyan-500 hover:to-purple-400 transition-all duration-500"
          >
            Lok Avinashh . T
          </h1>
        </div>
        <div className="flex items-center justify-end gap-6 lg:gap-0 xl:basis-1/2">
          <DesktopNavMenu />
          <a
            href="mailto:lokavinashh2004@gmail.com"
            className="ml-14 select-none rounded-full bg-[linear-gradient(to_right,#8750f7_0%,#2a1454_51%,#8750f7_100%)] px-3 py-2.5 text-[10px] font-bold text-white transition-all duration-500 [background-size:200%] hover:[background-position:-100%] focus:focus-visible:outline-none sm:px-7 sm:text-sm"
          >
            Contact Me!
          </a>
          <MobileNavMenu />
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
