import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./index.css"
import Signup from "./pages/signup"
import Signin from "./pages/signin"
import Dashboard from "./pages/dashboard"

function App() {

  return (
    <BrowserRouter>
      <Routes>
     
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
       <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/signin" element={<Signin></Signin>}/>
      </Routes>
    
     </BrowserRouter>
    
  )
}

export default App
