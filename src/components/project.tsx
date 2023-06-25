import { For, type Component } from "solid-js";
import TechBadge from "./techbadge";
import LinkBadge from "./linkbadge";
import NPMBadge from "./npmbadge";
import ProjectType from "../types/project";

const Project: Component<{ project: ProjectType }> = (props) => {
  return (
    <div>
      <h3
        style={{
          "margin-bottom": "5px",
        }}
      >
        {props.project.title}
      </h3>
      {props.project.githubURL && (
        <LinkBadge type="repo" url={props.project.githubURL} />
      )}
      {props.project.demoURL && (
        <LinkBadge type="demo" url={props.project.demoURL} />
      )}
      {/* {project.tech.map((type, i) => (
        <TechBadge type={type} key={i} />
      ))} */}
      <For each={props.project.tech} fallback={<></>}>
        {(type) => <TechBadge type={type} />}
      </For>
      {props.project.npm && <NPMBadge name={props.project.npm} />}
      <p
        style={{
          "margin-top": "-10px",
        }}
      >
        {props.project.content}
      </p>
    </div>
  );
};

export default Project;
