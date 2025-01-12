import React from 'react'
import { Link } from "react-router-dom"

export default function Nav() {

    const stars = [0,1,2,3,4]
  return (<>

<nav className="h-[150px] md:h-[170px]  flex justify-between md:flex-col items-center  w-full bg-black">

{/* Logo Portion */}

<div className="h-full  md:h-[110px] w-[70%] select-none md:w-full flex justify-center items-center pt-3 md:pt-5 flex-col ">


{/* stars */}

<div className=" flex items-center  gap-1 relative top-3 ">
{
    stars.map((_,i)=>{
        return(<>
        <span  className='clipy-star md:h-[25px] md:w-[25px] h-[20px] w-[20px] ' ></span>
        </>)
    })
}
</div>
{/* name */}
<div className="">
    <h1 className='text-center font-sans text-appWhite md:text-[40px] text-[33px] uppercase' >Al masroor </h1>
    <h2 className='text-white6 md:text-[28px] text-[23px] font-arboret font-[200] md:font-[100] text-center relative md:bottom-5 bottom-4 ' >Royal Hostel Larkana</h2>
</div>



</div>

{/* Links BTN Mobile */}
<button className='h-[50px] w-[50px] bg-[#727272]  mr-4 text-[30px]  rounded-sm md:hidden ' ><i class="fa-solid fa-bars-staggered text-appWhite  "></i></button>

{/* Links Portion Desktop */}
<div className=" text-white6 text-[25px] mb-2 mt-4 hidden md:flex justify-center items-center ">

<ul className='flex justify-center items-center gap-9' >


{
    Links.map((l,i)=>{
        return(<>
        <Link to={l.to} >
        <li key={l.id} class="relative inline-block hover:text-appWhite after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-appYellow after:transition-all after:duration-300 hover:after:w-full" >{l.text}</li></Link>
        </>)
    })
}


    </ul>    
<div className="text-appYellow ml-9"><i class="fa-brands fa-whatsapp"></i></div>
</div>



</nav> 










  </>
  )
}

const Links = [
    {
        id: 0,
        text:"Home",
        to:"/",
    },
    {
        id: 1,
        text:"About",
        to:"/about",
    }, 
    {
        id: 2,
        text:"Book",
        to:"/book",
    },
    {
        id: 3,
        text:"Contact",
        to:"/contact",
    },
]