import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { GifApp } from './GifApp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GifApp />
  </React.StrictMode>,
)
