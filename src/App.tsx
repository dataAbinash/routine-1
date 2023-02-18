import React, { useCallback, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './assets/scss/index.scss'
import Start from './pages/Start'
import Routines from './pages/Routines'
import Construction from './pages/Construction'


const LazyHome = React.lazy(() => import('./pages/Home'))
const LazyAbout = React.lazy(() => import('./pages/About'))
// const LazyStart = React.lazy(() => import('./pages/Start'))
const LazyApplyRoutine = React.lazy(() => import('./pages/ApplyRoutine'))
const LazyNewRoutine = React.lazy(() => import('./pages/NewRoutine'))
import ls from './lib/storage'
import routines from './lib/sampleTypes'
import Calender from './pages/Calender'





// Store Data here
console.log(JSON.stringify(routines))
ls.set('routines', JSON.stringify(routines));





function LoadingScreen() {
  return (
    <div className="loading h-[100vh] w-full flex items-center justify-center">
      <p>Please Wait...</p>
    </div>
  )
}




export default function App() {
  return (
    <Router basename='/routine'>
      <React.Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path='/' element={< Start />} />
          <Route path='/about' element={< LazyAbout />} />
          <Route path='/home' element={< LazyHome />} />
          <Route path='/routines' element={< Routines />} />
          <Route path='/newRoutine' element={< LazyNewRoutine />} />
          <Route path='/applyRoutine' element={< LazyApplyRoutine />} />
          <Route path='/more' element={< Construction />} />
          <Route path='/calender' element={< Construction />} />
          <Route path='/notifications' element={< Construction />} />
        </Routes>
      </React.Suspense>
    </Router>
  )
}