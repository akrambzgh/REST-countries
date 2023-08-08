import { useState } from "react";
import countriesData from "./data.json";
import "./App.scss";

function App() {
  const [countries, setCountries] = useState(countriesData);

  console.log(countries);

  return <div className="App"></div>;
}

export default App;
