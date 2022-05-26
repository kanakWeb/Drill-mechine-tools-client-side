import React from "react";
import Elementor from "./Elementor";
import Banner from "./Banner";
import Services from "./Services";
import Discount from "./Discount";
import Summery from "../Home/Summery";
import ClientReview from "./ClientReview";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Summery></Summery>
      <Services></Services>
      <Discount></Discount>
      <Elementor></Elementor>
      <ClientReview></ClientReview>
    </div>
  );
};

export default Home;
