import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PortView from './Portview3D.jsx'
import InformationArea from './InformationArea.jsx'
import './Styles/styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div id='ChurchView' >
      <InformationArea />
      <PortView />
    </div>
  </StrictMode>,
)