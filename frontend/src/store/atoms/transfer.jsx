import { atom } from "recoil";

const toAtom=atom({
    key:"toAtom",
    default:""

})
const valueAtom=atom({
    key:"amountAtom",
    default:0

})
const toUserNameAtom=atom({
        key:"toUserNameAtom",
        default:""
})
export{
    toAtom,valueAtom,toUserNameAtom
}