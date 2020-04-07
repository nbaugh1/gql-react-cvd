import  React, { useState, useEffect }  from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import StateItem from './StateItem'
import Dump from '../components/Dump'

const StateSearch = data => {
    // debugger
    const [searchTerm, setSearchTerm] = useState("")
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
    
    const handleSubmit = event => {
        event.preventDefault()
        console.log(searchResults)
    }
    
    return (
        <div style={{margin: '10px'}}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId='stateSearchForm'>
                    <Form.Label>Search</Form.Label>
                    <Form.Control 
                        type='text' 
                        onChange={handleChange}
                        value={searchTerm}
                       
                    />
                    <Button variant='secondary' type="submit" value="Search" />
                </Form.Group>
                
            </Form>
           <Dump data={searchResults} />
        </div>
    )
}

export default StateSearch
