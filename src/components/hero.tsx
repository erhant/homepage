import { For, type Component } from "solid-js";
import { MAIN_TECH } from "../contents/techbadge";
import styles from "../styles/hero.module.css";
import TechBadge from "./techbadge";

const Hero: Component = () => {
  return (
    <div class={styles.Hero}>
      <img src="/me.webp" alt="avatar" class={styles.Image} />
      <div class={styles.Text}>
        <p>
          I'm a <b>Full-Stack Blockchain Developer</b> from Istanbul, Turkey. I
          build &amp; engineer computer software; driven by a thirst for
          knowledge and with respect to <b>standards</b>, <b>security</b> and{" "}
          <b>scalability</b>.
          <br />
          <br />I main TypeScript most of the time with Express and React, and I
          have occasionally worked with Solidity and Go. As for zero-knowledge
          applications, I make use of the lovely Circom.
        </p>
        <For each={MAIN_TECH}>{(tech) => <TechBadge type={tech} />}</For>
      </div>
    </div>
  );
};

export default Hero;
