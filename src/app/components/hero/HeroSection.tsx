import Navbar from "../navbar/Navbar";
import Showcase from "./Showcase";

const HeroSection = () => {
  return (
    <section className="bg-darkBlue w-full hero">
      <Navbar />
      <Showcase />
    </section>
  );
};

export default HeroSection;
