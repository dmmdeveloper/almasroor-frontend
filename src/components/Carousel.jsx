import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useSwipeable } from "react-swipeable";



function Carousel() {
  // const slides = [
  //   { id: 1, h1: "Welcome", h2: "To Slide 1", h3: "Enjoy the journey" },
  //   { id: 2, h1: "Hello", h2: "To Slide 2", h3: "Explore the world" },
  //   { id: 3, h1: "Greetings", h2: "To Slide 3", h3: "Discover the magic" },
  //   { id: 4, h1: "Hi", h2: "To Slide 4", h3: "Find your way" },
  // ];

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

  // Initialize and Refresh AOS on Slide Change
  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.refresh();
  }, [index]); // Refresh AOS whenever the index changes

  return (
    <div

      {...handlers} // Attach swipe handlers
      className="relative group w-full overflow-hidden"
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
                <h2 className="md:text-4xl text-3xl text-white text-center font-[300] md:mt-7 mt-4">
                {slide?.h2}
              </h2>
              <h1 
                data-aos="zoom-in"
                data-aos-duration="700"
                data-aos-delay="1000"
                className={`md:text-8xl text-5xl text-white  text-center font-[500] md:mt-7 mt-4 uppercase`}
              >
                {slide?.h1}
              </h1>
              <h3
                data-aos="fade-left"
                data-aos-duration="700"
                data-aos-delay="1500"
                className="md:text-3xl text-xl text-white text-center font-[400] md:mt-7 mt-4 font-palywrite"
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
        className="absolute h-full w-[50px] bg-slate-500 left-0 top-0 hidden group-hover:flex justify-center items-center text-3xl text-white cursor-pointer"
        onClick={handlePrevious}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </div>

      {/* Right Navigation */}
      <div
        className="absolute h-full w-[50px] bg-slate-500 right-0 top-0 hidden group-hover:flex justify-center items-center text-3xl text-white cursor-pointer"
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
    bgimg:"https://cdn.pixabay.com/photo/2021/12/18/06/13/hotel-6878054_1280.jpg",
  },

  { id: 2, content: "Slide 2"  ,
    h1:"Professionals",
    h2:"Especially Designed for",
    h3:"Your perfect space to live, learn, and grow.",
    bgimg:"https://images.unsplash.com/photo-1515736076039-a3ca66043b27?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsc3xlbnwwfHwwfHx8MA%3D%3D",



   },
  {
     id: 3, content: "Slide 3",
    bgimg:"https://cdn.pixabay.com/photo/2021/12/18/06/13/hotel-6878054_1280.jpg",
     },

];







function Carouse ()  {

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
    afterChange: () => {
      // Reinitialize AOS after each slide transition
      Aos.refreshHard();
    },

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


<div className="md:h-[450px] h-[300px] relative w-full flex justify-center items-center  carousel-slide ">
  <div className="h-full w-full absolute top-0 bg-[rgba(0,0,0,0.2)] flex justify-center items-center">
<div>
  <h2 
     className="md:text-6xl text-3xl text-white text-center font-[300] md:mt-7 mt-4 welcome ">WELCOME TO </h2>
  <h1  data-aos="zoom-in"  data-aos-duration="700" data-aos-delay="1000" className="md:text-8xl text-5xl text-white text-center font-[500] md:mt-7 mt-4 uppercase "> Al masroor </h1>
  <h3  data-aos="fade-left"   data-aos-duration="700" data-aos-delay="1500" className="md:text-3xl text-xl text-white text-center font-[400] md:mt-7  mt-4 font-palywrite  "> A Home Away From Home </h3>
</div>
  </div>
</div>












        
  

      


        
      </Slider>
    </div>
  );
};

export default Carousel;
