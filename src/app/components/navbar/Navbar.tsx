import Container from "../ui/Container";
import DesktopNavMenu from "./DesktopNavMenu";
import MobileNavMenu from "./MobileNavMenu";

const Navbar = () => {
  return (
    <Container as="header">
      <nav className="flex justify-between items-center gap-3 bg-[linear-gradient(45deg,#160522,#141414)] lg:bg-none px-10 md:px-10 py-10 w-full transition-all duration-200">
        <div className="flex items-center gap-8 xl:basis-1/2">
          <h1 className="font-bold text-5xl text-white">V</h1>
          <span className="md:inline-flex hidden bg-red font-medium text-me text-white text-xs hover:text-cyan-300 transition-colors cursor-pointer">
            <a href="mailto:varad2k12@gmail.com"> varad2k12@gmail.com</a>
          </span>
        </div>
        <div className="flex items-center gap-6 lg:gap-0 xl:basis-1/2">
          <DesktopNavMenu />
          <button className="bg-[linear-gradient(to_right,#8750f7_0%,#2a1454_51%,#8750f7_100%)] ml-14 px-5 sm:px-7 py-3 rounded-full font-bold text-sm text-white sm:text-md select-none [background-size:200%] focus:focus-visible:outline-none hover:[background-position:-100%] transition-all duration-500">
            Hire Me!
          </button>
          <MobileNavMenu />
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
