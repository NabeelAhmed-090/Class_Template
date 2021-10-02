import React, { useState } from 'react'
import { classCreator } from './functions'
import { Button, InputGroup, FormControl, Form, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomInput from './components/CustomInput';
import './App.css'
import Error from './components/Error';


function App() {
  //states
  const [datamembers, setDataMembers] = useState([])
  const [className, setClassName] = useState('example')
  const [hasError, setHasErrors] = useState(false)

  //function to cocpy the class template created 
  const copy_text = () => {
    var text = document.getElementById("output");
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(text)
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy')
  }

  const handleOnChange = (event) => {
    var removed = event.target.value
    var tempArray = datamembers.filter(x => {
      if (x !== removed) {
        return true;
      }
      else {
        return false;
      }
    })
    setDataMembers(tempArray)
    document.getElementById("remove").value = "default"
  }

  return (
    <div className="main">
      <Container style={containerStyle}>
        <Row style={{ textAlign: "center" }}>
          <Col md={12} style={headingStyle}>
            <h1>Class Template</h1>
          </Col>
        </Row>
        <Row style={{ textAlign: "center", marginRight: "2%" }}>
          <Col md={12} style={subHeadingStyle}>
            <h5>Encapsulation C++</h5>
          </Col>
        </Row>
        <Row style={inputDivStyle}>
          <Col md={4}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputForClass">class name</InputGroup.Text>
              <FormControl onChange={(event) => {
                setClassName(event.target.value)
              }}
                placeholder="example"
                aria-label="className"
                aria-describedby="inputForClass"
              />
            </InputGroup>
          </Col>
          <Col md={2}></Col>
          <Col md={4}>
            <CustomInput setDataMembers={setDataMembers} datamembers={datamembers} setHasErrors={setHasErrors} />
          </Col>
        </ Row>
        <Row style={errorDivStyle}>
          <Col md={1}></Col>
          <Col md={4}></Col>
          <Col md={3}>
            {hasError === true ? <Error /> : ""}
          </Col>
        </Row>
        <hr />
        <Row id="outputRow" style={outputRowStyle}>
          <Col md={1}></Col>
          <Col md={6}>
            <div id="outputDiv" style={outputDivStyle}>
              <pre id="output"><b>{classCreator(className, datamembers)}</b></pre>
            </div>
          </Col>
          <Col md={2}>
            <Form.Select defaultValue="default" style={removeStyle} onChange={handleOnChange} id="remove" aria-label="Default select example">
              <option value="default" disabled={true} hidden={true}>Remove</option>
              {datamembers.map(x => {
                return (
                  <option key={x} value={x}>{x}</option>
                )
              })}
            </Form.Select>
          </Col>
          <Col md={2}><Button style={ButtonStyle} onClick={copy_text}><i className="far fa-copy"></i></Button></Col>
        </Row>
        <hr />
        <Row>
          <Col style={aboutUsStyle} md={12}>
            <pre>
              <h6>Nabeel Ahmed & Hadiya Kashif</h6>
              <h6>         FAST-NUCES</h6>
            </pre>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

const aboutUsStyle = {
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
  marginBottom: "-3%"
}

const removeStyle = {
  outline: "none",
  boxShadow: "none",
  float: "right",
  marginBottom: "10px"
}

const ButtonStyle = {
  backgroundColor: "#008E97",
  borderColor: "#008E97",
  boxShadow: "none",
  float: "right"
}

const outputDivStyle = {
  fontVariant: "simplified",
  textAlign: "left"
}

const outputRowStyle = {
  marginTop: "25px"
}

const errorDivStyle = {
  marginTop: "0px"
}

const inputDivStyle = {
  marginTop: "35px",
  justifyContent: "center"
}

const subHeadingStyle = {
  fontFamily: "Lucida Console", paddingLeft: "6%"
}
const headingStyle = {
  fontFamily: "Lucida Console"
}

const containerStyle = {
  padding: "25px"
}
export default App;

