import React from 'react'
import Logo from '../components/Logo'
import {Link} from "react-router-dom"

export default function Contact() {
  return (<>

  <div className="min-h-screen h-auto w-full bg-black">
<Logo/>

<section style={{backgroundImage:"url(https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" , backgroundPosition:"center" , backgroundRepeat:"no-repeat" , backgroundSize:"cover" }} className='md:h-[200px] h-[100px]  mt-6 md:mt-3 w-full bg-black relative'  >
<div className="h-full w-full bg-[rgba(0,0,0,0.5)] top-0 left-0 right-0 bottom-0 flex justify-center items-center text-white text-3xl md:text-6xl" >  Contact Us </div>
</section>

<div class=" min-h-screen h-auto bg-black sm:grid-cols-2 grid xs:grid-cols-1 md:grid-cols-4 gap-4 p-6">

<div className=" md:h-[300px] h-[200px] text-white flex justify-center items-center flex-col md:gap-7 gap-5">


<i class="fa-solid fa-phone text-appYellow md:text-7xl text-6xl"></i>

<h3 className='text-appYellow md:text-3xl text-2xl' >Call Today</h3>
<Link  target='_blank' to={"tel:+923193291955"} className='font-bold md:text-xl text-[17px] hover:opacity-85 underline decoration-appYellow duration-200' >+92 3193291955</Link>

</div>


<div className=" md:h-[300px] h-[200px] text-white flex justify-center items-center flex-col md:gap-3 gap-2">


<i class="fa-solid fa-location-dot text-appYellow md:text-7xl text-6xl"></i>

<h3 className='text-appYellow md:text-3xl text-2xl' >Adress</h3>
<p className=' md:text-xl text-[17px]  w-[70%] mx-auto text-center' >Main Sachal Colony Near Nova Academy Larkanan</p>
<Link  target='_blank' to={"https://maps.app.goo.gl/gvqLZXKyGgYHVyHA7"} className='font-bold md:text-xl text-[17px] hover:opacity-85 underline decoration-appYellow duration-200' > <i class="fa-solid fa-location-arrow"></i> almasroor</Link>


</div>

<div className=" md:h-[300px] h-[200px] text-white flex justify-center items-center flex-col md:gap-7 gap-5">



<i class="fa-solid fa-envelope text-appYellow md:text-7xl text-6xl"></i>

<h3 className='text-appYellow md:text-3xl text-2xl' >Email US</h3>
<Link  target='_blank' to={"mailto:sodhar32@gmail.com"} className='font-bold md:text-xl text-[17px] hover:opacity-85 underline decoration-appYellow duration-200' >sodhar32@gmail.com</Link>


</div>


<div className=" md:h-[300px] h-[200px] text-white flex justify-center items-center flex-col md:gap-7 gap-5">


<i class="fa-solid fa-clock text-appYellow md:text-7xl text-6xl"></i>

<h3 className='text-appYellow md:text-3xl text-2xl' >Opening Hours</h3>
<p className=' md:text-xl text-[17px]  w-[70%] mx-auto text-center' >Mon-Fri : 10AM-05PM <br />Sat-Sun : 01PM - 06PM </p>

{/* <Link  target='_blank' to={"tel:+923193291955"} className='font-bold md:text-xl text-[17px] hover:opacity-85 hover:underline decoration-appYellow duration-200' >+92 3193291955</Link> */}


</div>



</div>




<div className=" h-[30%] bg-[rgba(45,45,45,3)] w-full flex justify-center items-center text-[rgba(255,255,255,0.6)]">
    <p><i class="fa-regular fa-copyright"></i> <span>Copyright : almasroorhstl.vercel.app</span> </p>
</div>

  </div>


</>  )
}
