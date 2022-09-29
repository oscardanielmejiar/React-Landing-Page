import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


import { ActualCard } from "./actualCard.jsx";
import { TagLine } from "./tagLine.jsx";
import { NewCard } from "./newcard.jsx";

const Home = () => {
	return (
		<div>
			<TagLine />
			<ActualCard />
			<ActualCard />
			<NewCard />
		</div>
	);
};


export default Home;
