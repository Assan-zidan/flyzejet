import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageConnexion from './pages/Connexion'
import Dashboard from './pages/Dashboard'
import PageAddUser from './pages/PageAddUser'
import PageInscription from './pages/PageInscription'
// import Inscription from './pages/Inscription'
// import PageListeUser from './pages/PageListeUser'
// import Header from './components/Header'
import Error from './components/error'
 function App() {
  return (<>
    <BrowserRouter>
         <Routes>
            <Route path="/" element={<PageConnexion />} />
            {/* <Route path="/dashbord" element={<Header />} /> */}
            <Route path="/dashbord" element={<Dashboard />} />
            <Route path="/adduser" element={<PageAddUser />} />
            {/* <Route path="/singup" element={<Inscription />} /> */}
            {/* <Route path="/PageListeUser" element={<PageListeUser />} /> */}
            <Route path="/singup" element={<PageInscription />} />
            <Route path="*" element={<Error />} />
         </Routes>
      </BrowserRouter>
  </>
  )
}
export default App
