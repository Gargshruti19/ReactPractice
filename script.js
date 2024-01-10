import React from "react";
import ReactDOM from "react-dom/client";
import logoImage from "./assets/logo.png";
import copyrightImage from "./assets/copyright.png";

const HeaderComponent = () => (
	<div className="container">
		<img id="logo" alt="logo" src={logoImage}></img>

		<input type="text" placeholder="Search Anything"></input>

		<img
			id="user"
			alt="user-icon"
			src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
		></img>
	</div>
);

const BodyComponent = () => <div className="body"></div>;

const copyright = <p>Copyright Shruti garg</p>;

const FooterComponent = () => (
	<div className="footer">
		<img alt="copyrightimg" src={copyrightImage}></img>
		{copyright}
	</div>
);
const AppLayout = () => {
	return (
		<>
			<HeaderComponent />
			<BodyComponent />
			<FooterComponent />
		</>
	);
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
