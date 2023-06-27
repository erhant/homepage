import type { Component } from "solid-js";
import Layout from "./components/layout";
import Hero from "./components/hero";
import Projects from "./components/projects";
import {
  activeProjects,
  publications,
  schoolProjects,
  sideProjects,
  thesisProjects,
} from "./contents/projects";

const App: Component = () => {
  return (
    <Layout>
      <Hero />
      <Projects title="Active Projects" projects={activeProjects} />
      <Projects title="Side Projects" projects={sideProjects} />
      <Projects title="Publications" projects={publications} />
      <Projects title="School Projects" projects={schoolProjects} />
      <Projects title="Thesis Projects" projects={thesisProjects} />
    </Layout>
  );
};

export default App;
