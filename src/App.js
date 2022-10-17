import "./App.css"
import { useRef, useState } from "react"
import { Calculator } from "./components/Calculator"
import { UncontrolledLoginForm } from "./components/UncontrolledLoginForm"
import { ControlledLoginForm } from "./components/ControlledLoginForm"
import { FormObject } from "./components/FormObject"
import CheckBox from "./components/Checkbox"
import RadioButton from "./components/RadioButton"

function App() {
  const options = [
    { label: "Fruit", value: "fruit" },
    { label: "Vegetable", value: "vegetable" },
    { label: "Meat", value: "meat" },
  ]

  const [checked, setChecked] = useState(false)
  const [value, setValue] = useState(false)
  const [optionValue, setOptionValue] = useState("fruit")

  const handleOptionChange = (event) => {
    setOptionValue(event.target.value)
  }

  const handleValueChange = () => {
    setValue(!value)
  }

  const handleChange = () => {
    setChecked(!checked)
  }

  return (
    <div className="App">
      <h1>React Forms</h1>

      <CheckBox label="Single" checked={checked} onChange={handleChange} />
      <RadioButton label="Cat" value={value} onChange={handleValueChange} />

      <Dropdown
        label="What da we eat?"
        value={optionValue}
        options={options}
        onChange={handleOptionChange}
      />

      <p>We eat {optionValue}! </p>
    </div>
  )
}

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  )
}

export default App
