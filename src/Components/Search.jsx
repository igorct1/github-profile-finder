import React from "react";
import styles from "./Search.module.css";
import { MagnifyingGlass } from "phosphor-react";

export const Search = ({ handleSearch, hasError }) => {
  const [username, setUsername] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleSearch(username);
  }

  function handleChange(e) {
    setUsername(e.target.value);
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <MagnifyingGlass size={24} color="#0079ff" />
      <input
        type="text"
        placeholder="Search github name..."
        onChange={handleChange}
      />
      {hasError && <p className={styles.hasError}>No Results.</p>}
      <button>Search</button>
    </form>
  );
};
