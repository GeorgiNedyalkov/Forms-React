import { useRef } from "react"

export const UncontrolledLoginForm = () => {
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
