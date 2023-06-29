import { useState } from 'react'
import './App.css'
import Login from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Dashboard/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
