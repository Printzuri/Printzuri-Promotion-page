import React from "react";
import socialInsta from "../assets/instagram.png";
import socialTweet from "../assets/twitter.png";
import "./styles/PrintZuri.css";

const PrintZuri = () => {
  return (
    <div className="commingSoon">
      <div className="commingSoonCont">
        <nav className="commingSoonNav">
        <a href="https://printzuri.netlify.app">
          <img
            src="https://res.cloudinary.com/dhupahyac/image/upload/v1674152549/printzuri-logo_a1qexe.png"
            alt="Brand Logo"
          />
          </a>
        </nav>
        <section className="commingSoonSec">
          <h1>We are building something amazing!</h1>
          <p>
            We are a print-on-demand tool for creatives, businesses, and
            organizations that provides a simple and easy-to-use platform for
            fast printing of a variety of materials.
          </p>
		  <h2>Get notified when we launch</h2>

		  <form className="commingSoonForm">
			<input type="text" placeholder="Email Address"/>
			<button type="submit">Notify Me</button>
		  </form>
		  <div className="commingSoonSocials">
      <a href="https://www.instagram.com/printzuri/" target="_blank" rel="noreferrer">
			  <img src={socialInsta} alt="social insta" />
      </a>
      <a href="https://twitter.com/printzuri" target="_blank" rel="noreferrer">
			  <img src={socialTweet} alt="social twitter" />
      </a>
		  </div>
        </section>
      </div>
    </div>
  );
};

export default PrintZuri;
