import React from 'react'
import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'
import Container from 'react-bootstrap/Container'
import StatesList from '../StatesList'
import StateSearch from '../StateSearch'

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
            <StateSearch states={data} />
        <div>
            <StatesList state={data}/>
        </div>
            
        </Container>
    )
}


export default StatesListContainer