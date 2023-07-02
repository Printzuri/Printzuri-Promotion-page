import React from "react";
import "./styles/PrintZuri.css";
import { ReactComponent as Youtube } from './../assets/svg/YouTube.svg'
import { ReactComponent as Twitter } from './../assets/svg/Twitter.svg'
import { ReactComponent as Instagram } from './../assets/svg/Instagram.svg'
import logoImg from './../assets/png/Logo.png'
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
      <section className="container promoFaq">
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
};

export default PrintZuri;
