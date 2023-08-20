import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import Cookies from "js-cookie"
import jwt_decode from "jwt-decode"

export const GlobalContext = createContext("initial Value")

const decodeUser = (jwt_token) => {

    if(!jwt_token){
        return undefined
    } else {
        return jwt_decode(jwt_token)
    }
}

let data = {
    user : decodeUser(Cookies.get('token')),
};

export default function GlobalContextProvider({ children }){
    const [state, dispatch] =  useReducer(reducer, data);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            { children }
        </GlobalContext.Provider>
    )
}