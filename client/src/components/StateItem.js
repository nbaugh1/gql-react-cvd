import React from 'react'
// import className from "classnames";
import { Link } from 'react-router-dom'

export default function StateItem ({state}) {
  console.log(state)
  return (
    <div className='card card-body mb-3'>
      <div className='row'>
        <div className='col-md-9'>
          <h4>{state.state}</h4>
          <p>{state.positive} Positive Cases</p>
          <p>{state.death} Deaths</p>
          <p>{state.hospitalized} Hospitalized</p>
        </div>
        <div className='col-md-3'>
          <Link
            to={{
              pathname: `/state/${state}`,
              state: {
                state
              }
            }}
            className='btn btn-secondary'
          >
            Launch Details
          </Link>
        </div>
      </div>
    </div>
  )
}
