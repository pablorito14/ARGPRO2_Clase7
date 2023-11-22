import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

import {BrowserRouter ,NavLink, Route, Routes} from 'react-router-dom'
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Error404 } from './pages/Error404';

function App() {
  return(
    <BrowserRouter>
      <header>
        <nav>
          <h2>Logo</h2>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='about'>About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
export default App