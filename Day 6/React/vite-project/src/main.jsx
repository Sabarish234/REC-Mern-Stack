import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Component1 from './components/Component1.jsx'
import Component2 from './components/Component2.jsx'
import Component3 from './components/Component3.jsx'
import Calculator from './components/Calculator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Component1 /> 
    <Component2 />
    <Component3 /> */}
    <Calculator />
  </StrictMode>,
)
