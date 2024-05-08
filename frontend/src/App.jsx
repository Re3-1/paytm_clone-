import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./index.css"
import Signup from "./pages/signup"
import Signin from "./pages/signin"

function App() {

  return (
    <BrowserRouter>
      <Routes>
     
   
       <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/signin" element={<Signin></Signin>}/>
      </Routes>
    
     </BrowserRouter>
    
  )
}

export default App
