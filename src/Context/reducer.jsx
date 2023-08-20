export const reducer = ( state, action ) => {
    switch (action.type) {
        case "LOGOUT":
            return state        

        case "LOGIN_USER":
            return {...state, user: action.user}               

        default:
            return state;
    }
}