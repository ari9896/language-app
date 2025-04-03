import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './pages/HomePage.jsx'
import EstonianNouns from './pages/EstonianNounsPage.jsx'
import NounsPage from './pages/NounsPage.jsx'
import VerbsPage from './pages/VerbsPage.jsx'
import VerbDetailPage from './pages/VerbDetailPage'

import HebrewVerbsUploader from './pages/HebrewVerbsUploader.jsx'

import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/nouns' element={<NounsPage /> } />
        <Route path='/estonian-nouns' element={<EstonianNouns /> } /> 
        <Route path='/verbs' element={<VerbsPage />} />
        <Route path='/verb/:id' element={<VerbDetailPage /> } />

        <Route path='/hebrew-verbs-uploader' element={<HebrewVerbsUploader /> } />
      </Routes>
    </>
  )
}

export default App
