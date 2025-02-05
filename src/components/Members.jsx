import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios"
// Custom Next Arrow
function NextArrow({ onClick }) {
  return (
    <div
    className="absolute md:h-[40px] h-[25px] w-[25px] md:w-[40px] bg-halfBlack border border-[rgba(255,255,255,0.5)] hover:border-[rgba(255,255,255,1)] rounded-full flex items-center justify-center right-[-10px] md:right-[-20px] md:top-[50%] top-[30%] transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <i className="fa-solid fa-chevron-right text-white md:text-xl text-[15px] "></i>
    </div>
  );
}

// Custom Previous Arrow
function PrevArrow({ onClick }) {

  return (
    <div
      className="absolute md:h-[40px] h-[25px] w-[25px] md:w-[40px] border border-[rgba(255,255,255,0.5)] hover:border-[rgba(255,255,255,1)] bg-halfBlack rounded-full flex items-center justify-center left-[-15px] top-[30%] md:top-[50%] transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <i className="fa-solid fa-chevron-left text-white"></i>
    </div>
  );
}

export default function Members() {


const [members , setMembers] = useState([])

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
  
  };

const fetchMembers = async ()=>{

  try {
    const response = await axios.get(
      `https://almasroor-server786.vercel.app/member/members`
      // `http://localhost:4000/member/members`

      ,{ withCredentials:true})
    const data = await response.data;
    console.log(data.data);
    setMembers(data.data)
    
  } catch (error) {
    console.log("Memebers are Not Fetched :))" , error);
  }
}

useEffect(()=>{
fetchMembers()
},[]);

  return (
    <>
      <section className="pb-[100px]" >
        <div className="slider-container   md:w-[800px]  w-[300px]  mx-auto relative">
        <Slider {...settings}>
  {members.length > 0 ? (
    members.map((m) => (
      <div
        key={m?._id}
        className="md:h-[300px] h-[200px] w-[150px] md:w-[270px] bg-halfBlak text-white p-1"
      >
        <figure>
          <img
            className="md:h-[230px] h-[140px] w-[140px] md:w-[230px] rounded-md"
            src={m?.photo}
            alt={m?.name}
          />
        </figure>
        <h2 className="text-center md:font-[600] font-[400] mt-2 text-[16px] md:text-[22px]">
          {m?.name}
        </h2>
        <p className="text-center text-appYellow text-[15px]">{m?.work_post}</p>
      </div>
    ))
  ) : (
    // Skeleton Loader when data is loading
    [...Array(4)].map((_, i) => (
      <div
        key={i}
        className="animate-pulse md:h-[300px] h-[200px] w-[150px] md:w-[270px] flex  p-1 rounded-md"
      >
        {/* Image Placeholder */}
        <div className="md:h-[230px] h-[140px] w-[140px] md:w-[230px] bg-[#aa866732] rounded-md"></div>

        {/* Title Placeholder */}
        <div className="mt-2 md:h-5 h-3 md:w-[70%] w-[80%] mx-auto bg-[#aa866732] rounded"></div>

        {/* Subtitle Placeholder */}
        <div className="mt-1 md:h-4 h-2 w-[50%] mx-auto bg-[#aa866732]  rounded"></div>
      </div>
    ))
  )}
</Slider>

        </div>
      </section>
    </>
  );
}


const SkeletonCard = () => {
  return (
    <div className="animate-pulse md:h-[300px] h-[200px] w-[150px] md:w-[270px] bg-halfBlak p-1 rounded-md">
      
      {/* Image Placeholder */}
      <div className="md:h-[230px] h-[140px] w-[140px] md:w-[230px] bg-gray-700 rounded-md"></div>
      
      {/* Title Placeholder */}
      <div className="mt-2 h-5 w-[70%] mx-auto bg-gray-600 rounded"></div>

      {/* Subtitle Placeholder */}
      <div className="mt-1 h-4 w-[50%] mx-auto bg-gray-500 rounded"></div>
    
    </div>
  );
};

