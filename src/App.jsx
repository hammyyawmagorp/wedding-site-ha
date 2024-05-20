import React from 'react'
import Header from './components/header/Header'
import Portal from './components/portal/Portal'
import { Routes, Route, Router } from 'react-router-dom'
import WeddingHubIntro from './components/wedding-hub-intro/WeddingHubIntro'
import TheHub from './components/the-hub/TheHub'
import Gifts from './components/gifts/Gifts'
import Itinerary from './components/itinerary/Itinerary'
import BridalPartyInfo from './components/bridal-party-info/BridalPartyInfo'
import RSVP from './components/rsvp/RSVP'
import NoMatch from './components/nomatch/NoMatch'

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Portal />}></Route>
        <Route path="/whubintro" element={<WeddingHubIntro />}></Route>
        <Route path="/whub" element={<TheHub />}></Route>
        <Route path="/gifts" element={<Gifts />}></Route>
        <Route path="/itinerary" element={<Itinerary />}></Route>
        <Route path="/bridalparty" element={<BridalPartyInfo />}></Route>
        <Route path="/rsvp" element={<RSVP />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </>
  )
}
export default App
