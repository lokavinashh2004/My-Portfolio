import React from "react";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import SkillList from "./SkillList";

const meta = {
  title: "Skills",
  subtitle:
    "Some of the tools I play with, Flexible to learn anything new though :)",
};

const SkillSection = () => {
  return (
    <section id="skills" className="bg-[rgb(11_6_14)]">
      <Container
        as="div"
        className="after:block relative before:top-1/4 after:top-2/4 after:right-0 before:left-0 before:absolute after:absolute flex flex-col items-center gap-16 px-6 lg:px-10 py-20 w-full before:w-2/4 after:w-2/4 before:h-3/4 after:h-1/4 before:-translate-y-1/4 after:translate-y-1/2 skills"
      >
        <SectionHeader meta={meta} />

        <SkillList />
      </Container>
    </section>
  );
};

export default SkillSection;
