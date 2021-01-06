import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Add from './pages/Add'
import Contact from './pages/Contact'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <div id="app" className="h-screen overflow-hidden grid">
        <Route exact path="/" component={Home} />        
        <Route exact path="/add" component={Add} />        
        <Route exact path="/contact/:id" component={Contact} />        
      </div>
    </BrowserRouter>
  )
}

export default App
