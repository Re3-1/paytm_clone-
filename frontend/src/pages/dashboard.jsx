import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import Users from "../components/User"
import Button from "../components/Button"
import axios from "axios";
import { useState } from "react";
import AllUsers from "../components/AllUsers";
export default function  Dashboard(){
    const [balance,setbalance]=useState(0);
    const token =localStorage.getItem("token");
    async function  retbalance(){
        const res=await axios.get("http://localhost:3001/api/v1/account/balance",{
        headers:{
            "authorization":"Bearer "+token
        }

    })
    
    setbalance(res.data.balance);

}
retbalance();

    return <div>
        <Appbar></Appbar>
        <Balance  balance={balance}></Balance>
        <Users></Users>
        <AllUsers></AllUsers>
    </div>


}