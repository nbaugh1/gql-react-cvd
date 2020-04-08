import React from 'react'
import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'
import Container from 'react-bootstrap/Container'
import StatesList from '../StatesList'
import StateSearch from '../StateSearch'

const STATES_QUERY = gql`
    {
    states{
        date
        state
        positive
        negative
        pending
        hospitalizedCurrently
        hospitalizedCumulative
        inIcuCurrently
        inIcuCumulative
        onVentilatorCurrently
        onVentilatorCumulative
        recovered
        hash
        dateChecked
        death
        hospitalized
        total
        totalTestResults
        posNeg
        fips
        deathIncrease
        hospitalizedIncrease
        negativeIncrease
        positiveIncrease
        totalTestResultsIncrease    
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