const Header = ({ title }) => {
  return (
    <div className="header">
      <h2>{title}</h2>
      <a href="index.html">
        <img src="logo.png" alt="Logo" className="logo" />
      </a>
    </div>
  );
};

export default Header;
