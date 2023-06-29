import  { createRoot } from 'react-dom/client'
import { GifApp } from './GifApp'

import './styles.css'
import React from 'react';



const root = document.getElementById('root') as HTMLElement;
createRoot(root).render(
  <React.StrictMode>
    <GifApp />
  </React.StrictMode>)
// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <GifApp />
//   </React.StrictMode>,
// )
