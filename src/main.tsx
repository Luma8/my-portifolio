import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import './Pages/i18next.ts';
import Navgator from './Navgator.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navgator />
  </React.StrictMode>,
)
