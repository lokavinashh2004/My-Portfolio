const NAVLINKS = ["Projects", "Experience", "Skills", "Contact"];

const DesktopNavMenu = () => (
  <ul className="lg:flex items-center gap-12 hidden">
    {NAVLINKS.map((link) => (
      <li
        key={link}
        className="after:block after:bg-[linear-gradient(260deg,#2a1454_0%,#8750f7_100%)] after:rounded-lg after:w-full after:h-0.5 font-medium text-sm text-white hover:text-cyan-200 after:[transform-origin:left] after:transition-all after:duration-500 cursor-pointer select-none after after:scale-x-0 hover:after:scale-x-100 transition-colors"
      >
        {link}
      </li>
    ))}
  </ul>
);

export default DesktopNavMenu;
