import { useRecoilValue, useSetRecoilState } from "recoil";

import Heading from "../components/heading";
import { toAtom, toUserNameAtom, valueAtom } from "../store/atoms/transfer";
import Subheading from "../components/subHeading";
import SendButton from "../components/SendButton";
import axios from "axios";
import { useState } from "react";
import SendInputBox from "../components/SendInput";

export default function SendMoney(){
    const amount=useSetRecoilState(valueAtom);
    const value=useRecoilValue(valueAtom);
    const [response,changeRespose]=useState("")
    const to=useRecoilValue(toAtom);
     const toName=useRecoilValue(toUserNameAtom);
    function MoneyChange(e)
    {
        amount(e.target.value);

    }
    async function sended( ){
       const res= await axios.post("http://localhost:3001/api/v1/account/transfer",{
            to,
            "amount":value
            

        },{


            headers:{
                "authorization":"Bearer "+localStorage.getItem("token")
            }

        } )
        changeRespose(res.data.msg)
    }
    return <div className="bg-slate-200 h-screen flex justify-center">
            <div className="flex flex-col justify-center  ">
                <div className="text-center w-80 bg-white rounded-lg shadow-md">
                    <Heading header={"Transfer"}></Heading>
                   <div className="font-bold "> <Subheading sh={"Send Money to " +toName}></Subheading></div>
                    <div className="bg-white"><SendInputBox label={"Amount:"} placeHolder={"₹"} onChange={MoneyChange}></SendInputBox></div> 
                   <div><SendButton label={"Send"} onClick={sended}></SendButton></div> 
                    <div className="m-3 font-bold">{response  }</div>
                </div>
            </div>
    </div>




}