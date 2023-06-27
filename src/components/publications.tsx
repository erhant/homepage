import { publications } from "../contents/publications";
import { Component, For } from "solid-js";
import Publication from "./publication";

const Publications: Component = () => {
  return (
    <div>
      <h1>Publications</h1>
      <For each={publications}>
        {(item) => <Publication publication={item} />}
      </For>
    </div>
  );
};

export default Publications;
