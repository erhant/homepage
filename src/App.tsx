import { For, type Component } from "solid-js";

import Publication from "./components/publication";
import Project from "./components/project";
import Layout from "./components/layout";
import Hero from "./components/hero";

import { publications } from "./contents/publications";
import {
  activeProjects,
  schoolProjects,
  sideProjects,
  thesisProjects,
} from "./contents/projects";

const App: Component = () => {
  return (
    <Layout>
      <Hero />

      <h1>Active Projects</h1>
      <For each={activeProjects}>{(p) => <Project project={p} />}</For>

      <h1>Publications</h1>
      <For each={publications}>
        {(item) => <Publication publication={item} />}
      </For>

      <h1>Side Projects</h1>
      <For each={sideProjects}>{(p) => <Project project={p} />}</For>

      <h1>School Projects</h1>
      <For each={schoolProjects}>{(p) => <Project project={p} />}</For>

      <h1>Thesis Projects</h1>
      <For each={thesisProjects}>{(p) => <Project project={p} />}</For>
    </Layout>
  );
};

export default App;
