import React from 'react';
import './App.css';
import ModelViewer from './Modelviewer';
import Collor from './Collor';

import Header from './Header';
import Footer from './Footer';
function App() {
  return (
    <>
    <Header/>
    <div className='row'>
      <div className='col-2'><ModelViewer /></div>
      <div className='col-2'><Collor /></div>
    </div>

    
    <Footer/>
      
      </>
  );
}
export default App;
