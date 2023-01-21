import React from 'react'
import socialInsta from "../assets/instagram.png"
import socialTweet from "../assets/twitter.png"

const PrintZuri = () => {
  return (
		<div className="overall__container">
			{/* <div className="testing">
				<img
					src="https://res.cloudinary.com/dhupahyac/image/upload/v1674170140/Coming_Soon_6_dewjdm.png"
					alt=""
					className="testing__img"
				/>
			</div> */}
			<div className="main__container">
				<nav className="nav__content">
					<img
						src="https://res.cloudinary.com/dhupahyac/image/upload/v1674152549/printzuri-logo_a1qexe.png"
						alt="print zuri logo"
						className="page__logo"
					/>
				</nav>
				<div className="page__content">
					<div className="top__page">
						<div className="page__heading">
							<h1 className="page__head">
								We are building something amazing!{" "}
							</h1>
						</div>
						<div className="page__info">
							<p className="page__text">
								We are a print-on-demand tool for creatives, businesses, and
								organizations that provides a simple and easy-to-use platform
								for fast printing of a variety of materials.
							</p>
						</div>
					</div>
					<div className="bottom__page">
						<div className="page__subhead">
							<p className="page__subtext">Get notified when we launch</p>
						</div>
						<form className="form__container">
							<div className="input__left">
								<input
									type="email"
									placeholder="Email Address"
									className="input__field"
								/>
							</div>
							<div className="input__right">
								<input
									type="submit"
									value="Notify Me"
									className="input__action"
								/>
							</div>
						</form>
						<div className="social__container">
							<a className="link__one">
								<img
									src={socialInsta}
									alt="Instagram icon"
									className="social__icons"
								/>
							</a>
							<a className="link__two">
								<img
									src={socialTweet}
									alt="Twitter icon"
									className="social__icons"
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
