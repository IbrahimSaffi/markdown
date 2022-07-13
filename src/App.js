
import './App.css';
import TopBar from './components/Topbar';
import InputSection from './components/InputSection';
import OutputSection from './components/OutputSection';
import { useState } from 'react';
function App() {
  let [currText, setText] = useState(" ")
  function handleChange(newtext) {

    let regH1 = /#(\w+)/gim
    newtext = newtext.replaceAll(regH1,`<h1>Big Heading</h1>`)
    setText(newtext)
   
  }
  return (
    <div>
      <TopBar className="menu" />
      <div className='main-section'>
        <InputSection handleChange={handleChange}
          className="input-section" />
        <OutputSection text={currText} className="output-section" />
      </div>
    </div>
  );
}

export default App;
