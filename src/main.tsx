import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import * as Components from './components'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Components.EnviarArquivo />} />
        <Route path="/arquivos-enviados" element={<Components.ArquivosEnviados />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
