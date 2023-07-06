import React from "react";
import "./styles/PrintZuri.css";
import { ReactComponent as Youtube } from './../assets/svg/YouTube.svg'
import { ReactComponent as Twitter } from './../assets/svg/Twitter.svg'
import { ReactComponent as Instagram } from './../assets/svg/Instagram.svg'
import logoImg from './../assets/png/Logo.png'
import heroIcon from "../assets/png/hero__img.png"
import uniqueIcon from "../assets/png/unique__img.png"
import { Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AiOutlinePlus } from 'react-icons/ai';
const PrintZuri = () => {
  return (
    <>
      <section className="heroSection">
				<div className="container">
					<div className="heroText">
						<div className="heroHeading">
							<h1 className="heroHead">Everyday products that helps you stand out</h1>
						</div>
						<div className="heroSubhead">
							<p className="heroSubtext">
								Printzuri is your go-to platform for your quality printed
								product as a buyer or seller. Choose your desired product and we
								will cover the rest.
							</p>
						</div>
					</div>
					<div className="videoContainer">
						<img src={heroIcon} alt="PrintZuri video icon" />
					</div>
				</div>
			</section>
			<section className="firstSection">
				<div className="container">
					<div className="flexRow">
						<div className="flexCol">
							<div className="columnOne">
								<div className="uniqueHeading">
									<h2 className="uniqueHead">What makes Printzuri unique?</h2>
								</div>
								<div className="uniqueSubhead">
									<p className="uniqueSubtext">
										You can create a store with Printzuri and monetize your
										creations.
									</p>
								</div>
							</div>
						</div>
						<div className="flexCol">
							<img src={uniqueIcon} alt="Unique section icon" />
						</div>
					</div>
				</div>
			</section>
      <section className="faqSection">
        <div className="container promoFaq">
          <h1 className="promoFaqHead">FAQs</h1>
          <div className="promoFaqDetail">
            <h2 className="promoFaqDetailHeader">PRODUCTS</h2>
            <Accordion>
              <AccordionSummary
                expandIcon={<AiOutlinePlus />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>The product I want is out of stock, when it become available again?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<AiOutlinePlus />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>The product I want is out of stock, when it become available again?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="promoFaqDetail">
            <h2 className="promoFaqDetailHeader">SHIPPING AND DELIVERY</h2>
            <Accordion>
              <AccordionSummary
                expandIcon={<AiOutlinePlus />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>The product I want is out of stock, when it become available again?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<AiOutlinePlus />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>The product I want is out of stock, when it become available again?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="promoFaqDetail">
            <h2 className="promoFaqDetailHeader">PRODUCTS</h2>
            <Accordion>
              <AccordionSummary
                expandIcon={<AiOutlinePlus />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>The product I want is out of stock, when it become available again?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<AiOutlinePlus />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>The product I want is out of stock, when it become available again?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </section>
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
}

export default PrintZuri;
