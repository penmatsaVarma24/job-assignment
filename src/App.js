import {Routes, Route} from 'react-router-dom';

import { useState } from 'react';

import Home from './components/Home';

import About from './components/About';

import themeContext from './context/themeContext';

import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <themeContext.Provider value={{theme, setTheme}}>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
      </Routes>
    </themeContext.Provider>
  )
}

export default App;
