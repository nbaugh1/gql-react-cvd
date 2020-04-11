import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

export default function StateItem({ state }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <h4>{state.state}</h4>
        </Card.Title>
        <h6>Date: {state.date}</h6>
        <p>{state.positive} Positive Cases</p>
        <p>{state.death} Deaths</p>
        <p>{state.hospitalized} Hospitalized</p>
        <div className='col-md-3'>
          <Link
            to={{
              pathname: `/state/${state.state}`,
              state: {
                state
              }
            }}
            className='btn btn-secondary'
          >
            Details
          </Link>
        </div>
      </Card.Body>
    </Card>
  )
}
