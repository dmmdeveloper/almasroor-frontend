import React from 'react'
import Logo from '../components/Logo'
import { Link } from 'react-router-dom'

export default function About() {
const stars = [1,2,3,4,5]

  return (
<>
<div className="min-h-screen w-full bg-black">
<Logo/>
{/* Heading */}
<div className="text-white text-center text-2xl uppercase mt-3 underline decoration-appYellow underline-offset-4 ">About</div>

{/*  */}
<section className='min-h-[500px] h-auto w-[90%] mx-auto md:flex-row flex-col flex justify-between items-center mt-3 ' >

{/* left Side */}
<div className="h-auto md:w-1/2 w-full pb-4 flex justify-start items-center  md:mt-0 mt-4 flex-col ">


<figure className='p-1 border-[2px] rounded-full' >
<img className='md:h-[300px] md:w-[300px] h-[200px] w-[200px] rounded-full' src="https://res.cloudinary.com/dfyfvcrkd/image/upload/v1729413839/al-maroo-hostel/m8wxr78xnihuiunainhg.png" alt="" />
</figure>
<h2 className='text-white text-2xl' >Engr Masroor Sodhar</h2>
<h3 className='text-appYellow text-2xl' >Managing Director</h3>
<p className='text-white6  text-justify md:w-[70%] w-full  mx-auto mt-2' >Engr Masroor Sodhar is a project director of Al-Masroor Group of enterprises. He is Graduateed form Mehran University Science & Technology Jamshoro . Currently he is a writer & independent researcher in The Dawn, The Technology Times, & The Paradigm Shift, Apart from this, he is a passionate entrepreneur.</p>
{/* Conatct Icons  */}

<div className= "w-full flex justify-center  gap-5 md:mt-4  mt-6">

<Link target='_blank' to={"https://wa.me/+923313190104"} className= 'text-3xl h-[40px] w-[40px] border-[2px] rounded-full  flex justify-center items-center text-white hover:bg-appYellow duration-300 ' ><i class="fa-brands fa-whatsapp"></i></Link>

<Link target='_blank' to={"https://www.instagram.com/masroor_sodhar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"} className='text-3xl h-[40px] w-[40px] border-[2px] rounded-full  flex justify-center items-center text-white hover:bg-appYellow duration-300 ' ><i class="fa-brands fa-instagram"></i></Link>

<Link  to={"tel:+923313190104"} target='_blank' className= 'text-[25px] h-[40px] w-[40px] border-[2px] rounded-full  flex justify-center items-center text-white hover:bg-appYellow duration-300 ' ><i class="fa-solid fa-phone"></i></Link>




</div>


</div>


{/* line */}

<div className="flex md:flex-col md:h-[400px] h-[3px]  flex-row justify-center items-start md:items-center  md:w-[3px] w-full gap-[1px] ">
<div className="rhombus-sahpe"></div>
<div className="md:h-full md:mt-0 mt-3 h-[3px]  md:my-auto mx-auto md:w-[3px] w-full bg-white6"></div>
<div className="rhombus-sahpe"></div>

</div>

{/* right Side */}
<div className="h-auto md:w-1/2 w-full pb-4 flex justify-start items-center  mt-9 md:mt-0 flex-col ">

<figure className='p-1 border-[2px] rounded-full' >
<img className='md:h-[300px] md:w-[300px] h-[200px] w-[200px] rounded-full' src="https://static.wikia.nocookie.net/the-goon-house/images/7/7d/Ffxjnceu7vf81.png/revision/latest?cb=20240612035502" alt="" />
</figure>
<h2 className='text-white text-2xl' >Dost Muhammad</h2>
<h3 className='text-appYellow text-xl'> Incharge & Developer </h3>
<p className='text-white6  text-justify md:w-[70%] w-full  mx-auto mt-2' >I am Dost Muhammad, the Incharge of Al Masroor Royal Hostel in Larkana. Beyond my managerial role, I am skilled in MERN Stack development, crafting dynamic and efficient web solutions. My expertise lies in creating innovative applications tailored to modern needs.</p>

{/* Conatct Icons  */}

<div className= "w-full flex justify-center  gap-5 md:mt-4  mt-6">

<Link target='_blank' to={"https://wa.me/+923193291955"} className= 'text-3xl h-[40px] w-[40px] border-[2px] rounded-full  flex justify-center items-center text-white hover:bg-appYellow duration-300 ' ><i class="fa-brands fa-whatsapp"></i></Link>

<Link target='_blank' to={"https://github.com/dmmdeveloper"} className='text-3xl h-[40px] w-[40px] border-[2px] rounded-full  flex justify-center items-center text-white hover:bg-appYellow duration-300 ' ><i class="fa-brands fa-github"></i></Link>

<Link  to={"tel:+923193291955"} target='_blank' className= 'text-[25px] h-[40px] w-[40px] border-[2px] rounded-full  flex justify-center items-center text-white hover:bg-appYellow duration-300 ' ><i class="fa-solid fa-phone"></i></Link>




</div>

</div>


</section>



<div className=" h-[30%] bg-[rgba(45,45,45,3)] w-full flex justify-center items-center text-[rgba(255,255,255,0.6)]">
    <p><i class="fa-regular fa-copyright"></i> <span>Copyright : almasroorhstl.vercel.app</span> </p>
</div>
</div>
</>  )
}
