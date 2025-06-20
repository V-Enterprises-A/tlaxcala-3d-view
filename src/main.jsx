import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PortView from './Portview3D.jsx'
import './Styles/styles.css'
import InfoCard from './InfoCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div id='ChurchView' >
      <InfoCard
        name="Capilla Jesús del Río"
        description="Un tesoro escondido en el corazón de Tlaxcala
Situada en una tranquila esquina del centro histórico, la Capilla Jesús del Río es una joya poco conocida que ofrece una experiencia íntima con el pasado colonial de Tlaxcala. Aunque modesta en tamaño, su arquitectura de influencia renacentista y su cúpula sobre el crucero la convierten en un espacio singular y armonioso.
Esta capilla ha sido un punto de reunión espiritual durante siglos, y su atmósfera serena invita a la contemplación y la pausa. El interior, sencillo pero acogedor, conserva una sensación de recogimiento difícil de encontrar en otras construcciones más concurridas." 
        />
      <PortView />
    </div>
  </StrictMode>,
)