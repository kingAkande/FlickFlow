import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StarRating from './Components/StarRating'
//import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <StarRating max={5}/>
    <StarRating max={10}/>
    <StarRating/>
    

  </StrictMode>,
)
