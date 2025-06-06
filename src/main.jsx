import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PortView from './Portview3D.jsx'
import InformationArea from './InformationArea.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InformationArea/>
    <PortView />     
  </StrictMode>,
)