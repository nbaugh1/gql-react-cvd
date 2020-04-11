import React from 'react'
import StateItem from './StateItem'


const StatesList = (data) => {
    return (
        <div className="states-container">
        {data.state.states.map(state => (
            <StateItem key={state.hash} state={state} />
        ))}
        </div>
    )
}

export default StatesList