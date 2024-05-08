import Button from "../components/Button"
import InputBox from "../components/Inputbox"
import Heading from "../components/heading"
import Subheading from "../components/subHeading"
import axios from "axios"
import ButtonWarning from "../components/ButtonWarning"
import {  useRecoilValue, useSetRecoilState } from "recoil"
import {firstNameAtom ,lastNameAtom,usernameAtom,passwordAtom} from "../store/atoms/userInfo"
function Signup(){
const setFirstName=useSetRecoilState(firstNameAtom);
const setLastName=useSetRecoilState(lastNameAtom);
const setUsername=useSetRecoilState(usernameAtom);
const setPassword=useSetRecoilState(passwordAtom);
const firstname=useRecoilValue(firstNameAtom);
const lastname=useRecoilValue(lastNameAtom);
const username=useRecoilValue(usernameAtom);
const password=useRecoilValue(passwordAtom);
return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex justify-center  flex-col  ">
        <div className="bg-white text-center w-80 rounded-lg  shadow-md">
        <Heading header="Sign Up"></Heading>
        <Subheading sh="Enter Your Information To Create An Account"></Subheading>
        <InputBox placeHolder="Raju" label="First Name" onChange={(e)=>{
                setFirstName(e.target.value)
        }}></InputBox>
        <InputBox placeHolder="Rastogi" label="Last Name" onChange={(e)=>{
                setLastName(e.target.value)
        }}></InputBox>
        <InputBox placeHolder="RajuRastogi@hemail.com" label="Email" onChange={(e)=>{
                setUsername(e.target.value)
        }}></InputBox>
        <InputBox placeHolder="RajuMaju" label="Password"onChange={(e)=>{
                setPassword(e.target.value)
        }}></InputBox>
        <Button label="Sign Up" onClick={async()=>{
                const response=  await axios.post("http://localhost:3001/api/v1/user/signup",{
                        username,        
                        firstname,
                        lastname,
                        password
                })

                localStorage.setItem("token",response.data.token)
        }}></Button>
        <ButtonWarning label="Sign In" word="Already have an account? " to="/signin"/>
                 </div>
        </div>
</div>


}

export default Signup