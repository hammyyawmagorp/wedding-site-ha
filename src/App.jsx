import React from 'react'
import Header from './components/header/Header'
import Portal from './components/portal/Portal'
import { Routes, Route } from 'react-router-dom'
import WeddingHubIntro from './components/wedding-hub-intro/WeddingHubIntro'
import TheHub from './components/the-hub/TheHub'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Portal />}></Route>
        <Route path="/whubintro" element={<WeddingHubIntro />}></Route>
        <Route path="/whub" element={<TheHub />}></Route>
      </Routes>
    </>
  )
}
export default App
