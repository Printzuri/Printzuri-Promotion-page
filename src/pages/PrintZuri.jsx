import React from "react";
import "./styles/PrintZuri.css";
import heroIcon from "../assets/png/hero__img.png"
import uniqueIcon from "../assets/png/unique__img.png"

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
		</>
	);
};

export default PrintZuri;
