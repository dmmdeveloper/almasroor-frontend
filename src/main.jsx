import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { BrowserRouter as Router } from "react-router-dom"
import "@fortawesome/fontawesome-free/css/all.css";



createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
)
