import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Class from './pages/ClassesDashboard'
import Student from './pages/StudentRegister'
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';

Amplify.configure(config);


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
