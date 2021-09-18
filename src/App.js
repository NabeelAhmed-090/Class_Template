import React, { useState } from 'react'
import { classCreator } from './functions'
import { Button, InputGroup, FormControl, Container, Row, Col } from 'react-bootstrap'
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

  return (
    <div className="main">
      <Container style={containerStyle}>
        <Row>
          <Col md={4}></Col>
          <Col md={6} style={headingStyle}>
            <h1>Class Template</h1>
          </Col>
        </Row>
        <Row>
          <Col md={4}></Col>
          <Col md={6} style={subHeadingStyle}>
            <h5>Encapsulation in C++</h5>
          </Col>
        </Row>
        <Row style={inputDivStyle}>
          <Col md={1}></Col>
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
          <Col md={7}></Col>
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
          <Col md={4}><Button style={ButtonStyle} onClick={copy_text}><i className="far fa-copy"></i></Button></Col>
        </Row>
      </Container>
    </div >
  );
}

const ButtonStyle = {
  backgroundColor: "#008E97",
  borderColor: "#008E97",
  boxShadow: "none"
}

const outputDivStyle = {
  fontVariant: "simplified",
  textAlign: "left"
}

const outputRowStyle = {
  marginTop: "25px"
}

const errorDivStyle = {
  marginTop: "10px"
}

const inputDivStyle = {
  marginTop: "35px"
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

