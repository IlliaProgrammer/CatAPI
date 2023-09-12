import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import RouterComponent from './components/RouteComponent';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <div className='navigation'>
        <Navbar/>
        </div>
        <div className='content'>
          <RouterComponent/>
        </div>
     
      </div>
    </BrowserRouter>  
  );
}

export default App;
