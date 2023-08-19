import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Page404 from './Page404'
import Guest from './Guest/App'
import Admin from './Admin/App'
import User from './User/App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function App() {

  const role = 'admin';
  return (

    <BrowserRouter>
        {
          role == 'admin' ? (<Admin />)
          :
          (
            role == 'user' ? (<User />)
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
