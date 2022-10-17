import "./App.css"
import { useRef, useState } from "react"
import { Calculator } from "./components/Calculator"

function App() {
  return (
    <div className="App">
      <h1>React Forms</h1>

      <h3>React Forms with onsubmit</h3>
      <UncontrolledLoginForm />
      {/* <Calculator /> */}
    </div>
  )
}

const UncontrolledLoginForm = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    const email = emailRef.current.value
    const password = passwordRef.current.value

    alert(email + " " + password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="email">
        <label htmlFor="email">Email</label>
        <input id="email" type="text" ref={emailRef} />
      </div>
      <div className="password">
        <label htmlFor="password">Password</label>
        <input id="password" type="text" ref={passwordRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

const ControlledLoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    alert(email + " " + password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="email">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" value={email} onChange={handleEmail} />
      </div>

      <div className="password">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={handlePassword}
        />
      </div>
    </form>
  )
}

export default App
