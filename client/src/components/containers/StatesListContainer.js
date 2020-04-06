import React from 'react'
import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'
import { Form, Container } from 'react-bootstrap'
import StatesList from '../StatesList'

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


export const StatesListContainer = () => {
    const { data, loading, error } = useQuery(STATES_QUERY)
    if (loading) return <h4>Loading...</h4>
    if (error) console.log(error)
    return (
        <Container>
            <StatesList state={data}/>
        </Container>
    )
}


export default StatesListContainer