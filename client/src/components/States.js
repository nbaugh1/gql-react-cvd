import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo'
import StateItem from './StateItem'
// import StateItem from './LaunchItem'

const STATES_QUERY = gql`
    {
    states{
		state
		cases
		todayCases
		deaths
		todayDeaths
		active
	}
}
`
const StatesList= () => {
    const { data, loading, error } = useQuery(STATES_QUERY)
    if (loading) return <h4>Loading...</h4>
    if (error) console.log(error)
    return (
        data.states.map(state => (
            <StateItem key={state.state} state={state} />
        ))
    )
}



export default StatesList