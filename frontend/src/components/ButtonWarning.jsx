 import {Link} from "react-router-dom"
function ButtonWarning({label,to,word}){
  
   
    return <div className="flex text-black text-xs justify-center pb-5 pt-2 ">
        <div>{word} </div>
        
        <Link className="underline underline-offset-2 cursor-pointer pl-1 " to={to}> {label}</Link>


    </div>

}
export default ButtonWarning;