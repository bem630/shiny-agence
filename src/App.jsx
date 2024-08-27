import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/pages/Home/Home'
import Survey from './components/pages/Survey/Survey'
import Error from './components/Error/Error'
import Results from './components/pages/Results/Results'
import Freelances from './components/pages/Freelances/Freelances'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/survey/:questionNumber' element={<Survey/>} />
        <Route path='/results' element={<Results/>} />
        <Route path='/freelances' element={<Freelances/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
    </>
  )
}

export default App
