
import './App.css';
import { Card } from 'react-bootstrap';
import { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Dashboard from './Dashboard';
import About from './About';
import Contact from './Contact';
import Users from './Users'
import Setting from './Setting';
import Massages from './Messages';
import Sidebar from './Components/Sidebar';

function App() {


  return (
    <>
      <Sidebar>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/user' element={<Users />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/messages' element={<Massages />} />
          <Route path='/setting' element={<Setting />} />
        </Routes>
      </Sidebar>
      
    </>

  )
}

export default App;
