import React from 'react';
import Badge from 'react-bootstrap/Badge'
import Dump from './Dump'
import moment from 'moment'

const State = (props) => {
    
    // const state = location.state
    console.log()
    return (
        <div>
            {/* <h2>{state.state}</h2>
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
                    Last Updated - {moment(state.dateChecked).format('L LT')}
                </li>
            </ul>
            <Dump data={state} /> */}
        </div>
            )
}

export default State