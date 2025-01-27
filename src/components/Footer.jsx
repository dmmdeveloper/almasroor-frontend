import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
<footer  className='text-white h-[100px] mt-12 ' >
{/* Links Div */}
<div className="h-[70%] w-full">


<div className=" justify-center items-center mx-auto h-full flex gap-3  md:gap-5">


<Link target='_blank' to={"https://wa.me/+923193291955"} className="md:h-[45px] md:w-[45px] w-[40px] h-[40px] md:text-[30px] text-[25px] cursor-pointer border-[2px] flex justify-center items-center rounded-full hover:bg-appYellow duration-300"><i class="fa-brands fa-whatsapp"></i></Link>

<Link className="md:h-[45px] md:w-[45px] w-[40px] h-[40px] md:text-[30px] text-[25px]cursor-pointer border-[2px] flex justify-center items-center rounded-full hover:bg-appYellow duration-300"><i class="fa-brands fa-instagram"></i></Link>

<Link className="md:h-[45px] md:w-[45px] w-[40px] h-[40px] md:text-[30px] text-[25px] cursor-pointer border-[2px] flex justify-center items-center rounded-full hover:bg-appYellow duration-300"><i class="fa-brands fa-facebook-f"></i></Link>


<Link target='_blank'  to={"tel:+923193291955"} className="md:h-[45px] md:w-[45px] w-[40px] h-[40px] md:text-[30px] text-[25px]cursor-pointer border-[2px] flex justify-center items-center rounded-full hover:bg-appYellow duration-300"><i class="fa-solid fa-phone"></i></Link>

<Link
  target="_blank"
//   to={"https://mail.google.com/mail/?view=cm&to=sodhar32@gmail.com"}
  to={"mailto:sodhar32@gmail.com"}
  className="md:h-[45px] md:w-[45px] w-[40px] h-[40px] md:text-[30px] text-[25px]cursor-pointer border-[2px] flex justify-center items-center rounded-full hover:bg-appYellow duration-300"
>
  <i className="fa-solid fa-envelope"></i>
</Link>


<Link target='_blank'  to={"https://maps.app.goo.gl/gvqLZXKyGgYHVyHA7"} className="md:h-[45px] md:w-[45px] w-[40px] h-[40px] md:text-[30px] text-[25px]cursor-pointer border-[2px] flex justify-center items-center rounded-full hover:bg-appYellow duration-300"><i class="fa-solid fa-location-dot"></i></Link>


</div>

 </div>

{/* Copy Right Part */}
<div className=" h-[30%] bg-[rgba(45,45,45,3)] w-full flex justify-center items-center text-[rgba(255,255,255,0.6)]">
    <p><i class="fa-regular fa-copyright"></i> <span>Copyright : almasroorhstl.vercel.app</span> </p>
</div>


</footer> 
    </>)
}
