import React from "react";
import "./styles/PrintZuri.css";
import { ReactComponent as Youtube } from './../assets/svg/YouTube.svg'
import { ReactComponent as Twitter } from './../assets/svg/Twitter.svg'
import { ReactComponent as Instagram } from './../assets/svg/Instagram.svg'
import logoImg from './../assets/png/Logo.png'
import { Link } from "react-router-dom";

const PrintZuri = () => {
  return (
    <>
      <footer className="promoFooter">
        <div className="container">
          <p className="promoFooterDetail">
          If you would like to find out more about Printzuri, or if you have any questions, please reach out to us via hello@printzuri.com
          </p>
          <nav className="promoFooterNav">
            <p>© 2022 Printzuri</p>
            <div className="promoFooterNavSocial">
              <Link to="/"><Youtube /></Link>
              <Link to="/"><Twitter /></Link>
              <Link to="/"><Instagram /></Link>
            </div>
            <img src={logoImg} alt="logo"/>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default PrintZuri;
