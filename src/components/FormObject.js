import { useState } from "react"

const INITIAL_STATE = {
  email: "",
  password: "",
}

const VALIDATION = {
  email: [
    {
      isValid: (value) => !!value,
      message: "Is required.",
    },
    {
      isValid: (value) => /\S+@\S+\.\S+/.test(value),
      message: "Needs to be an email.",
    },
  ],
  password: [
    {
      isValid: (value) => !!value,
      message: "Is required",
    },
  ],
}

const getErrorFields = (form) => {
  Object.keys(form).reduce((acc, key) => {
    if (!VALIDATION[key]) return acc

    const errorsPerField = VALIDATION[key]
      .map((validation) => ({
        isValid: validation.isValid([form[key]]),
        message: validation.message,
      }))
      .filter((errorsPerField) => !errorsPerField.isValid)
    return { ...acc, [key]: errorsPerField }
  }, {})
}

const getDirtyFields = (form) =>
  Object.keys(form).reduce((acc, key) => {
    const isDirty = form[key] !== INITIAL_STATE[key]

    return { ...acc, [key]: isDirty }
  }, {})

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

  const errorFields = getErrorFields(form)
  console.log(errorFields)

  const dirtyFields = getDirtyFields(form)

  const hasChanges = Object.values(dirtyFields).every((isDirty) => !isDirty)

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
      <button disabled={hasChanges} type="submit">
        Submit
      </button>
    </form>
  )
}
