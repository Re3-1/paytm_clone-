import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./index.css"
import Signup from "./pages/signup"
import Signin from "./pages/signin"
import Dashboard from "./pages/dashboard"
import SendMoney from "./pages/sendmoney"

function App() {

  return (
    <BrowserRouter>
      <Routes>
     
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
       <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/signin" element={<Signin></Signin>}/>
      <Route path="/sendMoney" element={<SendMoney></SendMoney>}/>

      </Routes>
    
     </BrowserRouter>
    
  )
}

export default App
