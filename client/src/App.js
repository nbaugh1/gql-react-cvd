import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import logo from './logo.jpg'
import StatesList from './components/States'



function App () {
  const client = new ApolloClient({
    uri: '/.netlify/functions/graphql'
  })
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className='container'>
      <img
          src={logo}
          alt='Covid-19'
          style={{ height:200, margin: 'auto', display: 'block' }}
        />
       <h1>Covid-19 Tracker</h1>
        <Route exact path="/" component={StatesList} />
      </div>
      </Router>
    </ApolloProvider>
  )
}

export default App