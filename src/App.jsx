import { Route, Routes, useLocation } from "react-router-dom";
import { AppContextProvider } from "./context/Appcontext";
import Home from "./pages/Home";
import { useEffect } from "react";
import Register from "./pages/Register";
import Logo from "./components/Logo";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {


  const location  = useLocation();

  const hello = ()=>{
    alert()
  }
useEffect(()=>{

  const titles = {
    "/":" Home | Al Masroor Royal Hostel Larkana",
    "/about" : "About | Al Masroor Royal Hostel Larkana",
    "/contact" :"Contact  | Al Masroor Royal Hostel Larkana",
    "/register" :"Regiter | Al Masroor Royal Hostel Larkana"

  }

 document.title = titles[location.pathname] || "Al Masroor Royal Hostel Larkana"


} , [location.pathname])

  
return(<>
<AppContextProvider value={{hello}} >

  <Routes>
<Route path="/" element = {<Home/>}  /> 
<Route path="/register" element = {<Register/>} />
<Route path="/about" element={<About/>} />
<Route path="/contact" element ={<Contact/>}/>


<Route path="*" element={<NotFound/>} />

  </Routes>

</AppContextProvider>
</>)
}
export default App;


function NotFound() {
return(<>
<div className="h-screen w-full bg-black">
<Logo/>
<div className="h-[80%] w-full  flex justify-center items-center ">


  <h1 className="text-white text-3xl md:text-5xl text-center " >
404 
<br />
Page Not Found
<br />
:)


  </h1>



</div>








</div>




</>)

  
}