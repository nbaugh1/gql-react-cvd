import React from 'react'
import StateItem from './StateItem'


const StatesList = (data) => {
    return (
        data.state.states.map(state => (
            <StateItem key={data.state} state={state} />
        ))
    )
}

export default StatesList