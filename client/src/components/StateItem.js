import React from 'react'
// import className from "classnames";
import { Link } from 'react-router-dom'

export default function StateItem ({
  state: { state, positive, death, hospitalized, inIcuCurrently }
}) {
  return (
    <div className='card card-body mb-3'>
      <div className='row'>
        <div className='col-md-9'>
          <h4>{state}</h4>
          <p>{positive} Positive Cases</p>
          <p>{death} Deaths</p>
          <p>{hospitalized} Hospitalized</p>
        </div>
        <div className='col-md-3'>
          <Link
            to={{
              pathname: `/state/${state}`,
              state: {
                state,
                positive,
                death,
                hospitalized,
                inIcuCurrently
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
