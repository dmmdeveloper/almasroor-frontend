import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Carousel ()  {
const slide1   = "https://images.pexels.com/photos/635041/pexels-photo-635041.jpeg?auto=compress&cs=tinysrgb&w=600"

useEffect(()=>{
  Aos.init({duration :1000})
},[])


  const settings = {

    lazyLoad: false,
    // dots: true, // Enable dots for navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    // autoplay: true, // Enable autoplay
    // autoplaySpeed: 3000, // Time between slides in ms
    arrows: false, // Disable default navigation arrows
    // autoplay:true
  };

  return (
    <div className="w-full  mx-auto">


{/* Slide */}

<Slider {...settings}>


<div className="md:h-[450px] h-[300px] relative w-full flex justify-center items-center  carousel-slide ">
  <div className="h-full w-full absolute top-0 bg-[rgba(0,0,0,0.2)] flex justify-center items-center">
<div>

  <h2 
     className="md:text-6xl text-3xl text-white text-center font-[300] md:mt-7 mt-4 ">WELCOME TO </h2>
  <h1  data-aos="zoom-in"  data-aos-duration="700" data-aos-delay="1000" className="md:text-8xl text-5xl text-white text-center font-[500] md:mt-7 mt-4 uppercase "> Al masroor </h1>
  <h3  data-aos="fade-left"   data-aos-duration="700" data-aos-delay="1500" className="md:text-3xl text-xl text-white text-center font-[400] md:mt-7  mt-4 font-palywrite  "> A Home Away From Home </h3>
</div>
  </div>
</div>
<div style={{backgroundImage:`url(${slide1})` , backgroundPosition:"center", backgroundRepeat:"no-repeat" , backgroundSize:"cover"}} className="h-[400px] w-full flex justify-center items-center bg-slate-600">


</div>

<div style={{backgroundImage:`url(${slide1})` , backgroundPosition:"center", backgroundRepeat:"no-repeat" , backgroundSize:"cover"}} className="h-[400px] w-full flex justify-center items-center bg-slate-600">

  Slide 3
</div>









        
  

      


        
      </Slider>
    </div>
  );
};

export default Carousel;
