import React from "react";

const Footer = () => {
  const today = new Date();
  return (
    <>
      <footer>
        <p>Copyright &copy; {today.getFullYear()}</p>
        <b>Developed by @shailesh gontewar</b>
      </footer>
    </>
  );
};

export default Footer;
