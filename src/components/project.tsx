import { For, type Component } from "solid-js";
import TechBadge from "./techbadge";
import LinkBadge from "./linkbadge";
import NPMBadge from "./npmbadge";
import styles from "../styles/project.module.css";
import type { ProjectType } from "../contents/projects";

const Project: Component<{ project: ProjectType }> = (props) => {
  return (
    <div class={styles.Project}>
      <h3>{props.project.title}</h3>
      {props.project.githubURL && (
        <LinkBadge type="repo" url={props.project.githubURL} />
      )}
      {props.project.demoURL && (
        <LinkBadge type="demo" url={props.project.demoURL} />
      )}
      <For each={props.project.tech} fallback={<></>}>
        {(type) => <TechBadge type={type} />}
      </For>
      {props.project.npm && <NPMBadge name={props.project.npm} />}
      <p>{props.project.content}</p>
    </div>
  );
};

export default Project;
