const userReducer=(state,{type,payload})=>{
    switch(type){
        case "ADD_BOOKMARK":
            return{
                ...state,
                bookmarks:payload
            }
        default:
            return state;
    }
}

export {userReducer};