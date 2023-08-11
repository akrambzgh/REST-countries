/* eslint-disable react/prop-types */
import Search from "./Search";

function Header({
  removeDetails,
  handleTheme,
  isDarkTheme,
  searchTerm,
  handleSearch,
}) {
  return (
    <header className="header">
      <div
        className="symbol"
        onClick={
          (removeDetails,
          () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          })
        }
      >
        <h1> Where in the world</h1>
      </div>
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      <div className="theme" onClick={handleTheme}>
        <img
          src={`./public/moon-${isDarkTheme ? "dark" : "light"}.png`}
          alt=""
        />
        <span>Dark Theme</span>
      </div>
    </header>
  );
}
export default Header;
