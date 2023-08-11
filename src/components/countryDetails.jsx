/* eslint-disable react/prop-types */

function CountryDetails({ show, removeDetails, isDarkTheme, country }) {
  return (
    <div className={show ? "country-details show" : "country-details"}>
      <div className="back">
        <button onClick={removeDetails}>
          <img
            src={`./public/left-arrow-${isDarkTheme ? "dark" : "light"}.png`}
            alt=""
          />
          Back
        </button>
      </div>
      <div className="main-details">
        <div className="country-flag">
          <img src={country.svg} alt="" />
        </div>
        <div className="details">
          <h1>{country.name.official}</h1>
          <div className="text-info">
            <div className="left">
              <h3>
                native name: <span>{country.nativeName}</span>
              </h3>
              <h3>
                population:{" "}
                <span>
                  {country.population
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </h3>
              <h3>
                region: <span>{country.region}</span>
              </h3>
              <h3>
                sub region: <span>{country.subregion}</span>
              </h3>

              {country.capital && (
                <h3>
                  capital: <span>{country.capital}</span>
                </h3>
              )}
            </div>
            <div className="right">
              <h3>
                top level domain: <span>{country.topLevelDomain}</span>
              </h3>
              <h3>
                currencies:{" "}
                {country.currencies[0] && (
                  <span>
                    {country.currencies[0].name}, (
                    {country.currencies[0].symbol})
                  </span>
                )}
              </h3>
              <h3>
                languages:{" "}
                {country.languages.map((language, index) => (
                  <span key={index}> {language.name}. </span>
                ))}
              </h3>
            </div>
          </div>
          {country.borders && (
            <div className="borders">
              <span>border countries:</span>
              <div className="countries">
                {country.borders?.map((borderCountry, index) => (
                  <span key={index}>{borderCountry}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default CountryDetails;
