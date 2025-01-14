import React from 'react'
import Nav from '../components/Nav'
import Logo from '../components/Logo'

export default function Register() {
    const stars = [0,1,2,3,4];

  return (<>
  <div className="min-h-screen h-screen w-full bg-black">
{/* Logo */}

<div className="h-[90px] pl-5 md:pl-0 md:h-[110px] full select-none md:w-full flex justify-center items-center pt-3 md:pt-5 flex-col ">


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




<h1 className='text-halfYellow  text-center text-2xl md:text-4xl font-[200] uppercase  md:my-4' >registeration form</h1>

  </div>


</>  )
}
