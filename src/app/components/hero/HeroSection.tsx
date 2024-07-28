import Navbar from "../navbar/Navbar";
import Showcase from "./Showcase";

const HeroSection = () => {
  return (
    <section className="bg-darkBlue w-full min-h-screen hero">
      <Navbar />
      <Showcase />
    </section>
  );
};

export default HeroSection;
