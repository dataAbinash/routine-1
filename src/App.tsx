import React, { useCallback, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './assets/scss/index.scss'
import Start from './pages/Start'
import Routines from './pages/Routines'

const LazyHome = React.lazy(() => import('./pages/Home'))
const LazyAbout = React.lazy(() => import('./pages/About'))
// const LazyStart = React.lazy(() => import('./pages/Start'))
const LazyApplyRoutine = React.lazy(() => import('./pages/ApplyRoutine'))
const LazyNewRoutine = React.lazy(() => import('./pages/NewRoutine'))

export default function App() {
  return (
    <Router basename='/routine'>
      <React.Suspense fallback={<h1>Loading</h1>}>
        <Routes>
          <Route path='/' element={< Start />} />
          <Route path='/about' element={< LazyAbout />} />
          <Route path='/home' element={< LazyHome />} />
          <Route path='/routines' element={< Routines />} />
          <Route path='/newRoutine' element={< LazyNewRoutine />} />
          <Route path='/applyRoutine' element={< LazyApplyRoutine />} />
        </Routes>
      </React.Suspense>
    </Router>
  )
}