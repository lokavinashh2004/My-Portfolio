import Image from "next/image";
import Container from "../ui/Container";
import GradientText from "../ui/GradientText";

import HeroImage from "../../../../public/Gemini_Generated_Image_qnbnmfqnbnmfqnbn.png";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const SocialIcons = () => {
  const links = [
    {
      icon: FaLinkedin,
      link: "https://linkedin.com/in/lokavinashh",
      label: "Go to T.Lok Avinashh's LinkedIn Profile"
    },
    {
      icon: FaGithub,
      link: "https://github.com/lokavinashh2004",
      label: "Go to T.Lok Avinashh's GitHub Profile"
    },
  ];

  return (
    <div className="flex gap-5">
      {links?.map((Item, i) => (
        <a
          key={i}
          href={Item.link}
          aria-label={Item.label}
          className="relative before:absolute before:inset-0 border-[#aa82faa6] before:bg-cyan-500 p-4 border rounded-full before:rounded-full before:w-full before:h-full before:duration-300 group before:scale-0 before:transition-all hover:before:scale-100"
          target="_blank"
        >
          <Item.icon className="group-hover:text-white relative w-5 h-5 text-cyan-200" />
        </a>
      ))}
    </div>
  );
};

const Showcase = () => {
  return (
    <Container
      as="div"
      className="flex lg:flex-row flex-col lg:items-center gap-8 px-6 lg:px-10 py-10 pb-[8rem] w-full select-none sm:select-auto"
    >
      <div className="flex flex-col gap-4 w-full lg:w-1/2 hero-text">
        <div className="flex flex-col gap-2">
          <h2 className="w-full font-extrabold text-3xl sm:text-4xl text-white bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent hover:from-purple-400 hover:via-cyan-500 hover:to-purple-400 transition-all duration-500">
            Hi I'm a
          </h2>
        </div>

        <GradientText
          className="bg-gradient-to-r from-[#8750f7_0%] to-[#ffffff_100%] w-full text-3xl sm:text-5xl md:text-6xl md:[line-height:1.2]"
          as="h1"
        >
          AI & Data Science Student
        </GradientText>
        <div className="inline-flex lg:hidden mx-auto my-8 max-w-[max(250px,60vw)] max-h-[600px] hero-image">
          <Image
            src={HeroImage}
            alt="T.Lok Avinashh's avatar, an AI & Data Science Student"
            className="relative z-10 border-[#1e3773bf] border-2 hover:border-blue-600 border-opacity-75 hover:border-opacity-100 rounded-[20px] w-full transition-all duration-200 select-none hero-avatar rotate-[4deg] hover:rotate-[2deg] hover:scale-95"
            priority
          />
        </div>
        <p className="font-medium text-[#d2cdd5] sm:text-lg transition-all duration-200 text">
          Innovative AI & Data Science student passionate about machine learning, 
          deep learning, and building AI-driven applications. Creating accessible 
          educational tools and solving real-world problems with cutting-edge technology.
        </p>
        <div className="flex sm:flex-row flex-col items-center gap-6 my-4">
          <a
            href="/projects/T_Lok_Avinashh_resume (4).pdf"
            download="T_Lok_Avinashh_Resume.pdf"
            className="border-[#aa82faa6] hover:bg-purple-600 px-5 sm:px-7 py-4 border rounded-full font-medium text-sm text-white transition-all duration-200"
          >
            Download Resume
          </a>
          <SocialIcons />
        </div>
      </div>

      <div className="flex justify-end w-full lg:w-1/2">
        <div className="lg:inline-flex hidden w-[80%] max-h-[500px] hero-image">
          <Image
            src={HeroImage}
            alt="T.Lok Avinashh's avatar, an AI & Data Science Student"
            height={300}
            width={300}
            className="relative z-10 border-[#1e3773bf] border-2 hover:border-blue-600 border-opacity-75 hover:border-opacity-100 rounded-[32px] w-full transition-all duration-200 select-none hero-avatar rotate-[7deg] hover:rotate-[2deg] hover:scale-95"
            priority
          />
        </div>
      </div>
    </Container>
  );
};

export default Showcase;
