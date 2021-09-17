import React from 'react'
import { InputGroup, FormControl, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const CustomInput = ({ parentCallBack }) => {

    var [type, name] = ('')
    const handleTypeChange = (event) => {
        type = event.target.value
        var retString = type + " " + name
        parentCallBack(retString);
    }
    const handleNameChange = (event) => {
        name = event.target.value
        var retString = type + " " + name
        parentCallBack(retString);
    }
    return (
        <div>
            <InputGroup className="mb-3">
                <Form.Select defaultValue={type} onChange={handleTypeChange} aria-label="Default select example">
                    <option>Choose Data Type</option>
                    <option value="int">int</option>
                    <option value="char">char</option>
                    <option value="string">string</option>
                    <option value="bool">bool</option>
                    <option value="int*">int*</option>
                    <option value="char*">char*</option>
                </Form.Select>
                <FormControl onChange={handleNameChange} aria-label="Text input with dropdown button" />
            </InputGroup>
        </div>
    )
}

export default CustomInput
