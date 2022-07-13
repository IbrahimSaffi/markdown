function InputSection(props){
  return (
    <textarea onChange={(e)=>props.handleChange(e.target.value)}></textarea>
  )
}
export default InputSection