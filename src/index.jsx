import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Header from './Components/Header';
import GlobalStyle from "./utils/style/GlobalStyle"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle/>
      <Header/>
      <Routes>
        
        <Route  exact path= "/user/:userId" element={<Home />}/>
 
   
       
      </Routes>
    </Router>
    
  </React.StrictMode>
);


