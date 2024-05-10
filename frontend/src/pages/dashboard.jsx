import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import Users from "../components/User"
import Button from "../components/Button"
export default function Dashboard(){
    return <div>
        <Appbar></Appbar>
        <Balance balance={3000}></Balance>
        <Users></Users>
        
    </div>


}