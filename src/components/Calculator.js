import { useRef } from "react"

export const Calculator = () => {
  const firstNumberRef = useRef()
  const secondNumberRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    const firstNumber = firstNumberRef.current.value
    const secondNumber = secondNumberRef.current.value
    console.log(Number(firstNumber) + Number(secondNumber))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="firstNumber">
        <label htmlFor="firstNumber">First number</label>
        <input type="text" id="firstNumber" ref={firstNumberRef} />
      </div>

      <div className="secondNumber">
        <label htmlFor="secondNumber">Second number</label>
        <input type="text" id="secondNumber" ref={secondNumberRef} />
      </div>
      <button type="submit">Sum the numbers</button>
    </form>
  )
}
