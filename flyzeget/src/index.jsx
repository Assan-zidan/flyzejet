import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route,  } from 'react-router-dom'

// import Home from './pages/Home/index'
import Survey from './pages/Surveys/index'
import './Styles/index.css'
import Results from './pages/Results/index'
import Inscription from './pages/Inscription/index'
import Connexion from './pages/Connexion/index'
import Dashboard from './pages/Dashboard/index'
import Freelances from './pages/Freelances/index'
// import Header from './components/Header/index'
import Error from './components/error/index'

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Inscription />} />
        <Route  path="/connexion" element={<Connexion />} />
        <Route  path="/dashboard" element={<Dashboard />} />
        <Route  path="/survey/:questionNumber" element={<Survey />}/>
        <Route  path="/results" element={<Results />}/>
        <Route  path="/freelances" element={<Freelances />}/>
        <Route  path="*" element={<Error />}/>
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
)