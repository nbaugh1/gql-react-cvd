import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import StateItem from './StateItem'
import Dump from '../components/Dump'

const StateSearch = data => {
    // debugger
    const [searchTerm, setSearchTerm] = useState(null)
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value)
    }

    useEffect(() => {
        const results = data.states.states.filter(state =>
            state['state'].toLowerCase().includes(searchTerm)
        );
        setSearchResults(results)
    }, [searchTerm]);

    // const handleSubmit = event => {
    //     const resultComponent = <StateItem state={searchResults[0]} />
    //     event.preventDefault()
    //     console.log(searchResults)
    //     debugger
    // }

    return (
        <div style={{ margin: '10px' }}>
            <Form >
                <Form.Group controlId='stateSearchForm'>
                    <Form.Label>Search</Form.Label>
                    <Form.Control
                        type='text'
                        onChange={handleChange}
                        value={searchTerm}

                    />
                    {/* <Button variant='secondary' type="submit" value="Search" /> */}
                </Form.Group>

            </Form>
            <div>
                <ul>
                    {searchResults.map(state => (
                    <li><StateItem state={state} /></li>))}
                </ul>
            </div>

        </div>
    )
}

export default StateSearch
