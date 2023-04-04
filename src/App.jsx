import {BrowserRouter, Routes, Route} from 'react-router-dom'

import React from 'react'
import './index.css'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Shop from './pages/shop/Shop'
import Projects from './pages/projects/Projects'
import News from './pages/news/News'
import Services from './pages/services/Services'
import Quality from './pages/quality/Quality'
import Portfolio from './pages/portfolio/Portfolio'
import Team from './pages/team/Team'
import Contact from './pages/contact/Contact'
import NotFound from './pages/notFound/NotFound'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='projects' element={<Projects/>}/>
      <Route path='news' element={<News/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='quality' element={<Quality/>}/>
      <Route path='portfolio' element={<Portfolio/>}/>
      <Route path='team' element={<Team/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App