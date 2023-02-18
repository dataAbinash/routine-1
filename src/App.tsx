import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './assets/scss/index.scss'
// import Construction from './pages/Construction'
import Home from './pages/Home'
import Routines from './pages/Routines'


const LazyAbout = React.lazy(() => import('./pages/About'))
// const LazyStart = React.lazy(() => import('./pages/Start'))
const LazyApplyRoutine = React.lazy(() => import('./pages/ApplyRoutine'))
const LazyNewRoutine = React.lazy(() => import('./pages/NewRoutine'))
const LazyStart = React.lazy(() => import('./pages/Start'))
const LazyConstruction = React.lazy(() => import('./pages/Construction'))





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
          <Route path='/' element={< Home />} />
          <Route path='/about' element={< LazyAbout />} />
          <Route path='/start' element={< LazyStart />} />
          <Route path='/routines' element={< Routines />} />
          <Route path='/newRoutine' element={< LazyNewRoutine />} />
          <Route path='/applyRoutine' element={< LazyApplyRoutine />} />
          <Route path='/more' element={< LazyConstruction />} />
          <Route path='/calender' element={< LazyConstruction />} />
          <Route path='/notifications' element={< LazyConstruction />} />
        </Routes>
      </React.Suspense>
    </Router>
  )
}