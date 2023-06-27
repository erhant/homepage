import type { Component } from "solid-js";
import styles from "../styles/footer.module.css";

const Footer: Component = () => {
  return (
    <footer class={styles.Footer}>
      <p>&copy; Erhan Tezcan {new Date().getFullYear()} &nbsp; </p>
    </footer>
  );
};

export default Footer;
