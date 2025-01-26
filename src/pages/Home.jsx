import React from 'react';
import Nav from '../components/Nav';
import Carousel from '../components/Carousel';
import Grid from '../components/Grid';
import FAQ from '../components/FAQ';
import Achievements from '../components/Achievements';
import Members from '../components/Members';
import Message from '../components/Message';
import Footer from '../components/Footer';



export default function Home() {
  return (<>
  <div className='bg-black' > 
    <Nav/>
<Carousel/>

{/* Grid */}
<h1 className='text-halfYellow text-center mt-[50px] text-3xl mb-7' >Why We Join ?</h1>
<Grid/>

{/* FAQ */}
<FAQ/>

{/* Our Achievements */}
<h1 className='text-halfYellow md:w-[70%] w-[90%] text-center mx-auto  text-2xl md:text-3xl mb-7' >Our Achievements</h1>
<Achievements/>


{/* Members */}
<h1 className='text-halfYellow md:w-[70%] w-[90%] text-center mx-auto  text-2xl md:text-3xl mb-7' >Our Members</h1>
<Members/>

{/* Touch US */}
<h1 className='text-halfYellow md:w-[70%] w-[90%] text-center mx-auto  text-2xl md:text-3xl mb-7' >Touch US</h1>
<Message/>

<Footer/>
  </div>
  </>)

}
