import Heading from "./Heading";
import React from "react";
import Slider from "./Slider";
import { Movie } from "../Movie";

const Home = () => {
  return (
    <div>
      <Heading></Heading>
      <Slider></Slider>
      <Movie></Movie>
    </div>
  );
};

export default Home;
