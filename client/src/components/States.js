import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
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
export default class StatesList extends Component {
    render() {
        console.log(STATES_QUERY)
        return (
            <div>
                <Query query={STATES_QUERY}>
                    {({ loading, error, data }) => {
                        if (loading) return <h4>Loading...</h4>
                        if (error) console.log(error)
                        console.log(data)
                        return <Fragment>
                            {
                                data.states.map(state => (
                                   <div><p>{state.state}: {state.cases} Cases, {state.deaths} Deaths, {state.todayCases} New cases today, {state.todayDeaths} Deaths today</p></div> 
                                ))
                            }
                        </Fragment>
                    }}
                </Query>
            </div>
        )
    }
}


