const authReducer=(state,{type,payload})=>{
    switch(type){
        case "INITIAL_STATE":
            return{
                ...state,
                user:payload
            }
        case "LOGIN":
            return{
                ...state,
                user:payload
            }
        case "SIGNUP":
            return{
                ...state,
                user:payload
            }
        case "LOGOUT":
            return{
                ...state,
                user:null
            }
        default:
            return state;
    }
}
export {authReducer};