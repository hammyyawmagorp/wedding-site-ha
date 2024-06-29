import React from 'react'
import Header from './components/header/Header'
import Portal from './components/portal/Portal'
import { Routes, Route, Router } from 'react-router-dom'
// import TheHub from './components/the-hub/TheHub'
import NoMatch from './components/nomatch/NoMatch'
const LazyHub = React.lazy(() => import('./components/the-hub/TheHub'))
const LazyGifts = React.lazy(() => import('./components/gifts/Gifts'))
const LazyRSVP = React.lazy(() => import('./components/rsvp/RSVP'))
const LazyTravel = React.lazy(() => import('./components/travel/Travel'))
const LazySongs = React.lazy(() => import('./components/songs/Songs'))
const LazyStory = React.lazy(() => import('./components/story/Story'))
const LazyZoom = React.lazy(() => import('./components/zoominfo/ZoomInfo'))
const LazyBridalPartyInfo = React.lazy(() =>
  import('./components/bridal-party-info/BridalPartyInfo')
)
const LazyItinerary = React.lazy(() =>
  import('./components/itinerary/Itinerary')
)

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback="We're Landing At The Wedding Hub...">
              <Portal />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/whub"
          element={
            <React.Suspense fallback="We're Landing At The Wedding Hub...">
              <LazyHub />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/gifts"
          element={
            <React.Suspense fallback="Loading...">
              <LazyGifts />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/itinerary"
          element={
            <React.Suspense fallback="Loading...">
              <LazyItinerary />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/bridalparty"
          element={
            <React.Suspense>
              <LazyBridalPartyInfo />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/rsvp"
          element={
            <React.Suspense>
              <LazyRSVP />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/songs"
          element={
            <React.Suspense>
              <LazySongs />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/travel"
          element={
            <React.Suspense>
              <LazyTravel />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/story"
          element={
            <React.Suspense>
              <LazyStory />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="/zoominfo"
          element={
            <React.Suspense>
              <LazyZoom />
            </React.Suspense>
          }
        ></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </>
  )
}
export default App
