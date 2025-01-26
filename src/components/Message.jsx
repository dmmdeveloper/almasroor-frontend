import React from 'react'

export default function Message() {
  return (<>

<div className="border min-h-[200px] h-auto mx-auto w-[90%]  md:w-[650px] md:p-5 p-3 rounded-md bg-halfBlack border-[#AA8667] ">

{/* email name div */}

<div className="flex w-full gap-5 md:flex-row flex-col ">
<input type="text" placeholder='Name' className='flex-1 p-2 bg-halfBlack border-halfYellow border text-xl text-halfYellow focus:border-halfYellow focus:outline placeholder:text-halfYellow focus:bg-[#aa866717] ' />
<input type="email" placeholder='Em@il' className='flex-1 p-2 bg-halfBlack border-halfYellow border text-xl text-halfYellow focus:border-halfYellow focus:outline placeholder:text-halfYellow focus:bg-[#aa866717] ' />
</div>

{/* Subject  */}
<div className=" mt-5">
<input type="text" placeholder='Subject' className='w-full  p-2 bg-halfBlack border-halfYellow border text-xl text-halfYellow focus:border-halfYellow focus:outline placeholder:text-halfYellow focus:bg-[#aa866717]' />
</div>


{/* Message */}
<div className="mt-5">
    <textarea className='bg-halfBlack w-full min-h-24 resize-none border border-halfYellow focus:border-halfYellow focus:outline-none text-xl p-2 placeholder:text-halfYellow text-halfYellow focus:bg-[#aa866717] ' name="" id="" placeholder='Message' ></textarea>
</div>



{/* Submit BTN */}
<div className=" text-end  mt-1">
<button className='text-halfYellow text-xl uppercase hover:text-white duration-150' >send</button>

</div>

</div>


</>  )
}
