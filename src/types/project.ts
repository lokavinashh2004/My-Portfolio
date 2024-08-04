import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";

export interface Project {
    id: string;
    category: string;
    name: string;
    description: string;
    points: string[];
    tags: string[];
    link?: string;
    repo: string;
    image: StaticImport |string;
  }