import React from 'react';
import Badge from 'react-bootstrap/Badge'
import Dump from './Dump'

const State = (props) => {
    const state = props.location.state.state
    return (
        <div>
            <h2>{state.state}</h2>
            <ul>
                <li>
                    Positive Cases - {state.positive} <Badge variant="danger">+{state.positiveIncrease}</Badge>
                </li>
                <li>
                    Currently Hospitalized - {state.hospitalizedCurrently} <Badge variant="danger">+{state.hospitalizedIncrease}</Badge>
                </li>
                <li>
                    Deaths - {state.death} <Badge variant="danger">+{state.deathIncrease}</Badge>
                </li>
                <li>
                    Recovered - {state.recovered}
                </li>
                <li>
                    Last Updated - {state.dateChecked}
                </li>
            </ul>
            <Dump data={state} />
        </div>
            )
}

export default State