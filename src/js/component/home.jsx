import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [light, setLight] = useState("off");
	let red = "bg-danger";
	if (lightS === "off") setLight(red);
	return (
		<>
			<div style={{ backgroundColor: "grey" }}>red</div>
			<br></br>

			<div style={{ backgroundColor: "grey" }}>green</div>
			<br></br>
			<div style={{ backgroundColor: "grey" }}>yellow</div>
		</>
	);
};

export default Home;
