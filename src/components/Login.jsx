import { useRef } from "react";
import { useState } from "react";

export default function Login() {
  const [formIsInvalid, setFormIsInvalid] = useState({
    email: false,
    password: false
  })
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredpassword = passwordRef.current.value;

    const emailIsValid = enteredEmail.includes('@');
    const passwordIsValid = enteredpassword.length < 3

    if (!emailIsValid) {
      setFormIsInvalid(preState => {
        return {
          ...preState,
          email: true
        }
      })
      return;
    } 
    
    if(!passwordIsValid){
      setFormIsInvalid(preState => {
        return {
          ...preState,
          password: true
        }
      })
      return;
    }
    setFormIsInvalid({email:false,password:false})
    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" ref={emailRef} type="email" name="email" />
          <div className="control-error">
            {formIsInvalid.email && <p>email is invalid please enter valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" ref={passwordRef} type="password" name="password" />
          <div className="control-error">
            {formIsInvalid.password && <p>password is invalid please enter valid password</p>}
          </div>
        </div>
        
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
