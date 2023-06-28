import { For, type Component } from "solid-js";
import styles from "../styles/header.module.css";
import { headerItemsLeft, headerItemsRight } from "../contents/header";

const ICON_SIZE = 32;

const Header: Component = () => {
  return (
    <header class={styles.Header}>
      <For each={headerItemsLeft}>
        {(item) => (
          <a class={styles.Link} href={item.href}>
            {<item.icon size={ICON_SIZE} />}
          </a>
        )}
      </For>

      <span class={styles.Separator} />

      <For each={headerItemsRight}>
        {(item) => (
          <a class={styles.Link} href={item.href}>
            {<item.icon size={ICON_SIZE} />}
          </a>
        )}
      </For>
    </header>
  );
};

export default Header;
