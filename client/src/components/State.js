import React from 'react';
import Badge from 'react-bootstrap/Badge'
import moment from 'moment'
import { BarChart, XAxis } from 'recharts'

const State = (props) => {
    
    const state = props.state.state
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
                    Last Updated - {moment(state.dateChecked).format('L LT')}
                </li>
            </ul>
            <BarChart width={500} height={250} data={props.state}>
                <XAxis dataKey={props.state}></XAxis>
            </BarChart>
        </div>
            )
}

export default State