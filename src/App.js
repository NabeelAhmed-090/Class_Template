import { useState } from 'react'
import { getter_creator, setter_creator_normal, setter_creator_pointers } from './functions'
import { InputGroup, Form, FormControl, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomInputGroup from './components/CustomInputGroup';

export const classCreator = (classname, dataMembers) => {
  var mainString = ''
  mainString +=
    `class ${classname} {
      ${dataMembers.map((x, index) => {
      return x + ";"
    }).join("\n")
    }
  }
  public:
  ${dataMembers.map((x, index) => {
      var type = x.split(" ")
      console.log("split string ", type)
      { return getter_creator(type[0], type[1]) }
    }).join("\n")
    }

    ${dataMembers.map((x, index) => {
      var type = x.split(" ")
      if (type[0].indexOf("*") !== -1) {
        { return setter_creator_pointers(type[0], type[1]) }
      }
      else {
        { return setter_creator_normal(type[0], type[1]) }
      }
    }).join("\n")
    }
  }`
  return mainString
}

const changeValue = (dropDownValue, setDropDownValue, value) => {
  setDropDownValue({ dropDownValue: value })
}



function App() {
  const [datamembers, setDataMembers] = useState(["int id", "char* name"])
  const [numberOfDataMembers, setNumberOfDataMembers] = useState(1)

  const onChange = (event) => {
    setNumberOfDataMembers(event.target.value);
    console.log(numberOfDataMembers)
  };

  const printInputValues = () => {
    for (var i = 0; i < numberOfDataMembers; i++) {
      <CustomInputGroup />
    }
  }
  return (
    <div className="App">
      <button onClick={() => {
        setDataMembers([...datamembers, "int age"])
      }}> click Me</button>
      <pre>{classCreator("Student", datamembers)}</pre>
      <Form.Select value={numberOfDataMembers} onChange={onChange} aria-label="Default select example">
        <option>Number of Data Members</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </Form.Select>
      <CustomInputGroup />
    </div >
  );
}

export default App;
