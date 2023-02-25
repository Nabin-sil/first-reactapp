import React, {useState} from 'react'


export default function Form(props) {

  const handleonChange =(event)=>{
    console.log("Plase change")
    setText(event.target.value)

  }
  

  const handleonClick =()=>{
    console.log("Plase clicke")
    let newText = text.toUpperCase();
    setText(newText)
  }


 const handleloClick =()=>{
    console.log("Plase clicke")
    let newText = text.toLowerCase();
    setText(newText)
  }


 const handleclClick =()=>{
    setText('')
  }

  const handlecopyClick=()=>{
     var text = document.getElementById("myBox")
     text.select();
     text.setSelectRange(0, 9999);
     navigator.clipboard.writeText(text.value);
  }


  const handleextraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join (" "))
  }

const[text, setText] = useState('')
  
  return (
    <div>
      
<div class="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">{props.labelname}</label>
  <textarea className="form-control"  value={text} onChange={handleonChange} id="exampleFormControlTextarea1" rows="6"></textarea>
</div>

  <button type="button" className="btn btn-primary m-2" onClick={handleonClick}>Change to upper case</button>
  <button type="button" className="btn btn-secondary m-2" onClick={handleloClick}>Change to lower case</button>
  <button type="button" className="btn btn-danger m-2" onClick={handleclClick}>Clear text</button>
  <button type="button" className="btn btn-danger m-2" onClick={handlecopyClick}>Copy text</button>
  <button type="button" className="btn btn-success m-2" onClick={handleextraSpace}>Clear Space</button>
    
    <div className="container mt-3">

    <h3>Your heading summmary</h3>
    <p>
      {text.split(" ").length} words {text.length} charcters
      </p> 

    </div>
    
    </div>
  )
}
