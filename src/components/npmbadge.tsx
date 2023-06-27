import styles from "../styles/badge.module.css";
import type { Component } from "solid-js";

const NPMBadge: Component<{ name: string }> = (props) => {
  return (
    <span class={styles.Npmbadge}>
      <a href={`https://www.npmjs.com/package/${props.name}`} target="_blank">
        <img
          src={`https://img.shields.io/npm/v/${props.name}?logo=npm&color=CB3837`}
          alt="npm link"
        />
      </a>
    </span>
  );
};

export default NPMBadge;
