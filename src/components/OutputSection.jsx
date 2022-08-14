function OutputSection(props){
  return(
  <div className="output-section">
    <h3 className="label" >PREVIEW</h3>
  <p dangerouslySetInnerHTML={{__html:props.text}} >
  </p>
  </div>

  )
}
export default OutputSection