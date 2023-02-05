//Other Imports
import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';



// Components
import Home from './Components/Home';
import Resume from './Components/Resume';
import Res from './Files/ResumePDF.pdf';
import Projects from './Components/Projects.jsx';
import Travel from './Components/Travel.jsx';
import Recipes from './Components/Recipes';
import Rec from './Files/Estofado-Recipe.pdf';
import Git from './Components/Git';
import Swipe from './Components/Swipe';

function App() {

  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Resume' element={<Resume/>} />
        <Route path='/Resume/Res' element={<Res/>} />
        <Route path='/Projects' element={<Projects/>} />
        <Route path='/Travel' element={<Travel/>} />
        <Route path='/Recipes' element={<Recipes/>} />
        <Route path='/Recipes/Rec' element={<Rec/>} />
        <Route path='/github' element={<Git/>} />
        <Route path='/Swipe' element={<Swipe/>} />
        <Route path='*' element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;