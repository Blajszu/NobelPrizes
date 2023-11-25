import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Controls from './components/Controls/Controls.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Controls>
        <App />
      </Controls>
    </BrowserRouter>
  </React.StrictMode>,
)
