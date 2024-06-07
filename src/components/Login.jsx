import { useRef } from "react";
import { useState } from "react";

export default function Login() {
const emailRef = useRef();
const passwordRef = useRef(); 
  // const [enteredValue,setEnteredValue] = useState({
  //   email:'',
  //   password:''
  // })
  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    console.log(enteredEmail,enteredPassword)
  }

  //If you dont want to pass identifier
  // const inputChangeHandler = (e) => {
  //   const {name,value} = e.target;
  //   setEnteredValue(preState=>{
  //   return {  ...preState,[name]:value}
  //   })
  // }


  
  // using identifier passing
  // const inputChangeHandler = (identifier,value) => {
  //   setEnteredValue(preState => {
  //     return {
  //       ...preState,
  //       [identifier]:value
  //     }
  //   })
  // }
  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          {/* using no identifier <input id="email" onChange={inputChangeHandler} value={enteredValue.email} type="email" name="email" /> */}
          {/* <input id="email" onChange={(event)=>inputChangeHandler('email',event.target.value)} value={enteredValue.email} type="email" name="email" /> */}
          <input id="email" ref={emailRef} type="email" name="email" />

        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          {/* using no identifier <input id="password" onChange={inputChangeHandler} value={enteredValue.password} type="password" name="password" /> */}
          {/* <input id="password" onChange={(event)=>inputChangeHandler('password',event.target.value)} value={enteredValue.password} type="password" name="password" /> */}
          <input id="password" ref={passwordRef} type="password" name="password" />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
