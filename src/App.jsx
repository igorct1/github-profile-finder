import React from "react";
import "./globals.css";
import { Main } from "./Components/Main";
import { Header } from "./Components/Header";
import { Search } from "./Components/Search";
import { Card } from "./Components/Card";
import axios from "axios";

export const App = () => {
  const [user, setUser] = React.useState("");
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    fetchUserData("octocat");
  }, []);

  function handleSearch(username) {
    setLoading(true);
    fetchUserData(username);
  }

  function fetchUserData(username) {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        setLoading(false);
        setError(false);
        setUser(res.data);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }

  return (
    <Main>
      <Header />
      <Search
        handleSearch={handleSearch}
        hasError={error}
        isLoading={loading}
      />
      <Card userData={user} hasError={error} isLoading={loading} />
    </Main>
  );
};
