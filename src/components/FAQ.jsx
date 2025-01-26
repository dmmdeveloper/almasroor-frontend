import React, { useState } from 'react'
import faqs from "../JSON/faqs.json"



export default function FAQ() {
    
    const [index , setIndex]= useState(null)
  return (<>
  <section className="min-h-screen h-auto bg-black mt-9 w-[90%] md:w-[70%] mx-auto text-white ">
    <h1 className='text-halfYellow text-2xl md:text-3xl' >Frequently Asked Questions</h1>
<div className="mt-4">
{
    faqs.map((faq,i)=>{

return(<>

    {/* item */}
    <div key={faq.id}  data-aos="flip-down" className="">
        {/* Questions */}
        <div  onClick={()=>setIndex(faq.id === index ? null:faq.id)} className='bg-halfBlack p-2 md:p-3 mt-2 text-[20px] md:text-2xl hover:bg-[#3a3939] duration-200 flex justify-between items-center cursor-pointer ' >
            <h1>
          {faq.question}
            </h1>
            <button className={` select-none ${index === faq.id ?"-rotate-45 duration-150":"rotate-0 duration-150"} md:text-5xl text-4xl font-[200]`} >+</button>
            </div>
        {/* ans */}
        <article className={`${index === faq.id?"faq-ans-open":"faq-ans"} bg-halfBlack text-[20px] p-2 md:text-2xl md:p-3 mt-1`} >
            {faq.answer}
        </article>
    </div>
</>)
    })
}



    </div>







  </section>


</>  )
}

