import React, { useState } from 'react'
import { classCreator } from './functions'
import { Button, InputGroup, FormControl, Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomInput from './components/CustomInput';
import './App.css'


function App() {
  const [datamembers, setDataMembers] = useState([])
  const [className, setClassName] = useState('example')
  const [hasError, setHasErrors] = useState(false)
  var inputRet = ('')

  const handleCallBack = (childData) => {
    inputRet = childData
  }

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
      <Container style={{ padding: "25px" }}>
        <Row>
          <Col md={4}></Col>
          <Col md={6} style={{ fontFamily: "Lucida Console" }}>
            <h1>Class Template</h1>
          </Col>
        </Row>
        <Row>
          <Col md={4}></Col>
          <Col md={6} style={{ fontFamily: "Lucida Console", paddingLeft: "6%" }}>
            <h5>Encapsulation in C++</h5>
          </Col>
        </Row>
        <Row style={{ marginTop: "35px" }}>
          <Col md={1}></Col>
          <Col md={4}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">class name</InputGroup.Text>
              <FormControl onChange={(event) => {
                setClassName(event.target.value)
              }}
                placeholder="example"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
          <Col md={2}></Col>
          <Col md={4}>
            <CustomInput parentCallBack={handleCallBack} />
          </Col>
        </ Row>
        <Row style={{ marginTop: "10pxy" }}>
          <Col md={1}></Col>
          <Col md={2}>
            <Button style={{ backgroundColor: "#008E97", borderColor: "#008E97", boxShadow: "none" }} onClick={() => {
              if (inputRet !== '' && datamembers.indexOf(inputRet) === -1) {
                setDataMembers([...datamembers, inputRet])
                setHasErrors(false)
              }
              else if (datamembers.indexOf(inputRet) !== -1) {
                setHasErrors(true)
              }
            }}>
              Confirm
            </Button>
          </Col>
          <Col md={4}></Col>
          <Col md={3}>
            {hasError === true ? <h6 style={{ color: "red" }}>*Data member already exists</h6> : ""}
          </Col>
        </Row>
        <hr />
        <Row style={{ marginTop: "25px" }}>
          <Col md={1}></Col>
          <Col md={8}>
            <div style={{ textAlign: "left" }}>
              <pre id="output" style={{ fontVariant: "simplified" }}><b>{classCreator(className, datamembers)}</b></pre>
            </div>
          </Col>
          <Col md={2}><Button style={{ backgroundColor: "#008E97", borderColor: "#008E97", boxShadow: "none" }} onClick={copy_text}><i class="far fa-copy"></i></Button></Col>
        </Row>
      </Container>
    </div >
  );
}

export default App;
