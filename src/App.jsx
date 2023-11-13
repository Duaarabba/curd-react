import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Index from './components/usesr/Index.jsx'
import Create from './components/usesr/Create.jsx'
import Details from './components/Details.jsx'

export default function App() {
  return (
    <Routes>
    <Route path='/' element={<Index/>}/>
    <Route path='/user/index' element={<Index />}/>
    <Route path='/user/create' element={<Create />}/>
    <Route path='/user/:id' element={<Details/>}/>
    <Route path='*' element={<h2>User Not Found</h2>} />
   </Routes>
  )
}
