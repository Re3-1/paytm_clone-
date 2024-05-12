import Button from "../components/Button"
import InputBox from "../components/Inputbox"
import Heading from "../components/heading"
import axios from "axios"
import Subheading from "../components/subHeading"
import ButtonWarning from "../components/ButtonWarning"
import { useRecoilState } from "recoil" 
import { useNavigate } from "react-router-dom"

import {usernameAtom ,passwordAtom} from "../store/atoms/userInfo"
function Signin(){
const [password,setPassword]=useRecoilState(passwordAtom);
const navigate=useNavigate();
const [username,setUsername]=useRecoilState(usernameAtom);
return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex justify-center  flex-col  ">
        <div className="bg-white text-center w-80 rounded-lg  shadow-md">
        <Heading header="Sign In"></Heading>
        <Subheading sh="Enter Your Information To Login"></Subheading>
       
        <InputBox placeHolder="RajuRastogi@hemail.com" label="Email"  onChange={(e)=>{
                setUsername(e.target.value)
        }}></InputBox>
        <InputBox placeHolder="RajuMaju" label="Password" onChange={(e)=>{
                setPassword(e.target.value)
        }}></InputBox>
        <Button label="Sign In" onClick={async()=>{
              const res=await  axios.post("http://localhost:3001/api/v1/user/signin",{
                        username,
                        password
                })
                localStorage.setItem("token",res.data.token)
                navigate("/dashboard");
        }
    
        }></Button>
        <ButtonWarning label="Sign Up" word="Don't have an account?   " to="/signup"/>
                 </div>
        </div>
</div>


}

export default Signin