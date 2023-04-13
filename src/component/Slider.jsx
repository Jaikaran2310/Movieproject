import { Carousel } from "flowbite-react";
import slider1 from "./slider/slider1.jpg"
import slider2 from "./slider/slider2.jpg"
import slider3 from "./slider/slider3.jpg"
import slider4 from "./slider/slider4.jpg"
import slider5 from "./slider/slider5.jpg"

export default function Slider() {
    return(
      
    <div className="h-56 sm:h-64 xl:h-80 2xl:96h- ">
    <Carousel >
      <img
        src={slider1}
        alt="..."
      />
      <img
        src={slider2}
        alt="..."
      />
      <img
        src={slider3}
        alt="..."
      />
      <img
        src={slider4}
        alt="..."
      />
      <img
        src={slider5}
        alt="..."
      />
    </Carousel>
  </div>

    )
}