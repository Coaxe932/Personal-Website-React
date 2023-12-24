//Other Imports
import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useState } from 'react'; 



// Components
import Home from './Components/Home';
import Resume from './Components/Resume';
import Res from './Files/ResumePDF.pdf';
import Projects from './Components/Projects.jsx';
import Travel from './Components/Travel.jsx';
import Recipes from './Components/Recipes';
import Rec from './Files/Estofado-Recipe.pdf';
import Ninder from './Components/Data/Ninder';
import GPT from './Components/SubComponents/GPT';
import Blog from './Components/Blog';
import Login from './Components/Login';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (status) => {
        setIsLoggedIn(status);
    };

  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Resume' element={<Resume/>} />
        <Route path='/Resume/Res' element={<Res/>} />
        <Route path='/projects/' element={<Projects/>} />
        <Route path='/Travel' element={<Travel/>} />
        <Route path='/Recipes' element={<Recipes/>} />
        <Route path='/Recipes/Rec' element={<Rec/>} />
        <Route path='/ninder/' element={<Ninder/>} />
        <Route path='/GPT/' element={<GPT/>} />
        <Route path='/blog' element={isLoggedIn ? <Blog /> : <Login onLogin={handleLogin} />} />
        <Route path='*' element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;