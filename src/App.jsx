import { Route, Routes } from "react-router-dom";
import { AppContextProvider } from "./context/Appcontext";
import Home from "./pages/Home";
import { useEffect } from "react";
import Register from "./pages/Register";


function App(params) {

  const hello = ()=>{
    alert()
  }
  
useEffect(()=>{
  // hello()
 }  , [])

return(<>
<AppContextProvider value={{hello}} >


  <Routes>
<Route path="/" element = {<Home/>}  /> 
<Route path="/register" element = {<Register/>} />


  </Routes>

</AppContextProvider>
</>)
}
export default App;



