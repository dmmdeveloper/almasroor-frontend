import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
<footer  className='text-white h-[100px] mt-12 ' >
{/* Links Div */}
<div className="h-[70%] w-full">


<div className="w-[270px] mx-auto h-full flex  gap-5">
<Link className="h-[45px] w-[45px] text-[30px] cursor-pointer border-[2px] flex justify-center items-center rounded-full hover:bg-appYellow duration-300"><i class="fa-brands fa-whatsapp"></i></Link>
<Link className="h-[45px] w-[45px] text-[30px] cursor-pointer border-[2px] flex justify-center items-center rounded-full hover:bg-appYellow duration-300"><i class="fa-brands fa-instagram"></i></Link>

<Link className="h-[45px] w-[45px] text-[30px] cursor-pointer border-[2px] flex justify-center items-center rounded-full hover:bg-appYellow duration-300"><i class="fa-brands fa-facebook-f"></i></Link>
<Link className="h-[45px] w-[45px] text-[30px] cursor-pointer border-[2px] flex justify-center items-center rounded-full hover:bg-appYellow duration-300"><i class="fa-brands fa-github"></i></Link>



</div>

 </div>

{/* Copy Right Part */}
<div className=" h-[30%] bg-[rgba(45,45,45,3)] w-full flex justify-center items-center text-[rgba(255,255,255,0.6)]">
    <p><i class="fa-regular fa-copyright"></i> <span>Copyright : almasroorhstl.vercel.app</span> </p>

</div>


</footer> 
    </>)
}
