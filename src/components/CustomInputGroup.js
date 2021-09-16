import React from 'react'
import { InputGroup, Form, FormControl } from 'react-bootstrap'

export const CustomInputGroup = () => {
    return (
        <InputGroup className="mb-3">
            <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="int">int</option>
                <option value="char">char</option>
                <option value="string">string</option>
                <option value="bool">bool</option>
                <option value="int*">int*</option>
                <option value="char*">char*</option>
            </Form.Select>
            <FormControl aria-label="Text input with dropdown button" />
        </InputGroup>
    )
}

export default InputGroup
