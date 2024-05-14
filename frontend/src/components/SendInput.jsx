function SendInputBox({placeHolder,label,onChange}){

    return <div>
        <div className="flex text-lg font-medium pt-3 pb-3 pl-2  ">{label}</div>
        <input onChange={onChange} className="  flex text-sm font-medium w-75 ml-2 mb-3" placeholder={placeHolder}></input>
    
    </div>
    
    
    }
    export default SendInputBox;