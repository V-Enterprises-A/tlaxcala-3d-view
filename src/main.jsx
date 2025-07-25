import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PortView from './Portview3D.jsx'
import './Styles/styles.css'
import InfoCard from './InfoCard.jsx'
import { Provider } from 'react-redux'
import { store } from './Store'
import { App } from './App'
import PokemonAPP from './PokemonAPP'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

      <div id='ChurchView' >
        {/* <PokemonAPP></PokemonAPP>  */}
        <InfoCard></InfoCard>
        <PortView></PortView>
      </div>
      
    </Provider>
  </StrictMode>,
)