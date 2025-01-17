import React from "react";
import Slider from "react-slick";

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

  const members = [1,2,3,4,5]

  return (
    <>
      <div className="pb-[100px]">
        <div className="slider-container   md:w-[800px]  w-[300px]  mx-auto relative">
          <Slider {...settings}>
            {
                members.map((_,i)=>{
                    return(<>
                       <div key={i} className="md:h-[300px]  h-[200px] w-[150px] md:w-[270px] bg-halfBlak text-white  p-1">
                        <figure>
                            <img className="md:h-[230px] h-[100px] w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiJAMqnNNOhNXFccLb3g-Peox11XvCkesSCg&s" alt="" />
                        </figure>
                        <h2 className="text-center md:font-[600] font-[400] mt-2 text-[16px] md:text-[22px] tex" >Dost Muhammad </h2>
                        <p className="text-center text-appYellow text-[15px] " >Developer</p>



            </div>
                    </>)
                })
            }
         

          </Slider>
        </div>
      </div>
    </>
  );
}
