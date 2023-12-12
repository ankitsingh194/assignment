import React from 'react';
import './App.css'
import Usercard from './Component/UserCard';
import { Route, Routes,BrowserRouter } from 'react-router-dom';




function App() {


  return (
    <div >
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Usercard />} />
        </Routes>
        </BrowserRouter>
    
      
    </div>
  
  )
}

export default App
