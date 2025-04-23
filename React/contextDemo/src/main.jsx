import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createContext } from 'react'
export const myContext = createContext()
const c = 0;
createRoot(document.getElementById('root')).render(
  <myContext.Provider value={c}>
    <App />
  </myContext.Provider>,
)
