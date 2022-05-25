const Footer = ({}) => {
  const date = new Date();
  //const d = date.getFullYear;
  return (
    <div className="footer">&copy; JOZE NOTES TAKER {date.getFullYear()}</div>
  );
};

export default Footer;
