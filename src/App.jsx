import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Index from './components/usesr/Index.jsx'
import Create from './components/usesr/Create.jsx'
import Details from './components/Details.jsx'
import Eidt from './components/usesr/Edit.jsx'


export default function App() {
  return (
    <Routes>
    <Route path='/' element={<Create/>}/>
    <Route path='/user/index' element={<Index />}/>
    <Route path='/user/create' element={<Create />}/>
    <Route path='/user/:id' element={<Details/>}/>
     <Route path='/user/edit/:id' element ={<Eidt/>}/> 
    <Route path='*' element={<h2>User Not Found</h2>} />
   </Routes>
  )

  }