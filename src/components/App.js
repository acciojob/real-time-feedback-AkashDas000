
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [name, setName] = useState("")
  const [showName, setShowName] = useState(false);

  const [email, setEmail] = useState("")
  const [showEmailError, setShowEmailError] = useState(false)

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)

  const handleName = (e) => {
    const userInput = e.target.value;
    setName(userInput);

    if(userInput.length <= 0){
      setShowName(true);
    }else if(userInput.length > 0){
      setShowName(false)
    }
  }

  const handleEmail = (e) => {
    const userEmail = e.target;
    setEmail(userEmail.value);

    if(!userEmail.checkValidity()){
      setShowEmailError(true)
    }else{
      setShowEmailError(false)
    }
  }

  const handlePassword = (e) => {
    const userPass = e.target.value;
    setPassword(userPass)

    if(userPass.length < 6){
      setShowPassword(true)
    }else if(userPass.length >= 6){
      setShowPassword(false)
    }
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <form>
          <p>Name:</p>
          <input id="name" type="text" value={name} onChange={(e) =>handleName(e)} />
          {showName && <p className="error-message" style={{color: "red"}}>Name is required</p>}
          <p>Email:</p>
          <input id="email" type="email" value={email} onChange={(e) => handleEmail(e)}/>
          {showEmailError && <p className="error-message" style={{color: "red"}}>Invalid Email</p>}
          <p>Password:</p>
          <input id="password" type="password" value={password} onChange={(e) => handlePassword(e)}/>
          {showPassword && <p className="error-message" style={{color: "red"}}>Password must be at least 6 characters</p>}
        </form>
          <button type="submit">Submit</button>
    </div>
  )
}

export default App
