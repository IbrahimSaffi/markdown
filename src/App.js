
import './App.css';
import TopBar from './components/Topbar';
import InputSection from './components/InputSection';
import OutputSection from './components/OutputSection';
import { useState } from 'react';
function App() {
  let [currText, setText] = useState(" ")
  function handleChange(newtext) {
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
    let listToReplace = newtext.match(/-.*/gi)
    let listToWrite = newtext.match(/(?<=-{1})([a-z 0-9])*/gi)
    if(listToWrite!==null){
      listToWrite.forEach((ele,i) => {
        newtext = newtext.replace(listToReplace[i],`<li>${listToWrite[i]}</li>`)
      });
    }
    let BQToWrite = newtext.match(/(?<=\>).*(?= #)/gim)
    let BQToReplace = newtext.match(/\>.*(?= #)/gim)
    if(BQToReplace!==null){
      BQToReplace.forEach((ele,i) => {
        newtext=newtext.replace(BQToReplace[i],`<br><blockqoute>${BQToWrite[i]}</blockqoute>`)
      });
    }
    let codeToWrite = newtext.match(/(?<=\>\.\.).*(?=\.\.\.)/gim)
    let codeToReplace = newtext.match(/\.\.\..*\.\.\./gim)
    if(codeToWrite!==null){
      codeToReplace.forEach((ele,i) => {
        newtext=newtext.replace(codeToReplace[i],`<br><code>${codeToWrite[i]}</code>`)
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
