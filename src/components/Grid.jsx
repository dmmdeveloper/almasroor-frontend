import React from 'react'

export default function Grid() {
  return (<>



<div class=" min-h-screen h-auto bg-black sm:grid-cols-2 grid xs:grid-cols-1 md:grid-cols-4 gap-4 p-6">
{
    cards.map((card,i)=>{
return(<>
<div className="h-[300px]">
<figure className='p-1' >
    <img className='h-[240px] w-full' src={card?.img} alt="" />
</figure>
<div className=" flex gap-3 h-[60px] ">
{/* gif */}
<figure className='h-full flex items-center' >
<img className='md:h-[50px] md:w-[50px] h-[40px] w-[40px]  rounded-full' src={card?.gifs} alt="" />
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


const cards = [
  
    {

        id: 0,
        text:"Prime Location Of Sachal lrk",
        img:"https://res.cloudinary.com/dtqli9uge/image/upload/v1736707529/786-al-masroor/ahbhreedysytuq46ulp2.png",
        gifs :"https://res.cloudinary.com/dtqli9uge/image/upload/v1736711074/786-al-masroor/gjbgkrcmevsd6ekavqri.gif",
        style :" text-[18px]"
    
    },
    {
        id: 1,
        text:"Clean Environment",
        img:"https://res.cloudinary.com/dtqli9uge/image/upload/v1736707526/786-al-masroor/iwzijg3aqhfjlsoav4o3.webp",
        gifs :"https://res.cloudinary.com/dtqli9uge/image/upload/v1736711075/786-al-masroor/siob00murjfx40hjov0j.gif",
        style :" text-[25px] md:text-[27px]"
    },
{
    id: 2,
    text:"Chill Environment",
    img:"https://res.cloudinary.com/dtqli9uge/image/upload/v1736707526/786-al-masroor/kvfdafgkzjrdnqcdzq0h.webp",
    gifs :"https://res.cloudinary.com/dtqli9uge/image/upload/v1736711338/786-al-masroor/ziiofxlncxfjetmmilpd.gif",
    style :" text-[25px] md:text-[30px] "

},
{
    id: 3,
    text:"Filtered Water",
    img:"https://res.cloudinary.com/dtqli9uge/image/upload/v1736707526/786-al-masroor/wxysknf5v74ergw2lld7.png",
    gifs :"https://res.cloudinary.com/dtqli9uge/image/upload/v1736711073/786-al-masroor/nkhuw1casgbzv1wtacwg.gif",
    style :" text-[27px] md:text-[30px] "

},
{
    id: 4,
    text:"24/7 Electricity",
    img:"https://res.cloudinary.com/dtqli9uge/image/upload/v1736707526/786-al-masroor/easupo9qvjwr8qscefui.webp",
    gifs :"https://res.cloudinary.com/dtqli9uge/image/upload/v1736711073/786-al-masroor/dcacjqjafi6afq2pmjqp.gif",
    style :" text-[27px] md:text-[30px] "

},

{
    
    id: 5,
    text:"24/7 Wi-Fi",
    img:"https://res.cloudinary.com/dtqli9uge/image/upload/v1736707529/786-al-masroor/w4lz1spn6lgkd9nxr9pk.png",
    gifs :"https://res.cloudinary.com/dtqli9uge/image/upload/v1736710383/786-al-masroor/vxacgyxjbgricjw5ccho.gif",
    style :" text-[30px] md:text-[33px] ml-3 "

},
{
    id: 6,
    text:"CCTV Cameras ",
    img:"https://res.cloudinary.com/dtqli9uge/image/upload/v1736707529/786-al-masroor/mfwfsnhr217joihylcaz.png",
    gifs :"https://res.cloudinary.com/dtqli9uge/image/upload/v1736711075/786-al-masroor/ptmoha3xraszvnpcsubi.gif",
    style :" text-[30px] md:text-[33px] "
},
{
    id: 7,
    text:"Parking",
    img:"https://res.cloudinary.com/dtqli9uge/image/upload/v1736707606/786-al-masroor/pubsacgidwc7ibj4marz.jpg",
    gifs :"https://res.cloudinary.com/dtqli9uge/image/upload/v1736711073/786-al-masroor/fay3ic3ykdtm2xoqu38v.gif",
    style :" text-[30px] md:text-[33px] ml-5 "
},
{
    id: 8,
    text:"Alert Team",
    img:"https://res.cloudinary.com/dtqli9uge/image/upload/v1736707529/786-al-masroor/symcfrpdnukeeaz4bszh.jpg",
    gifs :"https://res.cloudinary.com/dtqli9uge/image/upload/v1736711075/786-al-masroor/lmgabldunyv7n51mbbpf.gif",
    style :" text-[30px] md:text-[33px] ml-5 "
},

]