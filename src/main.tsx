import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Class from './pages/ClassesDashboard'
import Student from './pages/student'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Class/>}/>
      <Route path='/student/:classId' element={<Student/>}/>
    </Routes>
   </BrowserRouter> 
   
  </StrictMode>,
)
