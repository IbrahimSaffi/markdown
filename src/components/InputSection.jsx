function InputSection(props){
  return (
    <div className="input-section">
      <h3 className="label">MARKDOWN</h3>
      <textarea className="input-area" onChange={(e)=>props.handleChange(e.target.value)}></textarea>

    </div>
  )
}
export default InputSection