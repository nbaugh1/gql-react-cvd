import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import logo from './logo.jpg'


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

function App () {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className='container'>
      <img
          src={logo}
          alt='SpaceX'
          style={{ height:200, margin: 'auto', display: 'block' }}
        />
       <h1>Home</h1>
      </div>
      </Router>
    </ApolloProvider>
  )
}

export default App