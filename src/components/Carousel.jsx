import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useSwipeable } from "react-swipeable";
import img1 from "./room.jpg";
import img2 from "./Professtional.avif"

function Carousel() {

  const [index, setIndex] = useState(1); // Track the current slide index
  const [direction, setDirection] = useState("next"); // Track slide direction

  // Handle Next Slide
  const handleNext = () => {
    setDirection("next");
    setIndex((prev) => (prev % slides.length) + 1); // Move to the next slide, loop back to 1 if at the end
  };

  // Handle Previous Slide
  const handlePrevious = () => {
    setDirection("prev");
    setIndex((prev) => (prev - 2 + slides.length) % slides.length + 1); // Move to the previous slide, loop back to the last if at the start
  };

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: handleNext, // Swipe left to go to the next slide
    onSwipedRight: handlePrevious, // Swipe right to go to the previous slide
    preventScrollOnSwipe: true, // Prevent default scrolling while swiping
    trackMouse: true, // Allow swipe on desktop with mouse drag
  });


  useEffect(() => {
    Aos.init({ duration: 1000 });
    setTimeout(()=>{
      handleNext(); 
    } , 3000);
  }, []); 


  return (
    <div
      {...handlers}
      className="relative group duration-300 w-full  overflow-hidden"
    >
      <div className="relative bg-black flex">
        {/* Slides */}
        {slides.map((slide) => (
          <div
          style={{backgroundImage:`url(${slide?.bgimg})`}}
            key={slide?.id}
            className={`h-[400px] w-full flex-shrink-0 carousel-slide bg-black ${
              index === slide?.id
                ? `animate-${direction === "next" ? "slide-in-left" : "slide-in-right"}`
                : "hidden"
            }  relative`}
          >
            <div className="h-full w-full bg-[rgba(0,0,0,0.3)] absolute top-0 flex justify-center items-center">
<div>
                <h2 className={` ${slide?.stylingh2} text-white text-center font-[300] md:mt-7 mt-4`}>
                {slide?.h2}
              </h2>
              <h1 
                data-aos="zoom-in"
                data-aos-duration="700"
                data-aos-delay="1000"
                className={`${slide?.stylingh1} text-white  text-center font-[500] md:mt-7 mt-4 uppercase`}
              >
                {slide?.h1}
              </h1>
              <h3
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-delay="1500"
                className={` ${slide?.stylingh3} text-white text-center font-[400] md:mt-7 mt-4 font-palywrite`}
              >
                {slide?.h3}
              </h3>



              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Left Navigation */}
      <div
        className="absolute h-0 md:h-full   w-0 md:w-[50px] hover:bg-[#0000005f] bg-[#00000030] left-0 top-0 hidden group-hover:flex justify-center items-center md:text-3xl text-[0px] text-white cursor-pointer"
        onClick={handlePrevious}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </div>

      {/* Right Navigation */}
      <div className="absolute md:h-full h-0  md:w-[50px] w-0 hover:bg-[#0000005f] bg-[#00000030] right-0 top-0 hidden group-hover:flex justify-center items-center  md:text-3xl text-[0px] text-white cursor-pointer"
        onClick={handleNext}
      >
         <i className="fa-solid fa-chevron-right"></i>

      </div>
    </div>
  );
}



const slides = [


  { id: 1, 
    content: "Slide 1" ,
    h2:" Welcome To ",
    h1:"Al Masroor",
    h3:"A Home Away From Home",
    bgimg:img1,
    stylingh2 : "md:text-4xl text-3xl",
    stylingh1:"md:text-8xl text-5xl",
    stylingh3:"md:text-3xl text-xl"
  },

  { id: 2, 
    h1:"Professionals",
    h2:"Especially Designed for",
    h3:"Your perfect space to live, learn, and grow.",
    bgimg:img2,
    stylingh2 : "md:text-4xl text-[20px]",
    stylingh1:"md:text-7xl text-4xl",
    stylingh3:"md:text-3xl text-[17px]",
   },

  {
     id: 3, content: "Slide 3",
    bgimg:"https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwdGVjbm9sb2d5fGVufDB8fDB8fHww",
    h2:"We Provides",
    h1:"Modern Facilities ",
    h3:"Comfortable Living, Affordable Prices",
    stylingh1:"md:text-7xl text-4xl",
    stylingh2 : "md:text-4xl text-[20px]",
    stylingh3:"md:text-3xl text-[17px]",
     },

];



export default Carousel;
