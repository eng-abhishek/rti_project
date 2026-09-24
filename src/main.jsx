import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import "./assets/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import "./assets/css/bootstrap-icons.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css'; // npm install bootstrap-icons
import "./assets/css/style.css";
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
