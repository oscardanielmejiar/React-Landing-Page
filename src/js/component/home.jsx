import React from "react";
//include images into your bundle
import "./home.css"
//create your first component
import { ActualCard } from "./actualCard.jsx";
import { TagLine } from "./tagLine.jsx";
import { JumbotronLine } from "./jumbotron.jsx";

const Home = () => {
	return (<div className="container-fluid">
		 	 <div>
			<TagLine />
			</div>
			<div id="jumboStyle">
			<JumbotronLine />
			 <div/>

			<div id="card-group">
			<ActualCard />
			<ActualCard />
			<ActualCard />
			<ActualCard />
			 </div>

			 </div>
		</div>
	);
};


export default Home;
