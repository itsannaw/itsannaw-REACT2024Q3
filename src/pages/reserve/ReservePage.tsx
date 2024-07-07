import { Component } from "react";

import "./ReservePage.style.css";

class ReservePage extends Component {
	static handleReload = () => {
		window.location.reload();
	};

	render() {
		return (
			<section>
				<div className="wrapper">
					<div className="cat">
						<span className="eyes left" />
						<span className="eyes right" />
						<span className="mouth" />
					</div>

					<div className="moon">
						<div className="sphere" />
					</div>

					<div className="cloud-container">
						<div className="cloud" />
						<div className="cloud" />
						<div className="cloud" />
						<div className="cloud" />
					</div>
				</div>

				<div className="signature">
					<p>
						Oops, something&apos;s wrong! Try{" "}
						<button type="button" onClick={ReservePage.handleReload}>
							reload the page
						</button>
						.
					</p>
				</div>
			</section>
		);
	}
}

export default ReservePage;
