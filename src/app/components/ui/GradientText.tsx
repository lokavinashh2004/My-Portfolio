import React from "react";
import { cn } from "@/lib/util";

type GradientTextProps = {
  children: React.ReactNode;
  as: keyof JSX.IntrinsicElements;
  className?: string;
};

const GradientText = ({
  className,
  as = "h3",
  children,
}: GradientTextProps) => {
  const Element = as;

  const classes = cn(
    "bg-gradient-to-r bg-clip-text text-transparent text-4xl font-bold inline-block w-max transition-all duration-200",
    className,
  );

  return <Element className={classes}>{children}</Element>;
};

export default GradientText;
