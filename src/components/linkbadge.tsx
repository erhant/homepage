import styles from "../styles/badge.module.css";
import type { Component } from "solid-js";

const LinkBadge: Component<{ url: string; type: string }> = (props) => {
  const logo = {
    demo: "byte",
    repo: "github",
    paper: "googlescholar",
  }[props.type];
  const label = {
    demo: "demo",
    repo: "repo",
    paper: "paper",
  }[props.type];
  const labelColor = {
    demo: "green",
    repo: "gray",
    paper: "blue",
  }[props.type];
  return (
    <span class={styles.Linkbadge}>
      <a href={props.url} target="_blank">
        <img
          src={`https://img.shields.io/badge/-${label}-gray?logo=${logo}&logoColor=white&color=${labelColor}`}
          alt="repo link"
        />
      </a>
    </span>
  );
};

export default LinkBadge;
