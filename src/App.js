import React, { useState } from 'react'
import { classCreator } from './functions'
import { Button, InputGroup, FormControl, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomInput from './components/CustomInput';
import './App.css'


function App() {
  const [datamembers, setDataMembers] = useState([])
  const [className, setClassName] = useState('example')
  var inputRet = ('')
  var inputClass = ('')

  const handleCallBack = (childData) => {
    inputRet = childData
  }
  return (
    <div className="main">
      <Container style={{ padding: "25px" }}>
        <Row>
          <Col md={5}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">class name</InputGroup.Text>
              <FormControl defaultValue={className} onChange={(event) => {
                setClassName(event.target.value)
              }}
                placeholder="student"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
          <Col md={1}></Col>
          <Col md={6}>
            <CustomInput parentCallBack={handleCallBack} />
          </Col>
        </ Row>
        <Row style={{ marginTop: "10px" }}>
          <Col md={2}>
            <Button style={{ backgroundColor: "#008E97", borderColor: "#008E97", boxShadow: "none" }} onClick={() => {
              if (inputRet !== '') {
                setDataMembers([...datamembers, inputRet])
              }
            }}>
              Confirm
            </Button>
          </Col>
          <Col md={10}></Col>
        </Row>
        <hr />
        <Row style={{ marginTop: "25px" }}>
          <Col md={10}>
            <div style={{ textAlign: "left" }}>
              <pre style={{ fontVariant: "simplified" }}><b>{classCreator(className, datamembers)}</b></pre>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default App;
