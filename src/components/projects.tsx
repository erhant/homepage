import Project from "../components/project";
import {
  activeProjects,
  schoolProjects,
  sideProjects,
  thesisProjects,
} from "../contents/projects";
import styles from "../styles/projects.module.css";
import { type Component, For } from "solid-js";

const Projects: Component = () => {
  return (
    <div class={styles.OuterContainer}>
      <h1>Active Projects</h1>
      <div class={styles.Container}>
        <For each={activeProjects}>{(p) => <Project project={p} />}</For>
      </div>

      <h1>Side Projects</h1>
      <div class={styles.Container}>
        <For each={sideProjects}>{(p) => <Project project={p} />}</For>
      </div>

      <h1>School Projects</h1>
      <div class={styles.Container}>
        <For each={schoolProjects}>{(p) => <Project project={p} />}</For>
      </div>

      <h1>Thesis Projects</h1>
      <div class={styles.Container}>
        <For each={thesisProjects}>{(p) => <Project project={p} />}</For>
      </div>
    </div>
  );
};

export default Projects;
