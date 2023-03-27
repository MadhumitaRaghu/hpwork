import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Overview from './pages/Overview';
import About from './pages/About';
import Analytics from './pages/Analytics';
import Users from './pages/Users';
import Revenue from './pages/Revenue';
import Post from './components/Post';
import Terminal1 from './components/Terminal';
import Header from './components/Header';
import Tab from './components/Tab';
// Render the component

function App() {

  return (
    <>
    <BrowserRouter>
    <Header></Header>
    <div style={{"display":"flex"}}>
    <Sidebar></Sidebar>
    {/* <Post></Post> */}
    <div className='foot_mark'>
      <Tab></Tab>
    <Routes>
      <Route path='/overview' element={<Overview></Overview>}/>
      <Route path='/about' element={<About></About>}/>
      <Route path='/analytics' element={<Analytics></Analytics>}/>
      <Route path='/overview/users' element={<Users></Users>}/>
      <Route path='/overview/revenue' element={<Revenue></Revenue>}/>
      
      
    </Routes>
    
    
    {/* <Footer data={"hello"}></Footer> */}
    <Terminal1></Terminal1>
    
    </div>
    </div>
    </BrowserRouter>
    </>
    
  );
}

export default App;
