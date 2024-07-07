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
        // console.log("I am copy");
        // let text = document.getElementById("myBox")
        // text.select();
        // text.setSelectionRange(0, 9999)
        navigator.clipboard.writeText(text)
        // document.getSelection().removeAllRanges()
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
        <h1 className='mb-4'>{props.heading}</h1>
        <div className='mb-3'>
            <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'#13466e',color: props.mode==='light'?'black':'white'}} id="myBox" onChange={handleOnChange} value={text} rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary my-1 mx-2' onClick={handleUpClick}>Covert to Uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary my-1 mx-2' onClick={handleLoClick}>Covert to Lowercase</button>
        <button disabled={text.length===0} className='btn btn-primary my-1 mx-2' onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className='btn btn-primary my-1 mx-2' onClick={handleExtraSpaces}>Remove Spaces</button>
    </div>
    <div className='container my-3' style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((item)=>{return item !==""}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((item)=>{return item !==""}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>

  )
}
