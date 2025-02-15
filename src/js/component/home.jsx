import React from "react";
import Footer from "./footer";
import Card from "./card";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<div className="text-center container">
				<div className="row justify-content-center">
					<div className=" col-12 col-md-6 col-xl-3 justify-content-center ">
						<Card title= "Card n°1" text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus in nulla."
						button_label= "Find out about n°1" button_link="goggle.com" 
						img= "https://www.thebusinessdesk.com/_files/images/feb_19/The-former-Royal-Angus-hotel-DoubleTree-by-Hilton.-e1549306563820-500x325.jpg"/>				
					</div>
					<div className=" col-12 col-md-6 col-xl-3 justify-content-center ">
						<Card title= "Card n°2" text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus in nulla."
						button_label= "Find out about n°2" button_link="goggle.com" 
						img= "https://www.thebusinessdesk.com/_files/images/feb_19/The-former-Royal-Angus-hotel-DoubleTree-by-Hilton.-e1549306563820-500x325.jpg"/>				
					</div>
					<div className="col-12 col-md-6 col-xl-3 justify-content-center">
						<Card title= "Card n°3" text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus in nulla."
						button_label= "Find out about n°3" button_link="goggle.com" 
						img= "https://www.thebusinessdesk.com/_files/images/feb_19/The-former-Royal-Angus-hotel-DoubleTree-by-Hilton.-e1549306563820-500x325.jpg"/>				
					</div>
					<div className="col-12 col-md-6 col-xl-3 justify-content-center">
						<Card title= "Card n°4" text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean cursus in nulla."
						button_label= "Find out about n°4" button_link="goggle.com" 
						img= "https://www.thebusinessdesk.com/_files/images/feb_19/The-former-Royal-Angus-hotel-DoubleTree-by-Hilton.-e1549306563820-500x325.jpg"/>				
					</div>
				</div>	
			</div>
			<Footer/>
		</>
	);
};

export default Home;
