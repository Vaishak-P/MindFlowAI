import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.scss';
import App from './App.jsx'
import ContextProvider from './context/Context.jsx'
createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App/>
  </ContextProvider>,
)
 