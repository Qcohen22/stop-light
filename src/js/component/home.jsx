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
				{/* <div className={stop-light yellow}></div>
			<div className={stop-light green}></div> */}
			</div>
		</>
	);
};

export default Home;
