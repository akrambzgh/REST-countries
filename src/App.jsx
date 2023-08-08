import { useEffect, useState } from "react";
import countriesData from "./data.json";
import "./App.scss";
import Header from "./components/Header";
import Search from "./components/Search";
import Country from "./components/Country";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);
  function handleTheme() {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
  }

  let allCounries = countriesData.map((country) => {
    {
      return <Country country={country} />;
    }
  });

  return (
    <div className={isDarkTheme ? "App dark" : "App"}>
      <Header handleTheme={handleTheme} isDarkTheme={isDarkTheme} />
      <main className="main">
        <div className="container">
          <Search />
          <div className="grid">{allCounries}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
