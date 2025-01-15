import React from 'react'
import cards from "../JSON/card.json"

export default function Grid() {
  return (<>
<div class=" min-h-screen h-auto bg-black sm:grid-cols-2 grid xs:grid-cols-1 md:grid-cols-4 gap-4 p-6">
{
    cards.map((card,i)=>{
return(<>
<div key={card?.id} className="h-[300px] p-1">

<figure  className='h-[240px] w-full grid-card-figure '>
    <img className='h-[240px] w-full' src={card?.img} alt="" />
</figure>
<div className=" flex gap-3 h-[60px] ">
{/* gif */}

<figure className='h-full  flex items-center' >
    <div className="md:h-[50px] md:w-[50px] h-[40px] w-[40px]  rounded-full bg-halfYellow">
<img className='md:h-[50px] md:w-[50px] h-[40px] w-[40px]  rounded-full' src={card?.gifs} alt="" />

    </div>
</figure>

<div className="h-full  flex flex-col justify-center items-center ">
    <h1 className={`text-white ${card?.style} ` } >{card?.text}</h1>
    <span className='bg-halfYellow h-[2px] m1-3 w-1/2 mx-auto' ></span>
</div>
</div>
</div>
</>)

    })
}
</div>
</>  )
}


