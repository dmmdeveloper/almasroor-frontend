import React, { useRef } from 'react'


export default function Register() {
    const stars = [0,1,2,3,4];


    const cnicRef = useRef("");
    const photRef = useRef("")

  return (<>
  <div className="min-h-screen h-auto w-full bg-black">
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

<h1 className='text-halfYellow font-arboret  text-center text-2xl md:text-4xl font-[200] uppercase  md:my-4' >registeration form</h1>

<form className=" min-h-96 w-[90%] md:w-[550px] font-abhyalibre font-[700] mx-auto border border-halfYellow p-4 rounded-sm text-white mt-4 ">

<h1 className='text-halfYellow font-arboret  text-2xl md:text-2xl font-[200] uppercase ' >Applicant data</h1>

{/* Start Applicant Data Div */}
<div className=" flex-col md:flex-row flex gap-1">

{/* text fields portion  60% */}
<div className=" w-full md:w-[60%] mt-5">


<div className="flex w-full justify-between items-center mt-2 ">
  <label className='font-abhyalibre w-[55%] text-[20px] md:text-xl md:w-[60%] flex-2 font-[700]  ' htmlFor="">Name Of Applicant :</label>
  <input
  className="w-[45%] md:w-[40%] bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="text"
/>
</div>


<div className="flex w-full justify-between items-center mt-2">

  <label className='font-abhyalibre w-[40%] md:w-[35p%]  flex-1 font-[700] text-[20px] md:text-xl' htmlFor="">Father Name :</label>
  <input
  className=" w-[60%] bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="text"
/>
</div>


<div className="flex w-full justify-between items-center mt-2">

  <label className='font-abhyalibre w-[30%] md:w-[30%] flex-2 font-[700] text-[20px] md:text-xl' htmlFor="">Contat No  :</label>
  <input
  className=" w-[70%] md:w-[70%] bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="number"
  min={0}
/>
</div>

<div className="flex w-full justify-between items-center mt-2">
  <label className='font-abhyalibre  w-[40%] md:w-[40%] font-[700] text-[20px] md:text-xl' htmlFor="">CNIC/B.Form :</label>
  <input
  className="md:w-[60%] w-[60%] bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="text"
/>
</div>

{/* upload Fields */}
<div className="mt-2 w-full">

<div onClick={()=>{ cnicRef.current.click() }} className='bg-halfBlack w-full   cursor-pointer flex justify-between items-center text-[23px] md:text-xl px-2 md:px-4 hover:opacity-90 rounded-2xl pt-[2px] md:py-1'>

  <span  >
  upload cnic
  {/* when Field is loaded thed shows the file name */}
  </span>

  <i class="fa-solid fa-arrow-up-from-bracket mb-1 text-[20px] "></i>

</div>
<input ref={cnicRef} className='hidden' type="file" />
</div>


{/* Select  */}

<div className="mt-3">

<select className='bg-halfBlack w-full   cursor-pointer text-[20px] md:text-xl px-4 hover:opacity-90 rounded-2xl py-1' name="" id="">
<option value=""> Religion</option>
<option value=""> Muslim</option>
<option value="">Hindi</option>
</select>
</div>




</div>


{/* file field portion  40% */}
<div className="  w-full md:w-[40%] flex justify-center items-start md:mt-5 mt-3 md:items-center ">

<div onClick={()=>{ photRef.current.click()}} className="h-[200px] w-[150px]  hover:opacity-80 cursor-pointer bg-halfBlack rounded-2xl flex justify-center items-center flex-col gap-2 ">
<span className='text-xl text-[#ffffffab]' >Photo</span>
<i class="fa-solid fa-arrow-up-from-bracket text-3xl "></i>
</div>
<input type="file" className='hidden' ref={photRef} />
</div>







</div>











</form>













  </div>


</>  )
}
