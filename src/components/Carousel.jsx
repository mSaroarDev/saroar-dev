import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Testimonial from "./Testimonial";

export default function CarouselTestimonial() {
  return (
    <>
      <Carousel showArrows={false} width="100%" autoPlay={true} interval="2000" infiniteLoop={true} showThumbs={false}>
       <Testimonial />
       <Testimonial />
       <Testimonial />
       <Testimonial />
       <Testimonial />
      </Carousel>
    </>
  );
}
