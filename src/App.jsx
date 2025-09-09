import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';

import Normal from './pages/Normal'
import Agua from './pages/Agua'
import Bicho from './pages/Bicho'
import Tierra from './pages/Tierra'
import Venon from './pages/Venon'
import Electrico from './pages/Electrico'
import Home from './pages/Home';
import Fuego from './pages/Fuego'
import Hada from './pages/Hada'
import Planta from './pages/Planta'
import MenuBar from './componets/MenuBar';



function App() {
  const [count, setCount] = useState(0)
  return (
   
    <>
    <MenuBar/>
    

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/normal" element={<Normal />} />
      <Route path="/agua" element={<Agua/>} />
      <Route path="/bicho" element={<Bicho />} />
      <Route path="/electrico" element={<Electrico />} />
      <Route path="/fuego" element={<Fuego/>} />
      <Route path="/hada" element={<Hada />} />
      <Route path="/planta" element={<Planta />} />
      <Route path="/tierra" element={<Tierra />} />
      <Route path="/venon" element={<Venon />} />
      
    </Routes>
    <br />
    <br />
    <footer>
    <p className='foot'>Todos los derechos reservados a Nintendo Co.</p>
    </footer>

    </>
  )
}

export default App
