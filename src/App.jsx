import { useEffect, useState } from "react";
import countriesData from "./data.json";
// import { nanoid } from "nanoid";
import "./scss/App.scss";
import Header from "./components/Header";
import Country from "./components/Country";
import CountryDetails from "./components/countryDetails";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(
    JSON.parse(localStorage.getItem("theme"))
  );
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [details, setDetails] = useState({
    svg: "",
    name: "",
    nativeName: "",
    population: 0,
    region: "",
    subRegion: "",
    capital: "",
    topLevelDomain: "",
    currencies: [],
    languages: [],
    borders: [],
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(isDarkTheme));
  }, [isDarkTheme]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCountries = countriesData.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleTheme() {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
  }

  function handleDetails(
    svg,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders
  ) {
    setDetails({
      ...details,
      svg: svg,
      name: name,
      nativeName: nativeName,
      population: population,
      region: region,
      subregion: subregion,
      capital: capital,
      topLevelDomain: topLevelDomain,
      currencies: currencies,
      languages: languages,
      borders: borders,
    });
    setShow(true);
  }

  function removeDetails() {
    setDetails({
      ...details,
      svg: "",
      name: "",
      nativeName: "",
      population: 0,
      region: "",
      subRegion: "",
      capital: "",
      topLevelDomain: "",
      currencies: [],
      languages: [],
      borders: [],
    });
    setShow(false);
  }

  return (
    <div className={isDarkTheme ? "App dark" : "App"}>
      <Header
        removeDetails={removeDetails}
        handleTheme={handleTheme}
        isDarkTheme={isDarkTheme}
        searchTerm={searchTerm}
        handleSearch={handleSearch}
      />
      <CountryDetails
        show={show}
        removeDetails={removeDetails}
        isDarkTheme={isDarkTheme}
        country={details}
      />
      <main className="main">
        <div className="container">
          {!show && (
            <div className="grid">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((country, index) => (
                  <Country
                    key={index}
                    country={country}
                    handleDetails={() =>
                      handleDetails(
                        country.flags.svg,
                        country.name,
                        country.nativeName,
                        country.population,
                        country.region,
                        country.subregion,
                        country.capital,
                        country.topLevelDomain,
                        country.currencies,
                        country.languages,
                        country.borders
                      )
                    }
                  />
                ))
              ) : (
                <h1 className="no-country">No countries found.</h1>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
