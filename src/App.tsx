import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import LoginPage from './Components/UserComps/LoginPage'
import HomePage from './Components/UserComps/HomePage'
import RegiszPage from './Components/UserComps/RegiszPage'
import QuizAddPage from './Components/QuizComps/QuizAddPage'
import QuizViewPage from './Components/QuizComps/QuizViewPage'

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route element={<LoginPage/>} path='/'/>
        <Route element={<HomePage/>} path='/home'/>
        <Route element={<QuizAddPage/>} path='/quizadd'/>
        <Route element={<QuizViewPage/>} path='/quizview'/>
        <Route element={<RegiszPage/>} path='/regist'/>
      </Routes>
    </>
  )
}

export default App
