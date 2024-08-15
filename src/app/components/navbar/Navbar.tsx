import Container from "../ui/Container";
import DesktopNavMenu from "./DesktopNavMenu";
import MobileNavMenu from "./MobileNavMenu";

const Navbar = () => {
  return (
    <Container as="header" className="">
      <nav className="flex w-full items-center justify-between gap-3 bg-none px-8 py-10 transition-all duration-200 md:px-10">
        <div className="flex items-center gap-8 xl:basis-1/2">
          <h1
            className="cursor-pointer select-none text-5xl font-bold text-white"
          >
            V
          </h1>

          <span className="bg-red text-me hidden cursor-pointer text-xs font-medium text-white transition-colors hover:text-cyan-300 md:inline-flex">
            <a href="mailto:varad2k12@gmail.com"> varad2k12@gmail.com</a>
          </span>
        </div>
        <div className="flex items-center justify-end gap-6 lg:gap-0 xl:basis-1/2">
          <DesktopNavMenu />
          <a
            href="mailto:varad2k12@gmail.com"
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
