export const getUserData = (userName, password) =>{
    return{
        type: "userLogin",
        userName: userName,
        password: password
    }
};

export const authenticateUser = (isAuthencated) =>{
    return{
        type: "authenticateUser",
        isAuthencated: isAuthencated
    }
}