import Project from "../components/project";
import styles from "../styles/projects.module.css";
import type { ProjectType } from "../contents/projects";
import { type Component, For } from "solid-js";

const Projects: Component<{ title: string; projects: ProjectType[] }> = (
  props
) => {
  return (
    <>
      <h1 class={styles.Title}>{props.title}</h1>
      <hr />
      <div class={styles.Container}>
        <For each={props.projects}>{(p) => <Project project={p} />}</For>
      </div>
    </>
  );
};

export default Projects;
