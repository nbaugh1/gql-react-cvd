import React from 'react'
import State from '../State'



export const StateOverviewContainer = (props) => {
    
    return (
        <div>
            <State state={props.location.state} />
        </div>
    )
}
