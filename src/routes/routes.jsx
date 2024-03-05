import React from 'react'
import Nav from '../components/nav'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Footer from '../components/footer'
import Birinchi from '../pages/birinchi'
export default function routes() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Birinchi/>} />
                <Route path="/footer" element={<Footer/>} />
               


            </Routes>
        
        
        </BrowserRouter>
  )
}
