import useInput from "../hooks/useInput";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";

export default function Login() {

const {value:emailValue , onBlurHandler:onEmailBlurHandler,onInputChangeHandler:onEmailChangeHandler,error:emailValid} = useInput('',(value)=> isEmail(value) && isNotEmpty(value));
const {value:passwordValue , onBlurHandler:onPasswordBlurHandler,onInputChangeHandler:onPasswordChangeHandler,error:passwordValid} = useInput('',(value)=> hasMinLength(value,6) && isNotEmpty(value));
  const handleSubmit = (event) => {
    event.preventDefault();
    if(emailValid || passwordValid){
      return;
    }
    console.log(emailValue,passwordValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" value={emailValue} onChange={onEmailChangeHandler} onBlur={onEmailBlurHandler} type="email" name="email" />
          <div className="control-error">
            {emailValid && <p>email is invalid please enter valid email</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" value={passwordValue} onChange={onPasswordChangeHandler} onBlur={onPasswordBlurHandler}  type="password" name="password" />
          <div className="control-error">
            {passwordValid && <p>password is invalid please enter valid password</p>}
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
