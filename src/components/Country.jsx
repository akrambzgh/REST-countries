/* eslint-disable react/prop-types */

function Country({ country }) {
  return (
    <div className="country">
      <div className="flag">
        <img src={country.flags?.png} alt="" />
      </div>
      <h5 className="country-name">{country.name}</h5>
      <div className="info">
        <h5>
          population:{" "}
          <span>
            {country.population
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </span>
        </h5>
        <h5>
          reigon: <span>{country.region}</span>
        </h5>
        {country.capital && (
          <h5>
            capital: <span>{country.capital}</span>
          </h5>
        )}
      </div>
    </div>
  );
}
export default Country;
