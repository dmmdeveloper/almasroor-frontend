import React from 'react';
import Nav from '../components/Nav';
import Carousel from '../components/Carousel';
import Grid from '../components/Grid';



export default function Home() {
  return (<>
  <div className='bg-black' > 
    <Nav/>
<Carousel/>

{/* Grid */}
<h1 className='text-halfYellow text-center mt-[50px] text-3xl mb-7' >Why We Join ?</h1>

<Grid/>

  </div>
  </>)

}
