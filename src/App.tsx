import type { Component } from "solid-js";
import Layout from "./components/layout";
import Hero from "./components/hero";
import Publications from "./components/publications";
import Projects from "./components/projects";

const App: Component = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Publications />
    </Layout>
  );
};

export default App;
