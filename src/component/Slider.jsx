import { Carousel } from "flowbite-react";

export default function Slider() {
    return(
      
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel >
      <img
        src="https://www.shutterstock.com/image-illustration/movie-reviews-isolated-on-special-600w-1152605072.jpg"
        alt="..."
      />
      <img
        src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="..."
      />
      <img
        src="https://cdn.shopify.com/s/files/1/0087/2506/9860/collections/1_jfR0trcAPT3udktrFkOebA_1080x.jpg?v=1566963161"
        alt="..."
      />
      <img
        src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80"
        alt="..."
      />
      <img
        src="https://thesocietypages.org/socimages/files/2011/05/thor-banner.jpg"
        alt="..."
      />
    </Carousel>
  </div>

    )
}