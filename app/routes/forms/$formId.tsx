import { Link } from "@remix-run/react";



export default function RequestFormById(){
  // give short description of form 
  // provide button to click to request that form

  return (
    <div>
      <h2> Form for Requesting Widget</h2>
      <p>Form ID: A113</p>
      <p>Use this form to request a widget</p>
      <div><Link to="request-form">Link to A113</Link> </div>
    </div>
  )
}

