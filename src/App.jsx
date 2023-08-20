import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Page404 from './Page404'
import Guest from './Guest/App'
import Admin from './Admin/App'
import User from './User/App'
import jwtDecode from 'jwt-decode';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalContext } from './Context/context';


export default function App() {

  const { state, disatch } = useContext(GlobalContext)
  const [loginUser, setLoginUser] = useState(undefined);
  
  useEffect( () => {

    if(state.user == 'undefined'){
      return undefined
    } else {
      const userData = jwtDecode(state.user)
      setLoginUser(userData)
    }
  },[state.user])

  return (

    <BrowserRouter>
        {
          loginUser?.role == 'admin' ? (<Admin />)
          :
          (
            loginUser?.role == 'user' ? (<User />)
            : 
            (
              <Routes>
                <Route path='/' element={<Guest />} />
                <Route path='*' element={<Page404 />} />
              </Routes>
            )
          )
        }
    </BrowserRouter>

    )
}
