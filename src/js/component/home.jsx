import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [light, setLight] = useState("off");
	// if (light === "off") setLight(red);
	return (
		<>
			<div className="traffic-light">
				<div
					className={
						light === "glo"
							? "stop-light red glo"
							: "stop-light red"
					}
					onClick={() => setLight("glo")}></div>
				<div
					className={
						light === "yellow"
							? "stop-light yellow glo"
							: "stop-light yellow"
					}
					onClick={() => setLight("yellow")}></div>

				<div
					className={
						light === "green"
							? "stop-light green glo"
							: "stop-light green"
					}
					onClick={() => setLight("green")}></div>
			</div>
		</>
	);
};

export default Home;
