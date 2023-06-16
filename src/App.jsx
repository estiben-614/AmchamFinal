
import './App.css'
import { BrowserRouter, Routes,Route} from 'react-router-dom'
import { useEffect, useState } from 'react'
import PanelControl from './PanelControl'
import { PaginaRegistro } from './PaginaRegistro'
import { PaginaIniciarSesion } from './PaginaIniciarSesion'
import { Nav } from './Nav'
import { PaginaNoEncontrada } from './PaginaNoEncontrada'


function App() {
  
  //Creemos un estado para validar si se hizo o no un inicio de sesión
  const [inicioSesion, setInicioSesion] = useState(false)

  //Verifiquemos en el ciclo de vida ese estado
  useEffect(() => {
    console.log({inicioSesion})

  }, [])
  
  // Pasemos como props el inicioSesion y su función para el cambio de estado

  return (
    <>

    <BrowserRouter>
      <Nav inicioSesion={inicioSesion} setInicioSesion={setInicioSesion}></Nav>
      <Routes>
        {/* Element es el elemento que quiere visitar  */}
        <Route path='/' element={<PaginaIniciarSesion inicioSesion={inicioSesion} setInicioSesion={setInicioSesion}></PaginaIniciarSesion>}/>
        <Route path='/registro' element={<PaginaRegistro inicioSesion={inicioSesion} setInicioSesion={setInicioSesion}></PaginaRegistro>}/>
        <Route path='/panelControl' element={<PanelControl inicioSesion={inicioSesion} setInicioSesion={setInicioSesion}></PanelControl>}/>
        <Route path='*' element={<PaginaNoEncontrada></PaginaNoEncontrada>}/>
        
      </Routes>
    
    </BrowserRouter>

    </>
  )
}

export default App
