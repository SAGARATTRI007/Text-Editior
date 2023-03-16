
import React from 'react'

export default function About(props) {

    // const [myStyle, setmystyle] = useState({
    //     color:'black',
    //     backgroundColor: 'white',
    //     border: '1px solid white',
    // })
    let myStyle = {
        color :props.mode==='dark'?'white': "#042743",
        backgroundColor : props.mode==='dark'?"#042743": 'white'
    }

    
    
  return (
    <div className="container my-3" style={myStyle}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze Your Text</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            First Reaxt give you a way to analyze your text quickley and efficiently. Be it word count, character count or.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
           <strong>Free To Use</strong> 
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            First React is a free character counter tool that provide instant character count & word count 
                staticites from a given text. Firxt React reports the number of words and characters. Thus it is a suitable for writing 
                text with word/character with limit.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compitable</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            This word counter software works in any web browser such as chrome, Firebox, Internet Explorer, safari, opera.
            It suits to count words in Facebook, blogs, books, excel sheets, pdf documents, essays etc.
            
        </div>
        </div>
    </div>
    </div>
    
    </div>
  )
}
