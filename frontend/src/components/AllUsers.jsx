import { useRecoilValue } from "recoil"
import userarrAtom from "../store/atoms/users"
import ShowUser from "./Showuser";

export default function AllUsers(){
    const user=useRecoilValue(userarrAtom);
    return <div>
        <div >
        <div>{
            user.map((user,index)=>{
           
                return <ShowUser key={index} value={user}></ShowUser>
            })
            
            }</div>


        </div>


    </div>
}