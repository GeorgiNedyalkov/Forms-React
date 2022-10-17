const CheckBox = ({ label, value, onChange }) => {
  return (
    <div>
      <h3>Checkbox Component</h3>
      <label>
        <input type="checkbox" value={value} onChange={onChange} />
        {label}
      </label>
    </div>
  )
}

export default CheckBox
