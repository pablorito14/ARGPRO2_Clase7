import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

import {BrowserRouter,HashRouter,NavLink, Route, Routes} from 'react-router-dom'
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Error404 } from './pages/Error404';
import { Personajes } from './pages/Personajes';


function App() {

  

  return(
    <>
    {/* <BrowserRouter> */}
    <HashRouter>
      <header>
        <nav>
          <h2>Logo</h2>
          <NavLink className="nav-link" to='/'>Home</NavLink>
          <NavLink className="nav-link" to='personajes'>Personajes</NavLink>
          <NavLink className="nav-link" to='about'>About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/personajes' element={<Personajes />}/>
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </main>
      </HashRouter>
    {/* </BrowserRouter> */}
    </>
  )
}
export default App