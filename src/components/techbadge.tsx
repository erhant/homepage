import styles from "../styles/badge.module.css";
import { Component } from "solid-js";
import { TECH_BADGE_PARAMS } from "../contents/techbadge";

const BASE_URL = "https://img.shields.io/badge/";

const TechBadge: Component<{ type: keyof typeof TECH_BADGE_PARAMS }> = (
  props
) => {
  const { p, alt } = TECH_BADGE_PARAMS[props.type];
  return (
    <span class={styles.Techbadge}>
      <img src={BASE_URL + p} alt={alt} />
    </span>
  );
};

export default TechBadge;
