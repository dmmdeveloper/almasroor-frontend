import React, { useRef, useState } from 'react'


export default function Register() {


    const stars = [0,1,2,3,4];

  return (<>
  <div className="min-h-screen h-auto w-full bg-black">
{/* Logo */}

<div className="h-[90px] pl-5 md:pl-0 md:h-[110px] full select-none md:w-full flex justify-center items-center pt-3  md:pt-5 flex-col ">


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

<form className=" min-h-96 w-[90%] md:w-[550px] font-abhyalibre font-[700] mx-auto border border-halfYellow p-4 rounded-sm text-white mt-4  ">


<h1 className='text-halfYellow font-arboret  text-2xl md:text-2xl font-[200] uppercase ' >Applicant data</h1>
<ApplicantData/>


<h1 className='text-halfYellow font-arboret  text-xl md:text-2xl font-[200] uppercase mt-5 ' >Institue/Employment Data</h1>
<InstitueData/>

<h1 className='text-halfYellow font-arboret  text-xl md:text-2xl font-[200] uppercase mt-5 ' >Relatives Data</h1>
<RelativesData/>





</form>













  </div>


</>  )
}



function ApplicantData() {




    const cnicRef = useRef("");
    const photRef = useRef("")

  return(<>
  


  <div className=" flex-col md:flex-row flex gap-1">

{/* text fields portion  60% */}
<div className=" w-full md:w-[60%] mt-5">


<div className="flex w-full items-center mt-2 ">


  <label className='font-abhyalibre w-[50%] text-[18px] md:text-xl md:w-[60%] flex-2 font-[700]  ' htmlFor="">Name Of Applicant</label>
  <input
  className="w-[50%] md:w-[40%] bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="text"
/>
</div>


<div className="flex w-full justify-between items-center mt-2">


  <label className='font-abhyalibre w-[40%] md:w-[35p%]  flex-1 font-[700] text-[20px] md:text-xl' htmlFor="">Father Name </label>
  <input
  className=" w-[60%] bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="text"
/>
</div>


<div className="flex w-full justify-between items-center mt-2">


  <label className='font-abhyalibre w-[30%] md:w-[30%] flex-2 font-[700] text-[20px] md:text-xl' htmlFor="">Contat No</label>
  <input
  className=" w-[70%] md:w-[70%] bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="number"
  min={0}
/>
</div>

<div className="flex w-full justify-between items-center mt-2">

  <label className='font-abhyalibre  w-[40%] md:w-[40%] font-[700] text-[20px] md:text-xl' htmlFor="">CNIC/B.Form </label>
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
  </>)
  
}


function InstitueData() {



  const [post , setPost] =  useState("Student")
console.log(post);


  return(<>
<div className=" text-xl mt-3 ">

  <div className=" flex md:flex-row md:items-center flex-col gap-2">

    <div  >
  <label htmlFor=""> I am </label>

  <select onChange={(e)=>setPost(e.target.value)} className='bg-halfBlack px-2 rounded-2xl' name="" id="">
    <option value="Student">Student</option>
    <option value="Employee">Employee</option>
  </select>
    </div>

    <div className='flex gap-1' >
<p className='text-[17px] w-[30%] mt-1' > {post=== "Student"? "Studied At":"Worked At"} </p>
<input
  className="w-[60%]  bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="text"
/>
  </div>
</div>
  
<div className='flex gap-1 mt-2' >
<p className='w-[50%] md:w-[30%]' >{ post=== "Student"?"Institue":"Office" } Contact</p>
<input
  className="w-[40%] md:w-[55%]  bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="number"
  min={0}
/>
  </div>



  </div>  
  </>)
  
}


function RelativesData() {

  const realtive1fileRef = useRef("")

  return(<>
<div className="">

<fieldset className='border border-[#B89F80] rounded-sm p-2' >
  <legend className=' font-arboret  text-xl md:text-xl font-[200] uppercase text-[rgba(255,255,255,0.61)]' >Relative A.</legend>


<div className="flex md:flex-row flex-col ">

  <div className='md:w-1/2 flex w-full  items-center' >
<label className='font-abhyalibre  text-[18px] md:text-xl flex-2 font-[700]  ' htmlFor="">Name </label>
  <input
  className="w-full md:w-[70%] bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="text"
/>
  </div>

  <select  className='bg-halfBlack px-2 md:w-1/2 w-full md:mt-0 mt-3 rounded-2xl' name="" id="">
    <option  value="">Relation</option>
    <option value="Employee">Father</option>
    <option value="Employee">Brother</option>
  </select>


</div>


<div className="flex md:flex-row flex-col mt-2 ">

  <div className='md:w-1/2 flex w-full  items-center' >
<label className='font-abhyalibre  text-[18px] md:text-xl flex-2 font-[700]  ' htmlFor="">Contact </label>
  <input
  className="w-full md:w-[70%] bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="number"/>
  </div>


  <div onClick={(e)=>{ realtive1fileRef.current.click()}} className="md:w-1/2 mt-2 flex w-full bg-halfBlack px-2 rounded-2xl items-center justify-between cursor-pointer">
    <span>upload cnic</span>
    <i class="fa-solid fa-arrow-up-from-bracket"></i>
    <input ref={realtive1fileRef} className='hidden' type="file" />
  </div>

</div>

</fieldset>





<fieldset className='border border-[#B89F80] rounded-sm p-2 mt-2 ' >
  <legend className=' font-arboret  text-xl md:text-[18px] font-[200] uppercase text-[rgba(255,255,255,0.61)]' >Relative b <span className='italic' >(optional) </span>  .</legend>


<div className="flex md:flex-row flex-col ">

  <div className='md:w-1/2 flex w-full  items-center' >
<label className='font-abhyalibre  text-[18px] md:text-xl flex-2 font-[700]  ' htmlFor="">Name </label>
  <input
  className="w-full md:w-[70%] bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="text"
/>
  </div>

  <select  className='bg-halfBlack px-2 md:w-1/2 w-full md:mt-0 mt-3 rounded-2xl' name="" id="">
    <option  value="">Relation</option>
    <option value="Employee">Father</option>
    <option value="Employee">Brother</option>
  </select>


</div>


<div className="flex md:flex-row flex-col mt-2 ">

  <div className='md:w-1/2 flex w-full  items-center' >
<label className='font-abhyalibre  text-[18px] md:text-xl flex-2 font-[700]  ' htmlFor="">Contact </label>
  <input
  className="w-full md:w-[70%] bg-black border-b-[1px] border-b-white focus:border-b-2 focus:border-b-white focus:outline-none relative bottom-2 text-white"
  type="number"/>
  </div>


  <div onClick={(e)=>{ realtive1fileRef.current.click()}} className="md:w-1/2 mt-2 flex w-full bg-halfBlack px-2 rounded-2xl items-center justify-between cursor-pointer">
    <span>upload cnic</span>
    <i class="fa-solid fa-arrow-up-from-bracket"></i>
    <input ref={realtive1fileRef} className='hidden' type="file" />
  </div>

</div>

</fieldset>






</div>


  </>)

  
}