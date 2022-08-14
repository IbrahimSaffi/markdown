
import './App.css';
import TopBar from './components/Topbar';
import InputSection from './components/InputSection';
import OutputSection from './components/OutputSection';
import { useState } from 'react';
function App() {
  let [currText, setText] = useState(" ")
  function handleChange(newtext) {
    let BQToWrite = newtext.match(/(?<=\>).*(?= #)/gi)
    let BQToReplace = newtext.match(/\>.*(?= #)/gi)
    if(BQToWrite!==null){
      BQToReplace.forEach((ele,j) => {
        newtext=newtext.replace(BQToReplace[j],`<br/><br/><blockqoute>${BQToWrite[j]}</blockqoute>`)
      });
    }
    let i=6
    while(i>=1){
      let rp = `#{${i}}(.*)`
      let wr = `(?<=#{${i}})[a-z 0-9]*`
      let toReplace = newtext.match(new RegExp(rp,"gi"))
      let toWrite = newtext.match(new RegExp(wr,"gi"))
      if(toWrite!==null){
        toWrite.forEach((ele,j) => {
          newtext = newtext.replace(toReplace[j],`<h${i}>${toWrite[j]}</h${i}><br>`)
        });
      }  
      i--
    }
    let hrToReplace = newtext.match(/---/gim) 
    if(hrToReplace!==null){
     hrToReplace.forEach((ele,j)=>{
        newtext =newtext.replace(hrToReplace[j],`<hr/>`)
      })

    }
    let listToReplace = newtext.match(/-.*/gi)
    let listToWrite = newtext.match(/(?<=-{1})([a-z 0-9])*/gi)
    if(listToWrite!==null){
      listToWrite.forEach((ele,j) => {
        newtext = newtext.replace(listToReplace[j],`<li>${listToWrite[j]}</li>`)
      });
    }
    let boldToWrite = newtext.match(/(?<=\*\*\*).*(?=\*\*\*)/gim)
    let boldToReplace = newtext.match(/\*\*\*.*\*\*\*/gim)
    if(boldToWrite!==null){
      boldToReplace.forEach((ele,j) => {
        newtext=newtext.replace(boldToReplace[j],`<b>${boldToWrite[j]}</b>`)
      });
    }
    let codeToWrite = newtext.match(/(?<=\>\.\.).*(?=\.\.\.)/gim)
    let codeToReplace = newtext.match(/\.\.\..*\.\.\./gim)
    if(codeToWrite!==null){
      codeToReplace.forEach((ele,j) => {
        newtext=newtext.replace(codeToReplace[j],`<br><code>\'${codeToWrite[j]}\'</code>`)
      });
    }
    setText(newtext)
 //Deal with blockqoute
  }
  return (
    <div>
      <TopBar/>
      <div className='main-section'>
        <InputSection handleChange={handleChange}
           />
        <OutputSection text={currText}  />
      </div>
    </div>
  );
}

export default App;
