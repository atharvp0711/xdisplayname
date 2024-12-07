import React from 'react'
import { useState } from 'react'

const App = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault() ;
    if(firstName && lastName){
      setIsSubmitted(true) ;
    }
    else{
      setIsSubmitted(false) ;
    }
  }

  return (
    <div>
      <h1> Full Name Display </h1>
      <form onSubmit={handleSubmit}>
        <div className = "input-container1">
          <label> First Name : </label> 
          <input type = "text" name = "firstName" value={firstName} onChange={(e) => setFirstName(e.target.value) } required />          
        </div>
        <div className = "input-container2" style={ { paddingTop : "10px"}}>
          <label> Last Name : </label> 
          <input type = "text" name = "lastName" value={lastName} onChange={(e) => setLastName(e.target.value) } required />          
        </div>
        <button 
        type='submit'
        style = {{marginTop : "15px", marginLeft : "50px"}}>
          Submit
        </button>
      </form>
      {isSubmitted && (
          <h3> Full Name: {firstName} {lastName} </h3>
      )}
    </div>
  )
}

export default App
