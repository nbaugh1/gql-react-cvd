import React from 'react';
import Dump from './Dump'

const State = (props) => {
    const state = props.location.state
    
    return (
        <Dump data={state}/>
            )
}

export default State