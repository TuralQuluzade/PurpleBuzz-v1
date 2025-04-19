import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '../pages/home/Home'
import Contact from '../pages/contact/Contact'
import Layout from '../components/Layout'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Layout/>} >
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>} />
        </Route>
    
    </Routes>
    </BrowserRouter>
  )
}

export default Router