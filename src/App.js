import "./App.css"
import { useRef, useState } from "react"
import { Calculator } from "./components/Calculator"
import { UncontrolledLoginForm } from "./components/UncontrolledLoginForm"
import { ControlledLoginForm } from "./components/ControlledLoginForm"
import { FormObject } from "./components/FormObject"

function App() {
  return (
    <div className="App">
      <h1>React Forms</h1>

      <h3>React Forms with onsubmit</h3>
      {/* <UncontrolledLoginForm /> */}
      {/* <Calculator /> */}
      {/* <ControlledLoginForm /> */}
      <FormObject />
    </div>
  )
}

export default App
