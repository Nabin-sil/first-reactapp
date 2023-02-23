import React from 'react'

export default function Form(props) {
  return (
    <div>
      
<div class="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">{props.labelname}</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
</div>

  <button type="button" className="btn btn-primary m-2">Submit</button>
    </div>
  )
}
