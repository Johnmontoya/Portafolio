import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createI18n, I18nProvider } from 'react-simple-i18n'
import langData from './language.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider i18n={createI18n(langData, { lang: 'enUS' })}>
      <App />
    </I18nProvider>
  </StrictMode>,
)
