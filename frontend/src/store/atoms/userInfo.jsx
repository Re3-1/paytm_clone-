import {atom} from "recoil"

const firstNameAtom=atom({
    key:"firstNameAtom",
    default:""
})
const lastNameAtom=atom({
    key:"lastNameAtom",
    default:""
})
const usernameAtom=atom({
    key:"usernameAtom",
    default:""
})
const passwordAtom=atom({
    key:"passwordAtom",
    default:""
})

export {firstNameAtom,lastNameAtom,usernameAtom,passwordAtom}
