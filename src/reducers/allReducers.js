import { authenticateUser } from "../actions/actions";

let user = {
    userName: "admin",
    password: "12345"
}
let userAuthorised = false;
const setUser = (state =  user, action) =>{
    switch(action.type){
   case "userLogin" : return state;
   default: return state;
}
}

const authoriseUser = (state = userAuthorised, action) =>{
switch(action.type){
    case "authenticateUser" :
        userAuthorised = action.isAuthencated; console.log(userAuthorised); return authenticateUser;
        default: return state;
}
}
export  default setUser;

export { authoriseUser } 