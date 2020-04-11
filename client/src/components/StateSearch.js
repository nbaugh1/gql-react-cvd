import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import StateItem from './StateItem'
// import Dump from '../components/Dump'

const StateSearch = data => {
    const [searchTerm, setSearchTerm] = useState(" ")
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
