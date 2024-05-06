import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./index.css"
import Signup from "./pages/signup"
function App() {

  return (
    <BrowserRouter>
      <Routes>
     
   
       <Route path="/signup" element={<Signup/>}></Route>
      
      </Routes>
    
     </BrowserRouter>
    
  )
}

export default App
