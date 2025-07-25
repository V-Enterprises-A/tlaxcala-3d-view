import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/styles.css'
import { Provider } from 'react-redux'
import { store } from './Store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          <Routes>
            <Route exact path="/:church" element={<Home/>} />
          </Routes>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)