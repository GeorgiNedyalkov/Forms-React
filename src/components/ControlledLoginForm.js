import { useState } from "react"

export const ControlledLoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
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
      <button type="submit">Submit</button>
    </form>
  )
}
