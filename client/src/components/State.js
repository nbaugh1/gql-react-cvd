import React from 'react';
import Dump from './Dump'

const State = (props) => {
    const state = props.location.state.state
    return (
        <div>
            <h2>{state.state}</h2>
            <ul>
                <li>Positive Cases - {state.positive}</li>
                <li>Currently Hospitalized - {state.hospitalizedCurrently}</li>
                <li>Recovered - {state.recovered}</li>
                <li>Deaths - {state.death}</li>
                <li>Last Updated - {state.lastUpdateEt}</li>
            </ul>
        </div>
            )
}

export default State