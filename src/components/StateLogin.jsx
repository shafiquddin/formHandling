import { useRef } from "react";
import { useState } from "react";

export default function Login() {
    const [enteredValue, setEnteredValue] = useState({
        email: '',
        password: ''
    })

    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false,
    })

    const emailIsValid = didEdit.email && !enteredValue.email.includes("@");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(enteredValue);
        event.target.reset();
    }

    //If you dont want to pass identifier
    // const inputChangeHandler = (e) => {
    //   const {name,value} = e.target;
    //   setEnteredValue(preState=>{
    //   return {  ...preState,[name]:value}
    //   })
    // }



    // using identifier passing
    const inputChangeHandler = (identifier, value) => {
        setEnteredValue(preState => {
            return {
                ...preState,
                [identifier]: value
            }
        });
        setDidEdit(preState => {
            return {
                ...preState,
                [identifier]: false
            }
        })
    }

    const handleBlur = (identifier) => {
        setDidEdit(preState => {
            return {
                ...preState,
                [identifier]: true
            }
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    {/* using no identifier <input id="email" onChange={inputChangeHandler} value={enteredValue.email} type="email" name="email" /> */}
                    <input id="email" onChange={(event) => inputChangeHandler('email', event.target.value)} onBlur={() => handleBlur('email')} value={enteredValue.email} type="email" name="email" />
                    <div className="control-error">
                        {emailIsValid && <p>email is invalid please enter valid email</p>}
                    </div>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    {/* using no identifier <input id="password" onChange={inputChangeHandler} value={enteredValue.password} type="password" name="password" /> */}
                    <input id="password" onChange={(event) => inputChangeHandler('password', event.target.value)} value={enteredValue.password} type="password" name="password" />
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
