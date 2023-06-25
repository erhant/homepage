import type { JSXElement } from "solid-js";
import type { TECH_BADGE_PARAMS } from "../contents/techbadge";

type PublicationType = {
  githubURL: string;
  paperURL: string;
  tech: (keyof typeof TECH_BADGE_PARAMS)[];
  content: JSXElement;
};

export default PublicationType;
