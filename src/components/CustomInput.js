import React from 'react'
import { InputGroup, FormControl, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const CustomInput = ({ setDataMembers, datamembers, setHasErrors }) => {

    var [type, name] = ('')
    var retString = ('')

    //function to update states and clear the input fields
    const handleOnClick = () => {
        console.log(type, name)
        if ((typeof (type) !== 'undefined' && typeof (name) !== 'undefined')
            && (type.length !== 0 && name.length !== 0)
            && type !== 'default') {
            retString = type + " " + name
            if (retString !== ''
                && datamembers.indexOf(retString) === -1
                && document.getElementById("type").value !== "default") {
                setDataMembers([...datamembers, retString])
                setHasErrors(false)
            }
            else if (datamembers.indexOf(retString) !== -1) {
                setHasErrors(true)
            }
            document.getElementById("name").value = ""
            document.getElementById("type").value = "default"
            retString = ''
        }
    }
    //funtion to update the type variable with current value of option selected
    const handleTypeChange = (event) => {
        type = event.target.value
    }
    //funtion to update the name variable with current value of form control 
    const handleNameChange = (event) => {
        name = event.target.value
    }

    return (
        <div>
            <InputGroup className="mb-3">
                <Form.Select id="type" style={inputStyles} defaultValue={type} onChange={handleTypeChange} aria-label="Default select example">
                    <option value="default">Choose Data Type</option>
                    <option value="int">int</option>
                    <option value="char">char</option>
                    <option value="string">string</option>
                    <option value="bool">bool</option>
                    <option value="int*">int*</option>
                    <option value="char*">char*</option>
                </Form.Select>
                <FormControl id="name" style={inputStyles} onChange={handleNameChange} aria-label="Text input with dropdown button" />
            </InputGroup>
            <Button style={buttonStyle} onClick={handleOnClick}>
                <i className="fas fa-plus-square"></i>
            </Button>
        </div>
    )
}

const inputStyles = {
    outline: "none",
    boxShadow: "none"
}

const buttonStyle = {
    backgroundColor: "#008E97",
    marginTop: "5%",
    outline: "none",
    borderColor: "#008E97",
    boxShadow: "none",
    float: "right"
}

export default CustomInput
