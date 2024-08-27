import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/pages/Home/Home'
import Survey from './components/pages/Survey'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/survey' element={<Survey/>} />
      </Routes>
    </>
  )
}

export default App
