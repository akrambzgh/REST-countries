/* eslint-disable react/prop-types */

function Search({ searchTerm, handleSearch }) {
  return (
    <div className="search">
      <div className="search-for-country-name">
        <input
          type="text"
          name="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search For a Country..."
        />
        <img src="./public/search-light.png" alt="" />
      </div>
      <div className="filter"></div>
    </div>
  );
}
export default Search;
