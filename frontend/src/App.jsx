import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/HomePage.jsx'
import EstonianNouns from './pages/EstonianNounsPage.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/estonian-nouns' element={<EstonianNouns /> } />
      </Routes>
    </>
  )
}

export default App
