import "./App.css"
import { useRef } from "react"
import { Calculator } from "./components/Calculator"

function App() {
  return (
    <div className="App">
      <h1>React Forms</h1>

      <h3>React Forms with onsubmit</h3>
      <LoginForm />
      <Calculator />
    </div>
  )
}

const LoginForm = () => {
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

export default App
