import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Index from './components/usesr/Index.jsx'
import Create from './components/usesr/Create.jsx'

export default function App() {
  return (
    <Routes>
    <Route path='/'/>
    <Route path='/user/index' element={<Index />}/>
    <Route path='/user/create' element={<Create />}/>
   </Routes>
  )
}
