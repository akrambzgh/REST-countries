/* eslint-disable react/prop-types */

function Header({ handleTheme, isDarkTheme }) {
  return (
    <header className="header">
      <div className="symbol">
        <h1> Where in the world</h1>
      </div>
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
