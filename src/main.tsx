import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './root.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Divider from './components/Divider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Banner />
    <Divider />
  </StrictMode>,
)
