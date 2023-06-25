import { For, type Component } from "solid-js";
import { MAIN_TECH } from "../contents/techbadge";
import styles from "../styles/hero.module.css";
import TechBadge from "./techbadge";

const Hero: Component = () => {
  return (
    <div>
      <img src="/src/assets/me.webp" alt="avatar" class={styles.Image} />
      <p class={styles.Text}>
        I'm a Full-stack Blockchain Developer from Istanbul, Turkey. I build
        &amp; engineer computer software; driven by a thirst for knowledge and
        with respect to style, standards, security and scalability.
      </p>

      <h1>Tech Stack</h1>
      <p>
        I'm maining the TypeScript hero most of the time with Express and React,
        and I have occasionally worked with Solidity and Go. As for
        zero-knowledge applications, I make use of the lovely Circom.
      </p>
      <For each={MAIN_TECH}>{(tech) => <TechBadge type={tech} />}</For>
    </div>
  );
};

export default Hero;
