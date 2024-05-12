import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useSetRecoilState } from "recoil";
import { toAtom, toUserNameAtom } from "../store/atoms/transfer";
import { usernameAtom } from "../store/atoms/userInfo";


export default function ShowUser({value}){
    let initials;
    const to=useSetRecoilState(toAtom);
    const toName=useSetRecoilState(toUserNameAtom)
    const navigate=useNavigate();
    var showdiv=false;
    
    if(value.username){
        initials=value.firstname[0]
        showdiv=true;
    }
    function SendPage(){
        to(value._id);
        toName(value.username);
        navigate("/sendMoney")


    }
   
    return <div>
      {showdiv &&  <div className="flex justify-between">
            <div className="flex">
                <div className="h-12 w-12 text-white m-2 inline-flex items-center justify-center p- rounded-full font-semibold text-xl bg-gray-600 ">{initials}</div>
                <div className="inline-flex items-center font-medium ">{value.firstname+" "+value.lastname}</div>
            </div>

            <Button label={"Send Money"} onClick={SendPage}></Button>
        </div>
}

    </div>
}