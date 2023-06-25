import LinkBadge from "./linkbadge";
import type PublicationType from "../types/publication";
import { Component, For } from "solid-js";
import TechBadge from "./techbadge";

const Publication: Component<{ publication: PublicationType }> = (props) => {
  return (
    <div>
      <p
        style={{
          "margin-bottom": "-12px",
        }}
      >
        {props.publication.content}
      </p>
      {props.publication.githubURL && (
        <LinkBadge type="repo" url={props.publication.githubURL} />
      )}
      {props.publication.paperURL && (
        <LinkBadge type="paper" url={props.publication.paperURL} />
      )}
      <For each={props.publication.tech} fallback={<></>}>
        {(type) => <TechBadge type={type} />}
      </For>
    </div>
  );
};

export default Publication;
