import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import global_en from '../src/translations/english/global.json'
import global_es from '../src/translations/spanish/global.json'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import './index.css'

i18next.init({
  interpolation:{escapeValude:false},
  lng:"es",
  resources:{
    en:{
      global:global_en,
    },
    es:{
      global:global_es,
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <I18nextProvider i18n = {i18next}>
    <App />
  </I18nextProvider>
  </React.StrictMode>,
)
