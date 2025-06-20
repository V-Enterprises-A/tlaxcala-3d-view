import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PortView from './Portview3D.jsx'
import './Styles/styles.css'
import InfoCard from './InfoCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div id='ChurchView' >
      <InfoCard
        name="Título de Ejemplo"
        description="Este es un ejemplo de descripción que se mostrará u ocultará cuando hagas click en el ícono." 
        />
      <PortView />
    </div>
  </StrictMode>,
)