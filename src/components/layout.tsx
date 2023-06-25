import type { Component, JSXElement } from "solid-js";
import styles from "../styles/layout.module.css";
import Footer from "./footer";
import Header from "./header";

const Layout: Component<{ children: JSXElement }> = (props) => {
  return (
    <div class={styles.Layout}>
      <Header />
      <div class={styles.Container}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
