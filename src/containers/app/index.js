import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../home'
import About from '../about'

    // <header>
    //   <Link to="/">Home</Link>
    //   <Link to="/about-us">About</Link>
    // </header>
    

const App = () => (
  <div>


    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App
