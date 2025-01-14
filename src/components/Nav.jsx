import React, { useEffect, useRef, useState } from 'react'
import { Link } from "react-router-dom"
import Logo from './Logo.jsx';

export default function Nav() {

    const [showNav , setShowNav]=useState(false);
    const navRef = useRef("");
    const btnRef = useRef("")


const clzNavClickOutside = (e)=>{

if(navRef.current && btnRef.current && !(navRef.current.contains(e.target) || btnRef.current.contains(e.target)))  {
    setShowNav(false);
}
}

useEffect(()=>{
    window.addEventListener("touchstart" , clzNavClickOutside)
    window.addEventListener("mousedown", clzNavClickOutside)
} , [showNav])







  return (<>

<nav className="h-[150px] md:h-[170px]  flex justify-between md:flex-col items-center  w-full bg-black">


{/* Logo Portion */}

<Logo />

{/* Links BTN Mobile */}
<button ref={btnRef} onClick={()=>setShowNav(!showNav)} className={`h-[50px] z-30 w-[50px] ${showNav ? "bg-[#2d2c2c]":"bg-[#727272]"}   mr-4 text-[30px]  rounded-sm md:hidden `} >
    {
        showNav ?
        <i class="fa-solid fa-xmark text-appWhite"></i>:
        <i class="fa-solid fa-bars-staggered text-appWhite  "></i>
    }
    
    </button>

{/* Links Portion Desktop */}
<div  className=" text-white6 text-[25px] mb-2 mt-4 hidden md:flex justify-center items-center ">



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
<Link to={"https://wa.me/+923193291955"} className="text-appYellow ml-9"><i class="fa-brands fa-whatsapp"></i></Link>
</div>
</nav> 

{
    showNav? 
<div className="h-screen w-full bg-[#0000002c] z-10 fixed top-0">

<div ref={navRef} className={`${showNav?"mobile-nav-open":"mobile-nav"} z-40 `}>

<ul className='text-appWhite z-50 p-3 flex items-center w-full flex-col gap-5 ' >

{
    Links.map((l,i)=>{
        return(<>
        
        <Link key={l.id} to={l.to} ><li className='font-merriweather text-2xl' >{l.text}</li></Link>
        </>)
    })
}
</ul>

<div className=" mt-3 text-center ">
<Link to={"https://wa.me/+923193291955"}  className='bg-appYellow text-white px-5 py-2 rounded-sm text-xl'  > <i class="fa-brands fa-whatsapp"></i> Chat </Link>
</div>

</div>
</div>
:""
}
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
        text:"Register",
        to:"/register",
    },
    {
        id: 3,
        text:"Contact",
        to:"/contact",
    },
]