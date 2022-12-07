import React from "react";
import styles from "./Header.module.css";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";

const initialTheme = { theme: "Dark", icon: moon };
const bodyClassList = document.body.classList;

export const Header = () => {
  const [toggleTheme, setToggle] = React.useState(initialTheme);

  function handleToggle() {
    if (toggleTheme.theme === "Light") {
      bodyClassList.remove("dark-theme");
      setToggle(initialTheme);
    } else {
      bodyClassList.add("dark-theme");
      setToggle({ theme: "Light", icon: sun });
    }
  }
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>devfinder.</h1>
      <div className={styles.theme} onClick={handleToggle}>
        <img className={styles.icon} src={toggleTheme.icon} alt="" />
        <button className={styles.button}>{toggleTheme.theme}</button>
      </div>
    </header>
  );
};
