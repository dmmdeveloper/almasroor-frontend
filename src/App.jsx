import { Route, Routes } from "react-router-dom";
import { AppContextProvider } from "./context/Appcontext";
import Home from "./pages/Home";
import { useEffect } from "react";


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


  </Routes>

</AppContextProvider>
</>)
}
export default App;



