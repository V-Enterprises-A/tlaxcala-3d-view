import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PortView from './Portview3D.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PortView/> 
  </StrictMode>,
)
