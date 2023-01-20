import React from 'react'
import socialInsta from "../assets/instagram.png"
import socialTweet from "../assets/twitter.png"

const PrintZuri = () => {
  return (
		<div className="overall__container">
			{/* <div>
				<img
					src="https://res.cloudinary.com/dhupahyac/image/upload/v1674167865/Coming_Soon_1_gpk2tu.webp"
					alt=""
				/>
			</div> */}
			<div className="main__container">
				<nav className="nav__content">
					<img
						src="https://res.cloudinary.com/dhupahyac/image/upload/v1674152549/printzuri-logo_a1qexe.png"
						alt="print zuri logo"
					/>
				</nav>
				<div className="page__content">
					<div className="top__page">
						<div>
							<h1>We are building something amazing! </h1>
						</div>
						<div>
							<p>
								We are a print-on-demand tool for creatives, businesses, and
								organizations that provides a simple and easy-to-use platform
								for fast printing of a variety of materials.
							</p>
						</div>
					</div>
					<div className="bottom__page">
						<div>
							<h2>Get notified when we launch</h2>
						</div>
						<form>
							<input type="email" placeholder="Email Address" />
							<input type="submit" value="Notify Me" />
						</form>
						<div>
							<a>
								<img
									src={socialInsta}
									alt="Instagram icon"
								/>
							</a>
							<a>
								<img
									src={socialTweet}
									alt="Twitter icon"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PrintZuri
