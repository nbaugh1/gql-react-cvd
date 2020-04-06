import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import { useQuery } from 'react-apollo'
import StateItem from './StateItem'


const STATES_QUERY = gql`
    {
    states{
	state
    positive
    positiveScore
    negativeScore
    negativeRegularScore
    commercialScore
    grade
    score
    negative
    pending
    hospitalizedCurrently
    hospitalizedCumulative
    inIcuCurrently
    inIcuCumulative
    onVentilatorCurrently
    onVentilatorCumulative
    recovered
    lastUpdateEt
    checkTimeEt
    death
    hospitalized
    total
    totalTestResults
    posNeg
    fips
    dateModified
    dateChecked
    notes
    hash	
    }
}
`
const StatesList = () => {
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