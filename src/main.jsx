import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import { App } from './App.jsx'
import { FirstApp } from "./FirstApp.jsx";
import { Portview } from "./Portview3D.jsx";
import ThreeScene from './ThreeTest.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Portview/> */}
    <ThreeScene/>
  </StrictMode>,
)
