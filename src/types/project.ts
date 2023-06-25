import type { JSXElement } from "solid-js";
import type { TECH_BADGE_PARAMS } from "../contents/techbadge";

type ProjectType = {
  title: string;
  githubURL?: string;
  demoURL?: string;
  npm?: string;
  tech: (keyof typeof TECH_BADGE_PARAMS)[];
  content: JSXElement;
};

export default ProjectType;
