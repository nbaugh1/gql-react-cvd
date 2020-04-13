import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import logo from './logo.jpg'
import StatesListContainer from './components/containers/StatesListContainer'
import Link from 'react-router-dom/Link'
import { StateOverviewContainer } from './components/containers/StateOverviewContainer'



function App() {

  return (
    <Router>
      <div>
        <img
          src={logo}
          alt='Covid-19'
          style={{ height: 200}}
        />
      </div>
      <div>
        <Link to="/" className='h1'>Covid-19 Tracker</Link>
      </div>
      <div>
        <Route exact path="/" component={StatesListContainer} />
        <Route exact path="/state/:state" component={StateOverviewContainer} />
      </div>
    </Router>
  )
}

export default App