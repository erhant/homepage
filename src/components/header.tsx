import { For, type Component } from "solid-js";
import styles from "../styles/header.module.css";
import { headerItemsLeft, headerItemsRight } from "../contents/header";
import { TbDots } from "solid-icons/tb";

const Header: Component = () => {
  return (
    <header class={styles.Header}>
      <span style={{ "flex-grow": 1 }} />
      <For each={headerItemsLeft}>
        {(item) => (
          <a class={styles.Link} href={item.href}>
            {<item.icon size={36} />}
          </a>
        )}
      </For>

      {<TbDots size={36} color="gray" />}

      <For each={headerItemsRight}>
        {(item) => (
          <a class={styles.Link} href={item.href}>
            {<item.icon size={36} />}
          </a>
        )}
      </For>
      <span style={{ "flex-grow": 1 }} />
    </header>
  );
};

export default Header;
