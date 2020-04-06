import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo'
import StateItem from './StateItem'




const StatesList = (data) => {
    
    return (
        
        data.state.states.map(state => (
            <StateItem key={data.state} state={state} />
        ))
        
    )
}



export default StatesList