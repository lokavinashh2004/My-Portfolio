import React from "react";
import GradientText from "../ui/GradientText";
import Container from "../ui/Container";
import ExperienceTree from "./ExperienceTree";
import data from "./data";

const meta = {
    title:"My Experience",
    subtitle: "Delivering Results: A Tech Professional's Journey"
}

const ExperienceSection = () => {
  return (
    <section className="after:block relative before:top-1/4 after:top-2/4 after:right-0 before:left-0 before:absolute after:absolute bg-darkBlue w-full before:w-1/2 after:w-2/4 before:h-3/4 after:h-1/4 min-h-screen before:-translate-y-1/4 after:translate-y-1/2 experience">
      <Container
        as="div"
        className="flex flex-col items-center gap-16 px-6 lg:px-10 py-20 w-full"
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <GradientText
            as="h4"
            className="bg-gradient-to-r from-[#8750f7_0%] to-[#ffffff_100%] mx-auto font-bold text-2xl sm:text-2xl md:text-4xl md:[line-height:1.2]"
          >
            {meta.title}
          </GradientText>
          <p className="text-white">{meta.subtitle}</p>
        </div>
        

        <ExperienceTree data={data} />
      </Container>
    </section>
  );
};

export default ExperienceSection;
