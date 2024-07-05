import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        setText(text.toLocaleUpperCase())
        props.showAlert("Converted to uppercase", "success")
    }
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked");
        setText(text.toLocaleLowerCase())
        props.showAlert("Converted to lowercase", "success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
        console.log("On chnage");
    }
    const handleCopy = ()=>{
        console.log("I am copy");
        let text = document.getElementById("myBox")
        text.select();
        text.setSelectionRange(0, 9999)
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard", "primary")
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces are removed", "danger")
    }
const [text, setText] = useState("")

  return (
    <>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
            <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'#042743',color: props.mode==='light'?'black':'white'}} id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>Covert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Covert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Spaces</button>
    </div>
    <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{((text.trim()).split(" ").length)} words and {text.length} characters</p>
        <p>{(0.008 * (text.trim()).split(" ").length)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>

  )
}
