import React, { useContext, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Page404 from './Page404'
import Guest from './Guest/App'
import Admin from './Admin/App'
import User from './User/App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalContext } from './Context/context';


export default function App() {

  // const role = "quest"

  const { state, disatch } = useContext(GlobalContext)

  return (

    <BrowserRouter>
        {
          state.user?.role == 'admin' ? (<Admin />)
          :
          (
            state.user?.role == 'user' ? (<User />)
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
