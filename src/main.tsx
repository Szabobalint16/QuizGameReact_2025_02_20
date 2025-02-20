import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { UserContextProvider } from './Contexts/UserContext.tsx'
import { QuizContext, QuizContextProvider } from './Contexts/QuizContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <UserContextProvider>
      <QuizContextProvider>
        <App />
      </QuizContextProvider>
    </UserContextProvider>
  </BrowserRouter>,
)
