function Search() {
  return (
    <div className="search">
      <div className="search-for-country-name">
        <input type="text" placeholder="Search For a Country..." />
        <img src="./public/search-light.png" alt="" />
      </div>
      <div className="filter"></div>
    </div>
  );
}
export default Search;
