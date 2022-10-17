import { useState } from "react"

const INITIAL_STATE = {
  email: "",
  password: "",
}

export const FormObject = ({ onLogin }) => {
  const [form, setForm] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: [e.target.value],
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(form.email + " " + form.password)

    onLogin(form)

    setForm(INITIAL_STATE)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="email">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div className="password">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>
      <button>Submit</button>
    </form>
  )
}
