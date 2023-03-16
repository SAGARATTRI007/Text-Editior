import React, {useState} from 'react'


export default function TextForm(props) {

const [text, setText] = useState('');
const handleUpclick =()=>{
    // console.log("UpperCase is Clicked");
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert("Convert to UpperCase", "success");
}

const handledownclick =()=>{
  // console.log("UpperCase is Clicked");
  let newText= text.toLowerCase();
  setText(newText)
  props.showAlert("Convert to LowerCase", "success");
}

const handleToCopy =()=>{
  var text = document.getElementID("mybox");
  text.select();
  navigator.clipboard.writeText(text.value);
  
}
const handleOnchange =(event)=>{
    // console.log('On change');
    setText(event.target.value);
    
}
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">

            <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'#042743':'white',
            color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpclick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handledownclick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleToCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h2>Your text summary</h2>
    <p>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters. </p>
    <h2>Priview</h2>
    <p>{text.length>0?text : "Nothing to priview!" }</p>
    </div>
    </>
  )
}
