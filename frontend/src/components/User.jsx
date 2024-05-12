import axios from "axios";
import { useSetRecoilState } from "recoil";
import userarrAtom from "../store/atoms/users";
import { useEffect } from "react";

export default function Users(){
    const usersAtom =useSetRecoilState(userarrAtom);
    const token=localStorage.getItem("token")
    
   async function changeFunction(e){
       const userpara=e.target.value;
        const users=await axios.get("http://localhost:3001/api/v1/user/bulk?filter="+userpara,{
            headers:{
                "authorization":"Bearer "+token
            }
    
        });
        
        usersAtom(users.data.user);



    }
    return <div className="p-4">
        <div className="font-bold text-xl my-2" >Users:</div>
        <div className="flex  border-black-700 ">
        <svg className="w-6 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
</svg>

        <input onChange={changeFunction} className="w-full ml-2 text-lg h-8" placeholder="Search User"></input>
        </div>

    </div>


}